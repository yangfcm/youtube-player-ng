import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedVideosComponent } from './video/recommended-videos/recommended-videos.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    path: 'video',
    loadChildren: () =>
      import('./video/video.module').then((mod) => mod.VideoModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((mod) => mod.SearchModule),
  },
  {
    path: '',
    component: RecommendedVideosComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
