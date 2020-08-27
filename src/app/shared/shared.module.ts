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
import { PageTitleComponent } from './page-title/page-title.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { UserBannerComponent } from './user-banner/user-banner.component';
import { AuthUserBannerComponent } from './auth-user-banner/auth-user-banner.component';
import { UnauthUserBannerComponent } from './unauth-user-banner/unauth-user-banner.component';
import { AuthModule } from '../auth/auth.module';
import { EmptyComponent } from './empty/empty.component';
import { SigninButtonComponent } from './signin-button/signin-button.component';
import { UserPictureComponent } from './user-picture/user-picture.component';
import { UserHeaderComponent } from './user-header/user-header.component';

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
    PageTitleComponent,
    UserMessageComponent,
    UserBannerComponent,
    AuthUserBannerComponent,
    UnauthUserBannerComponent,
    EmptyComponent,
    SigninButtonComponent,
    UserPictureComponent,
    UserHeaderComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, AuthModule],
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
    PageTitleComponent,
    UserMessageComponent,
    UserBannerComponent,
    EmptyComponent,
  ],
})
export class SharedModule {}
