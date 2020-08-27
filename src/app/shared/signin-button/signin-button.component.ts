import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../../auth/google-auth.service';

@Component({
  selector: 'app-signin-button',
  template: `
    <button
      class="ui youtube button"
      style="margin-left: 1rem; width: 110px; "
      (click)="handleSignIn()"
    >
      <i class="youtube icon"></i>
      Sign in
    </button>
  `,
  styles: [],
})
export class SigninButtonComponent implements OnInit {
  constructor(private googleAuthService: GoogleAuthService) {}

  ngOnInit(): void {}

  handleSignIn() {
    this.googleAuthService.googleSignIn();
  }
}
