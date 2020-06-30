import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubscribedChannelsComponent } from './subscribed-channels/subscribed-channels.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    SubscribedChannelsComponent,
    ChannelDetailComponent,
    HomeComponent,
  ],
  imports: [CommonModule, ChannelRoutingModule, SharedModule],
})
export class ChannelModule {}
