const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            require: true
        },
        stars: {
            type: Number,
            require: true
        },
        review: {
            type: String,
            require: false
        }
    }
);

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;