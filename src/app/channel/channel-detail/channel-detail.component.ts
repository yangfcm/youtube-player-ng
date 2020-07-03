import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-detail',
  template: `
    <app-channel-banner></app-channel-banner>
    <app-channel-nav></app-channel-nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ChannelDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
