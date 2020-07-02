import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoModule } from './video/video.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component'; 

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, DropdownComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    VideoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
