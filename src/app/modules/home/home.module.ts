import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";
import {AppHomeComponent} from "./components/home.component";


@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }

