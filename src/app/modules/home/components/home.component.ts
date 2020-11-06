import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <div class="container vh-100">
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div>
        <h3 class="mb-5">Hello and welcome to time weather city app</h3>
        <div class="row justify-content-between">
          <h1 class="page-text-link" (click)="goTo('time')">TIME</h1>
          <h1 class="page-text-link" (click)="goTo('wheater')">WHEATER</h1>
          <h1 class="page-text-link" (click)="goTo('city')">CITY</h1>
        </div>
      </div>
    </div>
  </div>
  `
})
export class AppHomeComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(link: string): void {
    if (link) this.router.navigate([link])
  }


}
