import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="ui three item menu red stackable">
      <a
        class="item"
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >
        <i class="thumbs up outline icon"></i> Recommend
      </a>
      <a class="item" routerLink="/channel" routerLinkActive="active">
        <i class="user plus icon"></i> Subscription
      </a>
      <a class="item" routerLink="/playlist" routerLinkActive="active"
        ><i class="list icon"></i> Playlist</a
      >
    </div>
  `,
  styles: [],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
