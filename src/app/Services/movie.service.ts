import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getmoviebyid(id: number): Observable<IMovie> {
    var movie = this.httpclient.get<IMovie>(`${environment.baseUrl}/${id}`);
    return movie;
  }

  getmoviebydirectorname(director: string): Observable<IMovie> {
    var movie = this.httpclient.get<IMovie>(
      `${environment.baseUrl}?director=${director}`
    );
    return movie;
  }

  getmoviebydirectorname2(director: string): Observable<IMovie> {
    var movie = this.httpclient.get<IMovie>(`${environment.baseUrl}`);
    movie.forEach((element) => {
      element.director == director;
    });

    return movie;
  }
}
