
const faker = require('faker');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const { Review, Product, db } = require('./index');

// Clear the desk
Review.deleteMany({}, function (err) {
  if (err) throw err;
});
Product.deleteMany({}, function (err) {
  if (err) throw err;
});


// Set amounts
let nProducts = 100;
let nReviews = 10;
let nImages = 50;
// let nReviews = faker.random.number(15);


// Seeds the collections
let createReviews = (n, cb) => {

  let count = 0;
  let review_ids = [];

  for (let revIdx = 0; revIdx <= n; revIdx++) {

    var review = {
      title: faker.lorem.words(faker.random.number(8) + 1),
      star_rating: faker.random.number(4) + 1,
      date: faker.date.past(),
      body: faker.lorem.words(faker.random.number(300) + 1),
      country: faker.address.country(),
      helpful_vote: faker.random.number(1200),
      avp_badge: (faker.random.number(10) < 9 ? true : false ),
      profile: {
        name: faker.name.findName(),
        avatar: `https://ghrsea09-fec-review-service.s3-us-west-2.amazonaws.com/avatar-${faker.random.number(nImages)}.jpg`,
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

  for (let prodIdx = 1; prodIdx < n + 1; prodIdx++) {

    // console.log(prodIdx);

    let id = `${prodIdx}`.padStart(3, '0');

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


    createReviews(nReviews, (err, review_ids) => {
      if (err) {
        return err;
      } else {
        var product = {
          product_id: id,
          product_option: randomOptions(faker.random.number(3)),
          product_reviews: review_ids,
        };

        Product.create(product, (err, products) => {
          if (err) {
            console.log(err);
            return err;
          }
          // console.log(`Saved Product: ${products.product_id}`);
        });
      }
    });
  }
};

createProducts(nProducts);


const scrapeImage = async function(n) {

  const url = faker.internet.avatar();
  const file = path.join(__dirname, 'data',`avatar-${n}.jpg`);
  const writer = fs.createWriteStream(file)

  const resp = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  resp.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
};

for (let i = 0; i <= nImages; i++) {
  scrapeImage(i);
}


// Close the DB connection
setTimeout(() => {
  db.close(() => {
    console.log('Closed connection to Mongo, Bye!');
  });
}, 5000);


module.exports = {
  createProducts,
  createReviews,
  scrapeImage,
}