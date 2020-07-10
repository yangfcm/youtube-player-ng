import { Component, OnInit } from '@angular/core';
import { SubscribedChannelsComponent } from '../subscribed-channels/subscribed-channels.component';
import { RequireSigninComponent } from '../../shared/require-signin/require-signin.component';

@Component({
  selector: 'app-subscription',
  template: `
    <app-user-banner></app-user-banner>
    <app-nav></app-nav>
    <app-margin></app-margin>
    <app-google-auth
      [AuthedComponent]="SubscribedChannelsComponent"
      [UnauthedComponent]="RequireSigninComponent"
    ></app-google-auth>
  `,
  styles: [],
})
export class SubscriptionComponent implements OnInit {
  RequireSigninComponent = RequireSigninComponent;
  SubscribedChannelsComponent = SubscribedChannelsComponent;
  constructor() {}

  ngOnInit(): void {}
}
