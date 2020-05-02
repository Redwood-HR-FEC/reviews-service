
const ReviewApp = require('../index');
var Promise = require('bluebird');
const { Review, Product } = require('../../database/index');

module.exports = {

  getReviewsByProductId: (req, resp) => {
    Product.find({ product_id: `${req.params.product_id}` })
      .then((data) => {

        // get the array of review ids
        let revArr = data[0].product_reviews;
        let prodOpt = data[0].product_option;

        const findReviews = (revId) => {
          console.log('revId: ', revId);
          return new Promise(resolve => {
            return Review.findById(revId, (err, data) => {
              if (err) throw err
              if (!err) {
                if (data) {
                  data = {
                    ...data._doc,
                    product_id: req.params.product_id,
                    product_options: prodOpt
                  };
                  resolve(data);
                } else {
                  resp.status(500).send(err);
                  throw Error ('No data._doc matches the review ID');
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

      })
      .catch((err) => {
        resp.status(500).send(err);
      });
  }
}
