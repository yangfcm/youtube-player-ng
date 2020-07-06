import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: `
    <h2 class="ui red header" style="margin-bottom: 10px;">
      <ng-content></ng-content>
    </h2>
  `,
  styles: [],
})
export class PageTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
