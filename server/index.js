
const express = require('express');
const { Review, Product } = require('../database/index');

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
ReviewApp.get(`/api/v1/products/:product_id/reviews`, (req, resp) => {
  Product.find({ product_id: `${req.params.product_id}` })
    .then((data) => {

      // get the array of review ids
      let revData = data[0].product_reviews;
      let prodOpt = data[0].product_option;

      Review.findById(revData[0], (err, data) => {
        if (err) { throw err; }
        else {

          data = {
            ...data._doc,
            product_id: req.params.product_id,
            product_options: prodOpt
          };

          resp.status(200).send({
            reviews: data
          });
          return data;
        }
      })

    })
    .catch((err) => {
      resp.status(500).send(err);
    });
})

// LetLive.
ReviewApp.listen(ReviewApp.set('port'), () => {
  console.log(`ReviewApp Server running: ${ReviewApp.set('port')}`);
});
