import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RecommendedVideosComponent } from './recommended-videos/recommended-videos.component';
import { VideoGridComponent } from './video-grid/video-grid.component';
import { VideoGridItemComponent } from './video-grid-item/video-grid-item.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

@NgModule({
  declarations: [
    RecommendedVideosComponent,
    VideoGridComponent,
    VideoGridItemComponent,
    VideoListComponent,
    VideoListItemComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class VideoModule {}
