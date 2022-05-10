const mongoose = require('mongoose');

const DATABASE = 'reviewsOfPhotographs';

mongoose.connect(`mongodb://localhost:8080/${DATABASE}`);

const reviewSchema = new mongoose.Schema({
  username: String,
  photograph: String,
  review: String
})
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log('Failed to connect to database', error));

const Review = mongoose.model('Review', reviewSchema);

const savePhotograph = (username, photographUrl) => {
  return Review.updateOne({
    photograph: photographUrl
  }, {
    username: username,
    photograph: photographUrl
  }, {
    upsert: true
  });
};

const saveReview = (review, photographUrl) => {
  return Review.updateOne({
    photograph: photographUrl
  }, {
    review: review
  }, {
    upsert: true
  })
};

const getReviews = (username) => {
  return Review.find({
    username: username
  }, null, null);
};

