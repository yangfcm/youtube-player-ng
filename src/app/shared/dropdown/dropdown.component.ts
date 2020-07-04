import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../../auth/google-auth.service';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="ui vertical menu">
      <a class="item" routerLink="/">
        Recommend
      </a>
      <a class="item" routerLink="/channel">
        Subscriptions
      </a>
      <a class="item" routerLink="/playlist">
        Play list
      </a>
      <a class="item" (click)="handleSignOut()">
        Sign out
      </a>
    </div>
  `,
  styles: [],
})
export class DropdownComponent implements OnInit {
  constructor(private googleAuthService: GoogleAuthService) {}

  ngOnInit(): void {}
  handleSignOut() {
    this.googleAuthService.googleSignOut();
  }
}
