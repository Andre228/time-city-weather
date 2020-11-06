import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CITY_ROUTING} from "./city-routing";
import {TIME_ROUTING} from "./time-routing";
import {WEATHER_ROUTING} from "./weather-routing";
import {AppHomeComponent} from "../../modules/home/components/home.component";

const routes: Routes = [

  {path: '', component: AppHomeComponent},
  ...CITY_ROUTING,
  ...TIME_ROUTING,
  ...WEATHER_ROUTING,
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
