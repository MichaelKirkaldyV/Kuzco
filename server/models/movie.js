var mongoose = require('mongoose');

//Sets database
var MovieSchema = new mongoose.Schema({
  title: {type: String, required: [true, "Title is needed"], minlength: [3, "Title must be at least 3 characters"], maxlength: 50},
  name: {type: String, required: [true, "Name is needed"], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},
  stars: {type: Number, required: [true, "Star must be added"], minlength: 1, maxlength: 5},
  review: {type: String, required: [true, "Review is needed"], minlength: [3, "Review must be at least 3 characters"], maxlength: 50},
  _reviews: [{type: mongoose.Schema.Types.Mixed, ref: 'Review', required: true}]
}, {timestamps: true});

var ReviewSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name is needed"], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},
	stars: {type: Number, required: [true, "Star must be added"], minlength: 1, maxlength: 5},
	review: {type: String, required: [true, "Review is needed"], minlength: [3, "Review must be at least 3 characters"], maxlength: 50},
}, {timestamps:true});

//Get database
mongoose.model('Movie', MovieSchema); 
mongoose.model('Review', ReviewSchema)
