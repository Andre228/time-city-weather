import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  template: `
    <div>
      <img width="90" height="90" [src]="pathToIcon">
    </div>
  `
})
export class AppIconComponent implements OnInit {

  @Input() pathToIcon: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
