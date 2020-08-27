import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

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
            <input
              type="text"
              placeholder="Search video..."
              [(ngModel)]="searchKeyWord"
            />
            <i class="search icon link" (click)="handleSearch()"></i>
          </div>
          <app-user-header></app-user-header>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .app-dropdown-container {
        position: relative;
        margin-left: 1rem;
      }
      .app-dropdown-menu {
        position: absolute;
        right: 0;
        top: 105%;
        z-index: 10;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  searchKeyWord = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleSearch() {
    if (this.searchKeyWord.trim() === '') return;
    this.router.navigateByUrl(`/search/${this.searchKeyWord.trim()}`);
    this.searchKeyWord = '';
  }
}
