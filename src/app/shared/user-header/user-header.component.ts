import { Component, OnInit } from '@angular/core';
import { UserPictureComponent } from '../user-picture/user-picture.component';
import { SigninButtonComponent } from '../signin-button/signin-button.component';

@Component({
  selector: 'app-user-header',
  template: `
    <app-google-auth
      [AuthedComponent]="userPictureComponent"
      [UnauthedComponent]="signinButtonComponent"
    ></app-google-auth>
  `,
  styles: [],
})
export class UserHeaderComponent implements OnInit {
  userPictureComponent = UserPictureComponent;
  signinButtonComponent = SigninButtonComponent;

  constructor() {}

  ngOnInit(): void {}
}
