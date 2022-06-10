import { Component, OnInit } from '@angular/core';
import { SongService } from '../../core/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  id: any;

  constructor(private songService: SongService, private router: Router) {}

  ngOnInit() {}

  newSong() {
    // Get max product Id from the product list
    //this.songService.getMaxSongId().subscribe((data) => (this.id = data));
    //this.router.navigate(['/songs', this.id, 'new']);
    this.router.navigate(['/songs/new']);
  }
}
