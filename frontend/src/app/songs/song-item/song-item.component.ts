import { Component, Input } from '@angular/core';
import { Song } from '../../shared/song';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css'],
})
export class SongItemComponent {
  @Input() song: Song = {
    id: 0,
    name: '',
    type: '',
    duration: '',
    singer: '',
    cover: '',
  };
}
