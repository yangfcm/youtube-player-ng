import { Component, OnInit } from '@angular/core';
import { MyAuthPlaylistComponent } from '../my-auth-playlist/my-auth-playlist.component';
import { RequireSigninComponent } from '../../shared/require-signin/require-signin.component';

@Component({
  selector: 'app-my-playlist',
  template: `
    <app-user-banner></app-user-banner>
    <app-nav></app-nav>
    <app-margin></app-margin>
    <app-google-auth
      [AuthedComponent]="MyAuthPlaylistComponent"
      [UnauthedComponent]="RequireSigninComponent"
    ></app-google-auth>
  `,
  styles: [],
})
export class MyPlaylistComponent implements OnInit {
  RequireSigninComponent = RequireSigninComponent;
  MyAuthPlaylistComponent = MyAuthPlaylistComponent;
  constructor() {}

  ngOnInit(): void {}
}
