import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';

@NgModule({
  declarations: [MyPlaylistComponent],
  imports: [CommonModule, PlaylistRoutingModule, SharedModule],
})
export class PlaylistModule {}
