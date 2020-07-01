import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search/search.service';
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
  searchKeyWord = '';
  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {}

  handleSearch() {
    if (this.searchKeyWord.trim() === '') return;
    this.router.navigateByUrl(`/search/${this.searchKeyWord.trim()}`);
    this.searchKeyWord = '';
  }
}
