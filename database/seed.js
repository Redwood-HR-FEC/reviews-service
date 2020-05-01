
const { Review, Product, db } = require('./index');
const faker = require('faker');


// Clear the desk
Review.deleteMany({}, function (err) {
  if (err) throw err;
});
Product.deleteMany({}, function (err) {
  if (err) throw err;
});


// Set amounts
let nProducts = 120; // Mongo seems to drop a few
let nReviewsMax = 15;


// Seeds the collections
let createReviews = (n, cb) => {

  let count = 0;
  let review_ids = [];

  for (let r = 0; r <= n; r++) {

    var review = {
      title: faker.lorem.words(faker.random.number(8) + 1),
      star_rating: faker.random.number(4) + 1,
      date: faker.date.past(),
      body: faker.lorem.words(faker.random.number(150) + 1),
      country: faker.address.country(),
      helpful_vote: faker.random.number(1000),
      avp_badge: (faker.random.number(10) < 9 ? true : false ),
      profile: {
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    };

    Review.create(review, (err, reviews) => {
      if (err) {
        cb(err);
        throw err;
      }

      count++;
      review_ids.push(reviews._id);

      if (n === count) {
        cb(null, review_ids );
      }
    });

  }

};


let createProducts = (n) => {

  for (let p = 1; p < n + 1; p++) {

    let id = `${p}`.padStart(3, '0');

    let randomOptions = function(n) {
      let sampleOptions = [
        `Pack of: ${faker.random.number(9) + 1}`,
        `Color: ${faker.commerce.color()}`,
        `Material: ${faker.commerce.productMaterial()}`
      ];
      let options = [];
      for (let op = 0; op < n; op++) {
        options.push(faker.random.arrayElement(sampleOptions));
      }
      return options;
    };


    createReviews(faker.random.number(nReviewsMax), (err, review_ids) => {
      if (err) {
        return err;
      } else {
        var product = new Product({
          product_id: id,
          product_option: randomOptions(faker.random.number(3)),
          product_reviews: review_ids,
        });

        product.save(function (err) {
          if (err) {
            console.log(err);
            return err;
          }
          console.log(`Saved Product: ${id}`);
        });
      }
    });
  }
};

createProducts(nProducts);

// Close the DB connection
setTimeout(() => {
  db.close(() => {
    console.log('Closed connection to Mongo, Bye!');
  });
}, 5000);

