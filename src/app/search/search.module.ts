import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VideoItemComponent } from './video-item/video-item.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';
import { ResultItemComponent } from './result-item/result-item.component';

@NgModule({
  declarations: [
    ResultComponent,
    HomeComponent,
    VideoItemComponent,
    PlaylistItemComponent,
    ChannelItemComponent,
    ResultItemComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, SharedModule],
  exports: [ResultItemComponent],
})
export class SearchModule {}
