import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';

@NgModule({
  declarations: [MyPlaylistComponent],
  imports: [CommonModule, PlaylistRoutingModule],
})
export class PlaylistModule {}
