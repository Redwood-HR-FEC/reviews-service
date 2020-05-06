
const express = require('express');
const { getReviewsByProductId, patchReviewIncrementHelp } = require('./controller');

const ReviewApp = express();
ReviewApp.set('port', 3003);

// The Middle
ReviewApp.use(express.json());
ReviewApp.use((req, resp, next) => {
  console.log(`${req.method}:${req.originalUrl}`);
  next();
});

// Static
ReviewApp.use('/:id', express.static('public'));


// Routes
ReviewApp.get(`/api/v1/products/:product_id/reviews`, getReviewsByProductId);

ReviewApp.patch(`/api/v1/reviews/:review_id/helpful`, patchReviewIncrementHelp);


// LetLive.
ReviewApp.listen(ReviewApp.set('port'), () => {
  console.log(`ReviewApp Server running: ${ReviewApp.set('port')}`);
});

module.exports = {
  ReviewApp
}
