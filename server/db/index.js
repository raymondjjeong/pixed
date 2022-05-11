const mongoose = require('mongoose');

const DATABASE = 'reviewsOfPhotographs';

mongoose.connect(`mongodb://localhost/${DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log('Failed to connect to database', error));

const reviewSchema = new mongoose.Schema({
  username: String,
  photograph: String,
  review: String
});

const Review = mongoose.model('Review', reviewSchema);

const saveUsername = (username) => {
  return Review.updateOne({
    username: username
  }, {
    username: username
  }, {
    upsert: true
  });
};

const saveReview = (username, review, photographUrl) => {
  return Review.updateOne({
    username: username
  }, {
    review: review,
    photograph: photographUrl
  }, {
    upsert: true
  })
};

const getReviews = (username) => {
  return Review.find({
    username: username
  }, null, null);
};

module.exports = {
  saveUsername,
  saveReview,
  getReviews
};

