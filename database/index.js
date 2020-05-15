
const mongoose = require('mongoose');
mongoose.connect('mongodb://database/amazon-reviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('Connected to Mongo')});

var Schema = mongoose.Schema;

const productSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },
  product_option: {
    type: [String],
  },
  product_reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ]
});

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  star_rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  date: {
    type: Date,
    required: true,
  },
  body: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20000,
  },
  country: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  helpful_vote: Number,
  avp_badge: {
    type: Boolean,
    required: true,
  },
  profile: {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    avatar: {
      type: String,
      required: true
    },
  }

});

const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Product,
  Review,
  db
}
