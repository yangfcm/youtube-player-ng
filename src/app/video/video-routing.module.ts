import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedVideosComponent } from './recommended-videos/recommended-videos.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: VideoDetailComponent,
      },
      {
        path: '',
        component: RecommendedVideosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
