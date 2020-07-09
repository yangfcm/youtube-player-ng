import { Component, OnInit } from '@angular/core';
import { GoogleAuthService, IAuth } from '../../auth/google-auth.service';

@Component({
  selector: 'app-comment-form',
  template: `
    <app-google-auth
      ><p auth>
        comment-form works!
        {{ auth.signedIn }} - {{ auth.user.email }}
      </p>
      <p unauth>
        require login
        {{ auth.signedIn }}
      </p>
      <p noauth>no auth</p>
    </app-google-auth>
  `,
  styles: [],
})
export class CommentFormComponent implements OnInit {
  auth: IAuth;
  constructor(private authService: GoogleAuthService) {}

  ngOnInit(): void {
    this.auth = this.authService.auth;
  }
}
