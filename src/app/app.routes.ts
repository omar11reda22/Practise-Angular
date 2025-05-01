import { Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieeeComponent } from './movieee/movieee.component';
import { MovieDetailsComponent } from './Movieso/movie-details/movie-details.component';
import { MovieAddComponent } from './Movieso/movie-add/movie-add.component';
import { MovieUpdateComponent } from './Movieso/movie-update/movie-update.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'actor', component: ActorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movieee', component: MovieeeComponent, canActivate: [authGuard] },
  { path: 'moviso/moviedetails/:id', component: MovieDetailsComponent },
  { path: 'moviso/movieadd', component: MovieAddComponent },
  { path: 'moviso/movieupdate/:id', component: MovieUpdateComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
];
