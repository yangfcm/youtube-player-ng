import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavComponent } from './nav/nav.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { RequireSigninComponent } from './require-signin/require-signin.component';
import { MarginComponent } from './margin/margin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ErrorMessageComponent,
    NavComponent,
    MoreButtonComponent,
    RequireSigninComponent,
    MarginComponent,
    DropdownComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    LoaderComponent,
    ErrorMessageComponent,
    NavComponent,
    MoreButtonComponent,
    RequireSigninComponent,
    MarginComponent,
    DropdownComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
