import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { SubscribedChannelsComponent } from './subscribed-channels/subscribed-channels.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { HomeComponent } from './home/home.component';
import { ChannelBannerComponent } from './channel-banner/channel-banner.component';
import { SubscribedChannelItemComponent } from './subscribed-channel-item/subscribed-channel-item.component';

@NgModule({
  declarations: [
    SubscribedChannelsComponent,
    ChannelDetailComponent,
    HomeComponent,
    ChannelBannerComponent,
    SubscribedChannelItemComponent,
  ],
  imports: [CommonModule, ChannelRoutingModule, SharedModule, AuthModule],
})
export class ChannelModule {}
