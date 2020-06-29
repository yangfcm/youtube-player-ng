import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedVideosComponent } from './video/recommended-videos/recommended-videos.component';

const routes: Routes = [
  {
    path: 'channel',
    loadChildren: () =>
      import('./channel/channel.module').then((mod) => mod.ChannelModule),
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./playlist/playlist.module').then((mod) => mod.PlaylistModule),
  },
  {
    path: '',
    component: RecommendedVideosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
