import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="ui three item menu red">
      <a
        class="item"
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >Recommend</a
      >
      <a class="item" routerLink="/channel" routerLinkActive="active"
        >Subscription</a
      >
      <a class="item" routerLink="/playlist" routerLinkActive="active"
        >Playlist</a
      >
    </div>
  `,
  styles: [],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
