import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongService } from './song.service';
import { HttpClientModule } from '@angular/common/http';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SongData } from './song-data';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [SongService],
})
export class CoreModule {}
