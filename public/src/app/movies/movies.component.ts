import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	movies: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.showAllMovies()
  }

  showAllMovies(){
  	let observable = this._http.getAllMoviesService()
  	observable.subscribe(data => {
  		this.movies = data;
      console.log(this.movies)
  	})
  }

}
