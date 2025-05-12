import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IMovie } from '../Model/imovie';
import { identifierName } from '@angular/compiler';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpclient: HttpClient) {}

  getallmovies(): Observable<IMovie[]> {
    return this.httpclient.get<IMovie[]>(`${environment.baseUrl}`);
  }
  topfive(): Observable<IMovie[]> {
    return this.httpclient.get<IMovie[]>(`${environment.baseUrl}`).pipe(
      map((movies) => {
        if (!movies || !movies.length) return [];
        return movies
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 5);
      }),
      catchError((error) => {
        console.error('Error fetching movies:', error);
        return of([]); // Return empty array on error
      })
    );
  }

  getmoviebyid(id: number): Observable<IMovie> {
    var movie = this.httpclient.get<IMovie>(`${environment.baseUrl}/${id}`);
    return movie;
  }
  addmovie(item: IMovie): Observable<string> {
    return this.httpclient.post<string>(`${environment.baseUrl}`, item);
  }

  getmoviebydirectorname(director: string): Observable<IMovie> {
    var movie = this.httpclient.get<IMovie>(
      `${environment.baseUrl}?director=${director}`
    );
    return movie;
  }
  updatemovie(id: number, movie: IMovie): Observable<any> {
    return this.httpclient.put<void>(`${environment.baseUrl}/${id}`, movie);
  }

  getmoviebydirectorname2(director: string): Observable<IMovie> {
    var movie = this.httpclient.get<IMovie>(`${environment.baseUrl}`);
    movie.forEach((element) => {
      element.director == director;
    });

    return movie;
  }
  deletemovie(id: number): Observable<any> {
    return this.httpclient.delete<void>(`${environment.baseUrl}/${id}`);
  }
}
