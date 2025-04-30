import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../Model/imovie';
import { MovieService } from '../../Services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-update.component.html',
  styleUrl: './movie-update.component.css',
})
export class MovieUpdateComponent implements OnInit {
  movie!: IMovie;
  id!: number;
  constructor(
    private readonly movieservice: MovieService,
    private router: Router,
    private activerouter: ActivatedRoute
  ) {
    this.id = this.activerouter.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.movieservice.getmoviebyid(this.id).subscribe({
      next: (res) => {
        this.movie = res;
      },
    });
  }

  updatemovie() {
    this.movieservice.updatemovie(this.id, this.movie).subscribe({
      next: (res) => {
        this.movie = res;
      },
    });
  }
}
