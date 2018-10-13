import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	id: any;
  reviews: any;
  movie: any;

  constructor(private _http: HttpService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.params.subscribe(params => {
      console.log(params)
      this.id = params['id']
    })
    this.getFirstReview(this.id)
    this.getOtherReviews(this.id)
    this.movie = {title: "", name: "", stars: "", review: ""}
    this.reviews = [];
    console.log("Look at the movie stats", this.movie)
  }

  removeMovie(id){
  	let observable = this._http.removeMovieService(this.id)
  		observable.subscribe(data => {
  			console.log("Movie deleted...", data)
  			this._router.navigate(['/movies'])
  		})
  }

  getFirstReview(id){
    let observable = this._http.getOneMovie(this.id)
    observable.subscribe(data => {
      console.log("Here is the Movie and it's review", data)
      this.movie = data;
    })
  }

  getOtherReviews(id){
    let observable = this._http.getOneMovie(this.id)
    observable.subscribe(data => {
      console.log("Here are the other reviews", data['_reviews'])
      this.reviews = data['_reviews']
    })
  }

}
