import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Song } from '../shared/song';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private songsUrl = 'https://enigmatic-crag-23673.herokuapp.com/songs';
  private newSongUrl = 'https://enigmatic-crag-23673.herokuapp.com/songs/new';
  //private songsUrl = 'https://localhost:8000/songs';
  //private newSongUrl = 'https://localhost:8000/songs/new';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMaxSongId(): Observable<number> {
    return this.http.get<Song[]>(this.songsUrl).pipe(
      // Get max value from an array
      map((data) =>
        Math.max.apply(
          Math,
          data.map(function (o) {
            return o.id;
          })
        )
      ),
      catchError(this.handleError)
    );
  }

  getSongById(id: number): Observable<Song> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.get<Song>(url).pipe(
      tap((data) => console.log('getSong: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createSong(song: Song): Observable<Song> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    song.id = 3;
    return this.http
      .post<Song>(this.newSongUrl, song, { headers: headers })
      .pipe(
        tap((data) => console.log('createSong: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteSong(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.songsUrl}/${id}`;
    return this.http.delete<Song>(url, { headers: headers }).pipe(
      tap((data) => console.log('deleteSong: ' + id)),
      catchError(this.handleError)
    );
  }

  updateSong(song: Song): Observable<Song> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.songsUrl}/${song.id}`;
    return this.http.put<Song>(url, song, { headers: headers }).pipe(
      tap(() => console.log('updateSong: ' + song.id)),
      // Return the product on an update
      map(() => song),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
