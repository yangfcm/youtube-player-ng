import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { HomeComponent } from './home/home.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    MyPlaylistComponent,
    PlaylistItemComponent,
    PlaylistDetailComponent,
    HomeComponent,
    PlaylistListComponent,
  ],
  imports: [CommonModule, PlaylistRoutingModule, SharedModule, AuthModule],
  exports: [PlaylistListComponent],
})
export class PlaylistModule {}
