import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { VideoRoutingModule } from './video-routing.module';

import { RecommendedVideosComponent } from './recommended-videos/recommended-videos.component';
import { VideoGridComponent } from './video-grid/video-grid.component';
import { VideoGridItemComponent } from './video-grid-item/video-grid-item.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { HomeComponent } from './home/home.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoInfoComponent } from './video-info/video-info.component';

@NgModule({
  declarations: [
    RecommendedVideosComponent,
    VideoGridComponent,
    VideoGridItemComponent,
    VideoListComponent,
    VideoListItemComponent,
    HomeComponent,
    VideoDetailComponent,
    VideoPlayerComponent,
    VideoInfoComponent,
  ],
  imports: [CommonModule, VideoRoutingModule, SharedModule, AuthModule],
  exports: [VideoGridComponent, VideoListComponent],
})
export class VideoModule {}
