import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addMovieService(Movie){
  	return this._http.post('/api/addMovie', Movie)
  }

  getAllMoviesService(){
  	return this._http.get('/api/showAllMovies')
  }

  removeMovieService(id){
  	return this._http.delete('/api/removeMovie/'+id)
  }

  addReviewService(id, review){
    return this._http.post('/api/addReview/'+id, review)
  }

  showMovieReviewsService(id){
    return this._http.get('/api/showReviews/'+id)
  }

  getOneMovie(id){
  	return this._http.get('/api/getOneMovie/'+id)
  }


}//End of exports
