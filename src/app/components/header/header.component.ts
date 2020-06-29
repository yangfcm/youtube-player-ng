import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="ui menu stackable">
      <a routerLink="/" class="header item ui">
        <i class="video icon red"></i>
        FanTube</a
      >
      <div class="right menu">
        <div class="item">
          <div class="ui icon input" style="min-width: 10px;">
            <input type="text" placeholder="Search video..." />
            <i class="search icon link" (click)="handleSearch()"></i>
          </div>
          <div>
            <button
              class="ui button primary"
              style="margin-left: 1rem; width: 110px;"
            >
              <i class="sign in alternate icon"></i>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleSearch() {
    console.log('search');
  }
}
