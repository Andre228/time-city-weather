import { Component, OnInit } from '@angular/core';
import {CityService, PostInfo} from "../services/city.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-city',
  template: `
    <div *ngIf="isLoaded" class="container vh-100">
    <h3 class="ml-5 w-5 mt-2 page-text-link link-small-text" (click)="goBack()">Back</h3>
    <div class="row justify-content-center">
      <h3>Your current city is {{cityName}}</h3>
    </div>
      <div class="h-100">
        <div class="row row-cols-3">
          <app-post class="col-sm-4" 
                    *ngFor="let post of posts"
                    [title]="post.title"
                    [href]="post.link"
                    [touched]="post.touched"
                    [html]="post.contentHtml">
          </app-post>
        </div>
      </div>
    </div>
  `
})
export class AppCityComponent implements OnInit {

  posts: PostInfo [] = [];
  cityName: string = '';
  isLoaded: boolean = false;


  constructor(private cityService: CityService,
              private router: Router) {}

  async ngOnInit() {
    this.posts = await this.cityService.getPosts().then(response => response);
    this.cityName = this.cityService.getCityName();
    this.isLoaded = true;
  }

  goBack(): void {
    this.router.navigate([''])
  }

}
