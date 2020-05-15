
const express = require('express');
const compression = require('compression')

const { getReviewsByProductId, patchReviewIncrementHelp } = require('./controller');

const ReviewApp = express();
ReviewApp.set('port', 3003);

// The Middle
ReviewApp.use(express.json());
ReviewApp.use((req, resp, next) => {
  console.log(`${req.method}:${req.originalUrl}`);
  next();
});
// Compression
ReviewApp.use(compression());


// Static
ReviewApp.use('/:id', express.static('public'));


// Routes
ReviewApp.get(`/review-api/products/:product_id/reviews`, getReviewsByProductId);

ReviewApp.patch(`/review-api/reviews/:review_id/helpful`, patchReviewIncrementHelp);


// LetLive.
ReviewApp.listen(ReviewApp.set('port'), () => {
  console.log(`ReviewApp Server running: ${ReviewApp.set('port')}`);
});

module.exports = {
  ReviewApp
}
