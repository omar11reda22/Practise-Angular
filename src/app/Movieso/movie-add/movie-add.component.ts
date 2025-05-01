import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../../Model/imovie';
import { MovieService } from '../../Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css',
})
export class MovieAddComponent implements OnInit {
  movie!: IMovie;

  constructor(private movieservice: MovieService, private router: Router) {}
  ngOnInit(): void {
    
  }
  submitMovie(){
this.movieservice.addmovie(this.movie).subscribe({
  next: (res) => {
    console.log(res);
    this.router.navigateByUrl('movieee');
  },
  error: () => {
    this.router.navigateByUrl('/error');
  },
  complete: () => {
    console.log('complete');
  },
});
  }
}
