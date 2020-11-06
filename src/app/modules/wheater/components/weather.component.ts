import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WeatherService} from "../services/weather-service";


@Component({
  selector: 'app-weather',
  template: `
    <div class="container vh-100">
      <h3 class="ml-5 w-5 m-t-2 page-text-link link-small-text" (click)="goBack()">Back</h3>
      <div class="h-100 d-flex justify-content-center align-items-center">
        <div *ngIf="isLoaded">
          <div class="row">
            <h1>City: {{weather?.city_name}}, {{weather?.weather?.description}}</h1>
            <app-icon [pathToIcon]="pathToIcon"></app-icon>
          </div>
          <div>
            <h4>Temperature: {{weather?.temp}}<span class="celsius"></span>, Feels Like {{weather?.app_temp}}<span class="celsius"></span></h4>
            <h4>Last observation time: {{weather?.ob_time}}</h4>
            <h4>Wind speed: {{weather?.wind_spd}} m/s</h4>
            <h4>Wind direction: {{weather?.wind_cdir_full}}</h4>
            <h4>Visibility : {{weather?.vis}} km</h4>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppWeatherComponent implements OnInit {

  private weather;
  pathToIcon: string;

  isLoaded: boolean = false;

  constructor(private wheaterService: WeatherService,
              private router: Router) {}

  async ngOnInit() {
    this.weather = await this.wheaterService.getCurrentWheater().then(response => response ? response.data[0] : null);
    this.pathToIcon = this.wheaterService.getIcon(this.weather.weather.icon);
    this.isLoaded = true;
    this.setOnCurrentLastObservationDate();
  }

  goBack(): void {
    this.router.navigate([''])
  }

  private setOnCurrentLastObservationDate(): void {
    const observDate = new Date(this.weather.ob_time);
    const offsetDate = observDate.getTime() + (-observDate.getTimezoneOffset() * 60000);
    const onCurrentDate = new Date(offsetDate).toLocaleString();
    this.weather.ob_time = onCurrentDate;
  }

}
