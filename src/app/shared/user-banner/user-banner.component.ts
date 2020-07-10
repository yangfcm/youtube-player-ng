import { Component, OnInit } from '@angular/core';
import { AuthUserBannerComponent } from '../auth-user-banner/auth-user-banner.component';
import { UnauthUserBannerComponent } from '../unauth-user-banner/unauth-user-banner.component';

@Component({
  selector: 'app-user-banner',
  template: `
    <app-google-auth
      [AuthedComponent]="AuthUserBannerComponent"
      [UnauthedComponent]="UnauthUserBannerComponent"
    ></app-google-auth>
  `,
  styles: [],
})
export class UserBannerComponent implements OnInit {
  AuthUserBannerComponent = AuthUserBannerComponent;
  UnauthUserBannerComponent = UnauthUserBannerComponent;
  constructor() {}

  ngOnInit(): void {}
}
