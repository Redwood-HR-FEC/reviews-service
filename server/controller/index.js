
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

          // Order the array of returned reviews
          quickSort = (arr, by) => {
            if (arr.length <= 1) return arr;
            let p = arr[Math.floor(arr.length/2)];
            let l = [];
            let r = [];
            for (let i = 0; i < arr.length; i++) {
              if (i === Math.floor(arr.length/2)) continue;
              if (arr[i][by] > p[by]) l.push(arr[i]);
              else r.push(arr[i]);
            }
            let sorted = quickSort(l, by).concat(p, quickSort(r, by));
            return sorted;
          };

          resp.status(200).send({
            reviews: quickSort(data, req.query.order)
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
  },

  patchReviewIncrementHelp: (req, resp) => {

    let revId = req.params.review_id;
    console.log('Increment: ', revId);

    Review.findById(revId, (err, doc) => {
      if (err) throw err
      if (doc) {
        console.log(doc.helpful_vote);
        let inc = doc.helpful_vote + 1;
        doc.helpful_vote = inc;

        doc.save((err, review) => {
          if (err) {
            resp.status(500).send('No Review matches the review_ID');
            console.log('No Review matches the review_ID');
          }
          if (review) {
            resp.status(201).send({
              "_id": review._id,
              "helpful_vote": review.helpful_vote
            });
          }
        });
      } else {
        resp.status(500).send('No Review matches the review_ID');
        console.log('No Review matches the review_ID');
      }
    });
  }
}
