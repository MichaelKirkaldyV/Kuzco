var mongoose = require('mongoose');
var apiController = require('./../controllers/movies.js')

module.exports = function(app){

	app.get('/api/showAllMovies', apiController.showAllMovies),
	
	app.post('/api/addMovie', apiController.addMovie),

	app.delete('/api/removeMovie/:id', apiController.removeMovie),

	app.post('/api/addReview/:id', apiController.addReview),

	app.get('/api/showReviews/:id', apiController.showReviews),

	app.get('/api/getOneMovie/:id', apiController.getOneMovie)


};