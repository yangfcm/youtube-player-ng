import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-nav',
  template: `
    <div class="ui three item menu red stackable">
      <a
        class="item"
        routerLink="videos"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <i class="thumbs up outline icon"></i> Videos
      </a>
      <a class="item" routerLink="playlist" routerLinkActive="active"
        ><i class="list icon"></i> Playlist</a
      >
      <a class="item" routerLink="intro" routerLinkActive="active">
        <i class="user plus icon"></i> Intro
      </a>
    </div>
  `,
  styles: [],
})
export class ChannelNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
