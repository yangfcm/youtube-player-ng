import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { VideoModule } from '../video/video.module';
import { PlaylistModule } from '../playlist/playlist.module';
import { SubscribedChannelsComponent } from './subscribed-channels/subscribed-channels.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { HomeComponent } from './home/home.component';
import { ChannelBannerComponent } from './channel-banner/channel-banner.component';
import { SubscribedChannelItemComponent } from './subscribed-channel-item/subscribed-channel-item.component';
import { ChannelVideosComponent } from './channel-videos/channel-videos.component';
import { ChannelPlaylistComponent } from './channel-playlist/channel-playlist.component';
import { ChannelNavComponent } from './channel-nav/channel-nav.component';

@NgModule({
  declarations: [
    SubscribedChannelsComponent,
    ChannelDetailComponent,
    HomeComponent,
    ChannelBannerComponent,
    SubscribedChannelItemComponent,
    ChannelVideosComponent,
    ChannelPlaylistComponent,
    ChannelNavComponent,
  ],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    SharedModule,
    AuthModule,
    VideoModule,
    PlaylistModule,
  ],
})
export class ChannelModule {}
