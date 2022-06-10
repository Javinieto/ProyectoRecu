import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Song } from '../../shared/song';
import { SongService } from '../../core/song.service';

@Component({
  templateUrl: './song-edit.component.html',
})
export class SongEditComponent implements OnInit {
  pageTitle = 'Song Edit';
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
    this.sngId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getSong(this.sngId);
  }

  getSong(id: number): void {
    this.songService.getSongById(id).subscribe(
      (song: Song) => this.displaySong(song[0]),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  displaySong(song: Song): void {
    if (this.songForm) {
      this.songForm.reset();
    }
    this.song = song[0];
    this.pageTitle = `Edit Song: ${this.song.name}`;

    // Update the data on the form
    this.songForm.patchValue({
      name: this.song.name,
      type: this.song.type,
      duration: this.song.duration,
      singer: this.song.singer,
      cover: this.song.cover,
    });
  }

  deleteSong(): void {
    if (this.song.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the song: ${this.song.name}?`)) {
        this.songService.deleteSong(this.song.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }

  saveSong(): void {
    if (this.songForm.valid) {
      if (this.songForm.dirty) {
        this.song = this.songForm.value;
        this.song.id = this.sngId;

        this.songService.updateSong(this.song).subscribe(
          () => this.onSaveComplete(),
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
