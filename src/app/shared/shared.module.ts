import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [LoaderComponent, ErrorMessageComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, ErrorMessageComponent],
})
export class SharedModule {}
