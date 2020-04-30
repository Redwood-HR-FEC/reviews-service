
const express = require('express');

const Review = express();
Review.set('port', 3003);

// The Middle
Review.use(express.json());
Review.use((req, resp, next) => {
  console.log(`${req.method}:${req.originalUrl}`);
  next();
});

// Static
Review.use(express.static('public'));


// Routes


// LetLive.
Review.listen(Review.set('port'), () => {
  console.log(`Review Server running: ${Review.set('port')}`);
});
