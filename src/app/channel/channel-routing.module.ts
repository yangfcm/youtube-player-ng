import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribedChannelsComponent } from './subscribed-channels/subscribed-channels.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribedChannelsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelRoutingModule {}
