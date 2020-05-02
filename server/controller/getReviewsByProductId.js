
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

        // console.log('revArr: ', revArr);
        // revArr = [1, 2, 3, 4, 5];

        const findReviews = (revId) => {
          console.log('revId: ', revId);
          return new Promise(resolve => {
            // setTimeout(() => {
            //   resolve(revId * 2)
            // }, 100);

            // return resolve = () => {
              return Review.findById(revId, (err, data) => {
                if (err) throw err
                if (!err) {

                  data = {
                    ...data._doc,
                    product_id: req.params.product_id,
                    product_options: prodOpt
                  };

                  console.log('data', data);

                  resolve(data);
                }
              })
            // }
          });
        }

        const revObjPro = revArr.map(findReviews);
        const revResults = Promise.all(revObjPro);

        revResults.then(data => {
          resp.status(200).send({
            reviews: data
          });
        })

        // findReviews(revArr)
        //   .then(revObj => {
        //     revObjArr.push(revObj);

        //     // console.log('revObjArr', revObjArr);

        //     resp.status(200).send({
        //       reviews: revArr
        //     });
        //   })
        //   .catch(err => {
        //     throw err;
        //   });



        // Review.findById(revArr[0], (err, data) => {
        //   if (err) { throw err; }
        //   else {

        //     data = {
        //       ...data._doc,
        //       product_id: req.params.product_id,
        //       product_options: prodOpt
        //     };

        //     resp.status(200).send({
        //       reviews: data
        //     });
        //     return data;
        //   }
        // })

      })
      .catch((err) => {
        resp.status(500).send(err);
      });
  }
}
