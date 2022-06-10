import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongItemComponent } from './song-item/song-item.component';
import { SharedModule } from '../shared/shared.module';
import { SongNewComponent } from './song-new/song-new.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

@NgModule({
  declarations: [
    SongNewComponent,
    SongItemComponent,
    SongEditComponent,
    SongDetailComponent,
  ],
  imports: [CommonModule, SongsRoutingModule, SharedModule],
  exports: [SongItemComponent],
})
export class SongsModule {}
