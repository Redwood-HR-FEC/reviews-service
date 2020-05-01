
const { Review, Product } = require('./index');
const faker = require('faker');

let createReviews = (n) => {

  for (let r = 1; r < n + 1; r++) {

    var review = new Review({
      review_id: r,
      title: faker.lorem.words(faker.random.number(20)),
      star_rating: faker.random.number(4) + 1,
      date: faker.date.past(),
      body: faker.lorem.words(faker.random.number(40)),
      country: faker.address.country(),
      helpful_vote: faker.random.number(5000),
      avp_badge: (faker.random.number(10) < 9 ? true : false ),
      profile: {
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    });

    review.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      console.log('Saved Review: ', r);
    });

  }

};

createReviews(5);


let createProducts = (n) => {

  for (let p = 1; p < n + 1; p++) {

    let id = `${p}`.padStart(3, '0');

    let randomOptions = function(n) {
      let options = [ 'Set of: ${n}' ];
      return options;
    };

    var product = new Product({
      product_id: id,
      product_option: randomOptions(faker.random.number(3)),
      product_reviews: [],
    });

    product.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
      console.log(`Saved Product: ${id}`);
    });
  }

};

createProducts(2);


