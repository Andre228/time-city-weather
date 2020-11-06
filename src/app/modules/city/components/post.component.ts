import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  template: `
    <div class="mt-5">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <div [innerHTML]="html">
            </div>
            <div class="mt-2 flex-col-start">
              <span>Touched: {{touched | date: 'dd.MM.yyyy HH:mm'}}</span>
              <a [href]="href" class="btn btn-primary">Go detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppPostComponent implements OnInit {

  @Input() title: string = '';
  @Input() html: string = '';
  @Input() href: string = '';
  @Input() touched: string = '';

  constructor() {}

  ngOnInit() {}

}
