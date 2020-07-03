import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-detail',
  template: `
    <app-channel-banner></app-channel-banner>
    <app-channel-nav></app-channel-nav>
    <p>
      channel-detail works!
    </p>
  `,
  styles: [],
})
export class ChannelDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
