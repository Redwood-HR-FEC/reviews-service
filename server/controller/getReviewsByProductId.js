
const ReviewApp = require('../index');
var Promise = require('bluebird');
const { Review, Product } = require('../../database/index');

module.exports = {

  getReviewsByProductId: (req, resp) => {
    Product.find({ product_id: `${req.params.product_id}` })
    .then((data) => {

        // console.log('prodId: ', req.params.product_id);

        // get the array of review ids
        let revArr = data[0].product_reviews;
        let prodOpt = data[0].product_option;

        const findReviews = (revId) => {
          console.log('revId: ', revId);
          return new Promise((resolve, reject) => {
            return Review.findById(revId, (err, data) => {
              if (err) {
                throw err
              } else {
                if (data) {

                  // console.log('data', data);

                  data = {
                    ...data._doc,
                    product_id: req.params.product_id,
                    product_options: prodOpt
                  };
                  resolve(data);
                } else {
                  console.log('No data', data);
                  reject(data);
                }
              }
            })
          });
        }

        // Map over each ID and create a promise
        const revObjPro = revArr.map(findReviews);
        const revResults = Promise.all(revObjPro);

        // Send it!
        revResults.then(data => {
          resp.status(200).send({
            reviews: data
          });
        })
        .catch(err => {
          resp.status(500).send('No Review matches the review_ID');
          console.log('No Review matches the review_ID');
        })

      })
      .catch((err) => {
        resp.status(500).send('No Product matches the product_ID');
        console.log('No Product matches the product_ID');
      });
  }
}
