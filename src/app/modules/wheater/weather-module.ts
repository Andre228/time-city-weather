import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";
import {AppWeatherComponent} from "./components/weather.component";
import {WEATHER_PROVIDERS} from "./services/index";


@NgModule({
  declarations: [
    AppWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [...WEATHER_PROVIDERS],
  bootstrap: []
})
export class WeatherModule { }

