import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Song } from '../../shared/song';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../../core/song.service';

@Component({
  selector: 'app-song-new',
  templateUrl: './song-new.component.html',
  styleUrls: ['./song-new.component.css'],
})
export class SongNewComponent implements OnInit {
  pageTitle = 'Song New';
  errorMessage: string = '';
  songForm: any;

  sngId: number = 0;
  song: Song = {
    id: 0,
    name: '',
    type: '',
    duration: '',
    singer: '',
    cover: '',
  };

  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.songForm = this.fb.group({
      name: '',
      type: '',
      duration: '',
      singer: '',
      cover: '',
    });

    // Read the product Id from the route parameter
    this.sngId = parseInt(this.activatedroute.snapshot.params['songId']);
  }

  //saveSong(): void {
  //if (this.songForm.valid) {
  //if (this.songForm.dirty) {
  //this.song = this.songForm.value;
  //this.song.id = this.sngId;

  //this.songService.createSong(this.song).subscribe(
  //() => this.onSaveComplete(),
  //(error: any) => (this.errorMessage = <any>error)
  //);
  //} else {
  //this.onSaveComplete();
  //}
  //} else {
  //this.errorMessage = 'Please correct the validation errors.';
  //}
  //}

  saveSong(): void {
    if (this.songForm.valid) {
      if (this.songForm.dirty) {
        this.song = this.songForm.value;
        this.songService.createSong(this.song).subscribe(
          (data) => {
            this.onSaveComplete();
            this.song = data;
            this.song.id = data.id + 1;
          },
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.songForm.reset();
    this.router.navigate(['']);
  }
}
