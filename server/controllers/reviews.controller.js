const Reviews = require('../models/review.model');

module.exports.findAllReviews = (req, res) => {
    Reviews.find()
        .then((allReviews) => {
            res.status(200).json({ reviews: allReviews })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneReview = (req, res) => {
    Reviews.findOne({ _id: req.params.id })
        .then(oneReview => {
            res.status(200).json({ review: oneReview })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewReview = (req, res) => {
    Reviews.create(req.body)
        .then(newlyCreatedReview => {
            res.status(200).json({ review: newlyCreatedReview })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingReview = (req, res) => {
    Reviews.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedReview => {
            console.log("We made it!!!!")
            res.status(200).json({ user: updatedReview })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingReview = (req, res) => {
    Reviews.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}
