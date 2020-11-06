import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";
import {AppTimeComponent} from "./components/time.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class TimeModule { }

