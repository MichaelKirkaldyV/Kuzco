var mongoose = require('mongoose');
var Movie = mongoose.model('Movie')
var Review = mongoose.model('Review')


module.exports = {

    showAllMovies: function(req, res) {
    	Movie.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
           res.json(err)
        }
        else {
           res.json(data)
        }
     })
    },
    addMovie: function(req, res) {
     console.log("In controller, adding Movie..", req.body);
	 var movie = new Movie({title: req.body.title, name: req.body.name, stars: req.body.stars, review: req.body.review});
	 movie.save(function(err, data){
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },
   removeMovie: function(req, res) {
        Movie.remove({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json(data);
            }
        });
    },
    addReview: function(req, res) {
        console.log("Adding review")
        var review = new Review({name: req.body.name, stars: req.body.stars, review: req.body.review})
        review.save(function(err, data) {
            if (err){
                res.json(err)
            } else {
                console.log("Finding and updating this movie' reviews")
                Movie.findByIdAndUpdate({_id: req.params.id}, {$push: {_reviews: data}}, function(err, data){
                    if (err){
                        res.json(err)
                    } else {
                        res.json(data)
                    }
                })
            }
        })
    },
    showReviews: function(req, res) {
        Review.findOne({_id: req.params.id}, function(err, data){
            if (err){
                res.json(err)
            } else {
                console.log("Review found", data)
                res.json(data)
            }
        })
    }, 
    getOneMovie: function(req, res) {
        Movie.findOne({_id: req.params.id}, function(err, data){
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    }
    
};//End of exports