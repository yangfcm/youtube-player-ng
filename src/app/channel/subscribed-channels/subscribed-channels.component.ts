import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribed-channels',
  template: `
    <app-user-banner></app-user-banner>
    <app-nav></app-nav>
    <p>
      subscribed-channels works!
    </p>
  `,
  styles: [],
})
export class SubscribedChannelsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
