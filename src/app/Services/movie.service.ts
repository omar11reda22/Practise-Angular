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
}
