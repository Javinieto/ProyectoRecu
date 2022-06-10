import { Component, OnInit } from '@angular/core';
import { SongService } from '../../core/song.service';
import { Song } from '../../shared/song';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
})
export class SongDetailComponent implements OnInit {
  song: Song = {
    id: 0,
    name: '',
    type: '',
    duration: '',
    singer: '',
    cover: '',
  };
  sngId: number = 0;
  public isloading: Boolean = true;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) {}

  ngOnInit() {
    this.sngId = parseInt(this.activatedroute.snapshot.params['songId']);
    this.songService.getSongById(this.sngId).subscribe((data: Song) => {
      this.isloading = true;
      this.song = data[0];
      this.isloading = false;
    });
  }
  goEdit(): void {
    this.router.navigate(['/songs', this.sngId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
