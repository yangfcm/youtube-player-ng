import { Component, OnInit, Input } from '@angular/core';
import { IAuth } from '../../auth/google-auth.service';

@Component({
  selector: 'app-user-picture',
  template: `
    <div class="app-dropdown-container" *ngIf="auth.signedIn == true">
      <img
        [src]="auth.user.picture"
        class="ui tiny image circular"
        (click)="toggleShowDropdown($event)"
        style="cursor: pointer; max-height: 60px; width: auto;"
      />
      <app-dropdown
        class="app-dropdown-menu"
        *ngIf="showDropdown"
      ></app-dropdown>
    </div>
  `,
  styles: [
    `
      .app-dropdown-container {
        position: relative;
        margin-left: 1rem;
      }
      .app-dropdown-menu {
        position: absolute;
        right: 0;
        top: 105%;
        z-index: 10;
      }
    `,
  ],
})
export class UserPictureComponent implements OnInit {
  @Input() auth: IAuth;
  showDropdown = false;
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('click', () => {
      this.showDropdown = false;
    });
  }

  toggleShowDropdown($event) {
    this.showDropdown = !this.showDropdown;
    $event.stopPropagation();
  }
}
