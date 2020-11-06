import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {CityModule} from "./city/city.module";
import {TimeModule} from "./time/time.module";
import {WeatherModule} from "./wheater/weather-module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    CityModule,
    TimeModule,
    WeatherModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
