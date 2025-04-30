import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../Model/imovie';
import { MovieService } from '../../Services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movie!: IMovie;
  id!: number;
  constructor(
    private movieservice: MovieService,
    private router: Router,
    private activerouter: ActivatedRoute
  ) {
    this.id = activerouter.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.movieservice.getmoviebyid(this.id).subscribe({
      next: (res) => {
        this.movie = res;
      },
      error: () => {
        this.router.navigateByUrl('/error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  updateMovie(id: number) {
    this.router.navigateByUrl(`moviso/movieupdate/${id}`);
  }
}
