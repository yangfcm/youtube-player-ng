import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavComponent } from './nav/nav.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { RequireSigninComponent } from './require-signin/require-signin.component';
import { MarginComponent } from './margin/margin.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ErrorMessageComponent,
    NavComponent,
    MoreButtonComponent,
    RequireSigninComponent,
    MarginComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    ErrorMessageComponent,
    NavComponent,
    MoreButtonComponent,
    RequireSigninComponent,
    MarginComponent,
  ],
})
export class SharedModule {}
