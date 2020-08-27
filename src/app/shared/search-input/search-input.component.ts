import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  template: `
    <div class="ui icon input" style="min-width: 10px;">
      <input
        type="text"
        placeholder="Search video..."
        [(ngModel)]="searchKeyWord"
      />
      <i class="search icon link" (click)="handleSearch()"></i>
    </div>
  `,
  styles: [],
})
export class SearchInputComponent implements OnInit {
  searchKeyWord = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleSearch() {
    if (this.searchKeyWord.trim() === '') return;
    this.router.navigateByUrl(`/search/${this.searchKeyWord.trim()}`);
    this.searchKeyWord = '';
  }
}
