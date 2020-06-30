import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [LoaderComponent, ErrorMessageComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, ErrorMessageComponent, NavComponent],
})
export class SharedModule {}
