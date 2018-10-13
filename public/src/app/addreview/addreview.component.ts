import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

	review: any;
	errorMessages: any;
	id: any;
	movie: any;

  constructor(private _http: HttpService,
  			  private _router: Router,
  			  private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.review = {name: "", stars: "", review: ""}
  	this.errorMessages = []
  	this._route.params.subscribe(params => {
      console.log(params)
      this.id = params['id']
    })
    this.getMovie(this.id)
    this.movie = {title: "", name: "", stars: "", review: ""}
    console.log("Here is the movieee", this.movie)
    console.log(this.errorMessages)
  }

  getMovie(id){
  	let observable = this._http.getOneMovie(this.id)
  	observable.subscribe(data => {
  		console.log("Movie Found!", data)
  		this.movie = data
  		console.log(this.movie)
  	})
  }

  addReview(id, review){
  	let observable = this._http.addReviewService(this.id, this.review)
  	observable.subscribe(data => {
      if (data['errors']) {
        console.log("Errors!!!!!", data['errors'])
        this.errorMessages.push(data['errors'])
      }
      else {
        console.log("Review added..", data)
        this._router.navigate(['movies/'+this.id]) 
      } 		
  	})
  }

}
