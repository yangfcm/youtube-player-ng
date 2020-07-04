import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <app-margin></app-margin>
    <div class="ui red message">
      <app-margin></app-margin>
      <div class="ui header aligned center">
        The page you requested doesn't exist.
      </div>
      <app-margin></app-margin>
      <div class="ui header aligned center">
        <a routerLink="/" class="ui red basic button">
          Back to Home
        </a>
      </div>
      <app-margin></app-margin>
    </div>
  `,
  styles: [],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
