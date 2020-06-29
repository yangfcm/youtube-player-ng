import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelRoutingModule } from './channel-routing.module';
import { SubscribedChannelsComponent } from './subscribed-channels/subscribed-channels.component';

@NgModule({
  declarations: [SubscribedChannelsComponent],
  imports: [CommonModule, ChannelRoutingModule],
})
export class ChannelModule {}
