const { Reviews } = require('./api/reviews');

const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());
app.use('/photographReviews/reviews', Reviews);

module.exports = {
  app,
};