import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { HomeComponent } from './home/home.component';
import { ChannelVideosComponent } from './channel-videos/channel-videos.component';
import { ChannelPlaylistComponent } from './channel-playlist/channel-playlist.component';
import { ChannelIntroComponent } from './channel-intro/channel-intro.component';
import { ChannelResolverService } from './channel-resolver.service';

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
            resolve: {
              channelIntro: ChannelResolverService,
            },
          },
          {
            path: 'playlist',
            component: ChannelPlaylistComponent,
            resolve: {
              channelIntro: ChannelResolverService,
            },
          },
          {
            path: 'intro',
            component: ChannelIntroComponent,
            resolve: {
              channelIntro: ChannelResolverService,
            },
          },
          {
            path: '',
            redirectTo: 'videos',
          },
        ],
      },
      {
        path: '',
        component: SubscriptionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelRoutingModule {}
