import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="ui menu">
      <a routerLink="/" class="header item ui">
        <i class="video icon red"></i>
        FanTube</a
      >
      <div class="right item">
        <div class="ui icon input">
          <input type="text" placeholder="Search video..." />
          <i class="search icon link" (click)="handleSearch()"></i>
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
