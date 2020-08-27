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
          <app-search-input></app-search-input>
          <app-user-header></app-user-header>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  searchKeyWord = '';

  constructor() {}

  ngOnInit(): void {}
}
