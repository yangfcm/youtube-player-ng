import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-playlist',
  template: `
    <app-nav></app-nav>
    <p>
      my-play-list works!
    </p>
  `,
  styles: [],
})
export class MyPlaylistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
