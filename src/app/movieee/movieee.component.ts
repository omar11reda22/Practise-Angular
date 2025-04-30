import { Component, Injectable, OnInit } from '@angular/core';
import { IMovie } from '../Model/imovie';
import { MovieService } from '../Services/movie.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movieee',
  imports: [FormsModule, CommonModule],
  templateUrl: './movieee.component.html',
  styleUrl: './movieee.component.css',
})
export class MovieeeComponent implements OnInit {
  movies!: IMovie[];
  constructor(private movieservice: MovieService, private router: Router) {}
  ngOnInit(): void {
    this.movieservice.getallmovies().subscribe({
      next: (res) => {
        this.movies = res;
      },
      error: () => {
        this.router.navigateByUrl('/error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  gotodetails(id: number) {
    this.router.navigateByUrl(`moviso/moviedetails/${id}`);
  }
}
