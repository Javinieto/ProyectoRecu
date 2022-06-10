import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongNewComponent } from './song-new/song-new.component';

const routes: Routes = [
  { path: 'songs/new', component: SongNewComponent },
  { path: 'songs/:songId', component: SongDetailComponent },
  { path: 'songs/:id/edit', component: SongEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsRoutingModule {}
