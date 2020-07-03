import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../../auth/google-auth.service';

@Component({
  selector: 'app-require-signin',
  template: `
    <app-margin></app-margin>
    <div class="ui red message">
      <app-margin></app-margin>
      <div class="ui header aligned center">
        You have not signed in
      </div>
      <app-margin></app-margin>
      <div class="ui header aligned center">
        <button
          class="ui youtube button negative basic"
          (click)="handleSignIn()"
        >
          <i class="youtube icon"></i>
          Sign in
        </button>
      </div>
      <app-margin></app-margin>
    </div>
  `,
  styles: [],
})
export class RequireSigninComponent implements OnInit {
  constructor(private googleAuthService: GoogleAuthService) {}

  ngOnInit(): void {}

  handleSignIn() {
    this.googleAuthService.googleSignIn();
  }
}
