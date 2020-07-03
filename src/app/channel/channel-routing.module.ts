import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribedChannelsComponent } from './subscribed-channels/subscribed-channels.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { HomeComponent } from './home/home.component';
import { ChannelVideosComponent } from './channel-videos/channel-videos.component';
import { ChannelPlaylistComponent } from './channel-playlist/channel-playlist.component';
import { ChannelIntroComponent } from './channel-intro/channel-intro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: ChannelDetailComponent,
        children: [
          {
            path: 'videos',
            component: ChannelVideosComponent,
          },
          {
            path: 'playlist',
            component: ChannelPlaylistComponent,
          },
          {
            path: 'intro',
            component: ChannelIntroComponent,
          },
          {
            path: '',
            redirectTo: 'videos',
          },
        ],
      },
      {
        path: '',
        component: SubscribedChannelsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelRoutingModule {}
