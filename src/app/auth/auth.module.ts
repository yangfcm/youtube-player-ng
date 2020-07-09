import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBannerComponent } from './user-banner/user-banner.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';

@NgModule({
  declarations: [UserBannerComponent, GoogleAuthComponent],
  imports: [CommonModule],
  exports: [UserBannerComponent, GoogleAuthComponent],
})
export class AuthModule {}
