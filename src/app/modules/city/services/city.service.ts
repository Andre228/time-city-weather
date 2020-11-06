import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WeatherService} from "../../wheater/services/weather-service";


interface Posts {
  search: [any]
  searchinfo: {}
}

interface Links {
  pages: {}
}

export interface PostInfo {
  title: string;
  link: string;
  touched: string;
  contentHtml: string;
}


@Injectable()
export class CityService {

  private cityName: string = '';
  private posts: Posts;
  private links: Links;


  constructor(private http: HttpClient,
              private weatherService: WeatherService) {}

  getPosts(): Promise<any> {

    return new Promise(async(resolve, reject) => {
      try {

        const weatherInfo = await this.weatherService.getCurrentWheater().then(response => response.data[0]);
        this.cityName = weatherInfo.city_name;

        const urlPosts = `https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=${weatherInfo.city_name}&origin=*`;
        this.posts = await this.http.get(urlPosts, { headers: this.getHeaders() }).toPromise().then((response: any) => response.query as Posts);

        let ids: string = null;
        this.posts.search.forEach(post => {
          ids += post.pageid + '|';
        });
        let res = ids.slice(4, ids.length - 1);

        const urlIds = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=info&inprop=url&pageids=${res}&origin=*`;
        this.links = await this.http.get(urlIds, { headers: this.getHeaders() }).toPromise().then((response: any) => response.query as Links);
        resolve(this.getPostsInfo());

      } catch (error) {
        console.error(error);
      }

    })
  }

  getCityName(): string {
    return this.cityName;
  }

  private getPostsInfo(): PostInfo [] {
    let posts: PostInfo [] = [];
    let index = 0;
    const pages = this.links.pages;
    for(let key in pages) {
      let post: PostInfo = {
        title:  pages[key].title,
        link: pages[key].canonicalurl,
        touched: pages[key].touched,
        contentHtml: this.posts.search[index].snippet
      };
      posts.push(post);
      index++;
    }

    return posts;
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Origin': '*'
    });
    return headers;
  }

}
