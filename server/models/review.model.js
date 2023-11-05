const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "name must be at least 3 characters long"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    hoursPlayed: {
        type: Number,
        required: [true, "Hours played is required"],
        minLength: [1, "must play at least one hour"]
    },
    description: {
        type: String,
        required: [true, "review is required"],
        maxLength: [300, "review must be under 300 characters"]
    },
    rating: {
        type: Number,
        required: [true, "rating is required"],
        minLength: [1, "review cannot be less than 1"],
        maxLength: [5, "cannot rate more than 5"]
    }
    },
{ timestamps: true }
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
