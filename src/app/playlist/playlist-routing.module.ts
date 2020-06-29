import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: MyPlaylistComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistRoutingModule {}
