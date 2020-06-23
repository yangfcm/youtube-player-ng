import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedVideosComponent } from './video/recommended-videos/recommended-videos.component';
import { SubscribedChannelsComponent } from './channel/subscribed-channels/subscribed-channels.component';
import { MyPlaylistComponent } from './playlist/my-playlist/my-playlist.component';

const routes: Routes = [
  {
    path: 'channel',
    component: SubscribedChannelsComponent,
  },
  {
    path: 'playlist',
    component: MyPlaylistComponent,
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
