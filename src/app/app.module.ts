import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoModule } from './video/video.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, VideoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
