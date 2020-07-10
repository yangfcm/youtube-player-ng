import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { GoogleAuthDirective } from './google-auth.directive';

@NgModule({
  declarations: [GoogleAuthComponent, GoogleAuthDirective],
  imports: [CommonModule],
  exports: [GoogleAuthComponent],
})
export class AuthModule {}
