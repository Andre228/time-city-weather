import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time',
  template: `
  <div class="container vh-100">
    <h3 class="ml-5 w-5 m-t-2 page-text-link link-small-text" (click)="goBack()">Back</h3>
    <div class="h-100 d-flex justify-content-center align-items-center">
      <h1 class="display-2">{{time}}</h1>
    </div>
  </div>
  `
})
export class AppTimeComponent implements OnInit, OnDestroy {

  time: string = '';
  private interval;

  constructor(private router: Router) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  goBack(): void {
    this.router.navigate([''])
  }

}
