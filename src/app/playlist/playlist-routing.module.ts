import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../channel/home/home.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: PlaylistDetailComponent,
      },
      {
        path: '',
        component: MyPlaylistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistRoutingModule {}
