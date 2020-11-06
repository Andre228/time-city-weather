import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";
import {AppCityComponent} from "./components/city.component";
import {AppPostComponent} from "./components/post.component";
import {CITY_PROVIDERS} from "./services/index";


@NgModule({
  declarations: [
    AppCityComponent,
    AppPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [...CITY_PROVIDERS],
  bootstrap: []
})
export class CityModule { }
