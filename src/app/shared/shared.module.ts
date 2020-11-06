import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ICON_DECLARATIONS} from "./icon/index";

@NgModule({
  declarations: [
    ...ICON_DECLARATIONS
  ],
  exports: [
    ...ICON_DECLARATIONS
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
