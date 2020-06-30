import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBannerComponent } from './user-banner/user-banner.component';

@NgModule({
  declarations: [UserBannerComponent],
  imports: [CommonModule],
  exports: [UserBannerComponent],
})
export class AuthModule {}
