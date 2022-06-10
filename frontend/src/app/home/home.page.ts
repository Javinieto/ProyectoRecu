import { Component, OnInit } from '@angular/core';
import { Song } from '../shared/song';
import { SongService } from '../core/song.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  songs: any;
  constructor(private songService: SongService) {}
  ionViewDidEnter(): void {
    this.songService.getSongs().subscribe((data: Song[]) => {
      this.songs = data[0];
    });
  }
  ngOnInit() {
    this.songService.getSongs().subscribe((data: Song[]) => {
      this.songs = data[0];
    });
  }
}
