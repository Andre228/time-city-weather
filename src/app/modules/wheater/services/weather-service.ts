import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HOST, ICON_PATH} from "../../../core/config";

interface LocationInfo {
  coords: GeolocationCoordinates;
  timestamp: number;
}

interface GeolocationCoordinates {
  accuracy?: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  latitude: number;
  longitude: number;
  speed?: number | null;
}

@Injectable()
export class WeatherService {

  private readonly API_KEY = '0204dc6e8cd34879a10536609b280120';

  private geo: LocationInfo;


  constructor(private http: HttpClient) {}

  getCurrentWheater(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        navigator.geolocation.getCurrentPosition((geo) => {
          this.geo = <LocationInfo>geo;
          const url = `https://api.weatherbit.io/v2.0/current?lat=${this.geo.coords.latitude}&lon=${this.geo.coords.longitude}&key=${this.API_KEY}`;
          resolve(this.http.get(url).toPromise());
        });
      } catch(error) {
        reject(error);
      }
    });
  }

  getGeo(): LocationInfo {
    return this.geo;
  }

  getIcon(icon: string): string {
    return HOST + ICON_PATH + icon + '.png';
  }

}
