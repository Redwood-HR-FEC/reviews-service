
const express = require('express');
const { Review, Product } = require('../database/index');
const { getReviewsByProductId } = require('./controller/getReviewsByProductId');

const ReviewApp = express();
ReviewApp.set('port', 3003);

// The Middle
ReviewApp.use(express.json());
ReviewApp.use((req, resp, next) => {
  console.log(`${req.method}:${req.originalUrl}`);
  next();
});

// Static
ReviewApp.use(express.static('public'));


// Routes
ReviewApp.get(`/api/v1/products/:product_id/reviews`, getReviewsByProductId);


// LetLive.
ReviewApp.listen(ReviewApp.set('port'), () => {
  console.log(`ReviewApp Server running: ${ReviewApp.set('port')}`);
});

module.exports = {
  ReviewApp
}
