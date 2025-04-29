import { Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieeeComponent } from './movieee/movieee.component';

export const routes: Routes = [
  { path: 'actor', component: ActorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movieee', component: MovieeeComponent },
];
