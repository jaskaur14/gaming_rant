const ReviewsController = require('../controllers/reviews.controller');

module.exports = (app) => {
    app.get('/api/reviews', ReviewsController.findAllReviews);
    app.get('/api/reviews/:id', ReviewsController.findOneReview);
    app.patch('/api/reviews/:id', ReviewsController.updateExistingReview);
    app.post('/api/reviews', ReviewsController.createNewReview);
    app.delete('/api/reviews/:id', ReviewsController.deleteAnExistingReview);
}
