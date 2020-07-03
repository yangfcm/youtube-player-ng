import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="ui footer segment">
      <div class="ui center aligned container">
        My Youtube player developed by Fan Y.
      </div>
      <div class="ui center aligned container">
        Powered by <a href="https://angular.io/" target="__blank">Angular</a>
      </div>
    </div>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
