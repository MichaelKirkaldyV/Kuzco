import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

	movie: any;
	errorMessages: any;

  constructor(private _http: HttpService,
  			  private _router: Router) { }

  ngOnInit() {
  	this.errorMessages = [];
  	this.movie = {title: "", name: "", stars: "", review: ""}

  }

  addMovie(movie){
  	let observable = this._http.addMovieService(this.movie)
  	observable.subscribe(data => {
      console.log("error", data['errors'])
      if (data['errors']) {
         this.errorMessages.push(data['errors'])
         console.log("messages", this.errorMessages)
      }
      else {
         console.log("Movie Added", data)
         this.movie = data;
         this._router.navigate(['movies'])  
      }		
  	})
  }

}
