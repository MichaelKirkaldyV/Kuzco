import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
		
	{ path: 'movies', component: MoviesComponent },
	{ path: 'movies/new', component: AddmovieComponent },
	{ path: 'movies/:id/review', component: AddreviewComponent },
	{ path: 'movies/:id', component: ReviewsComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/movies' },
	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
