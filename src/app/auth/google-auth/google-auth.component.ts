import { Component, OnInit, NgZone } from '@angular/core';
import { GoogleAuthService, IAuth } from '../google-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-google-auth',
  template: `
    <ng-container>
      <!-- User is logged in -->
      <ng-content *ngIf="auth && auth.signedIn" select="[auth]"> </ng-content>

      <!-- User is not logged in -->
      <ng-content
        *ngIf="auth && auth.signedIn === false"
        select="[unauth]"
      ></ng-content>

      <!-- Not know the user login status -->
      <ng-content *ngIf="!auth" select="[noauth]"></ng-content>
    </ng-container>
  `,
  styles: [],
})
export class GoogleAuthComponent implements OnInit {
  auth: IAuth;
  auth$: Subscription;
  constructor(
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.auth$ = this.googleAuthService.authEmitter.subscribe(
      (data) => {
        this.ngZone.run(() => {
          this.auth = data;
        });
        console.log(this.auth);
      },
      (err) => {
        console.log(err.message);
        this.auth = undefined;
      }
    );
  }
}
