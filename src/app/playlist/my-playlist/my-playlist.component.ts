import { Component, OnInit, NgZone } from '@angular/core';
import { GoogleAuthService, IAuth } from '../../auth/google-auth.service';

@Component({
  selector: 'app-my-playlist',
  template: `
    <app-user-banner></app-user-banner>
    <app-nav></app-nav>
    <app-margin></app-margin>
    <app-loader *ngIf="!auth"></app-loader>
    <p *ngIf="auth && auth.signedIn">
      my-play-list works!
    </p>
    <ng-container *ngIf="auth && auth.signedIn === false">
      <app-require-signin></app-require-signin>
    </ng-container>
  `,
  styles: [],
})
export class MyPlaylistComponent implements OnInit {
  auth: IAuth;

  constructor(
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.auth = this.googleAuthService.googleAuth;
    this.googleAuthService.authEmitter.subscribe(
      (data) => {
        this.ngZone.run(() => {
          this.auth = data;
        });
      },
      (err) => {
        console.log(err.message);
        this.auth = {
          signedIn: false,
          user: undefined,
        };
      }
    );
  }
}
