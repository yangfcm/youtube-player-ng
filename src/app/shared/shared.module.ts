import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavComponent } from './nav/nav.component';
import { MoreButtonComponent } from './more-button/more-button.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ErrorMessageComponent,
    NavComponent,
    MoreButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    ErrorMessageComponent,
    NavComponent,
    MoreButtonComponent,
  ],
})
export class SharedModule {}
