const { saveUsername, saveReview, getReviews } = require('../db');

const { Router } = require('express');
const Reviews = Router();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
  'Allow': 'POST'
}

Reviews.post('/', (req, res) => {

  if (req.body.review !== undefined) {
    Promise.resolve(saveReview(req.body.username, req.body.review, req.body.photographUrl))
      .then(() => {
        res.sendStatus(201);
        res.end();
    });
  } else {
    Promise.resolve(saveUsername(req.body.username))
      .then(() => {
        res.sendStatus(201);
        res.end();
    });
  }
})

Reviews.get('/', (req, res) => {

  Promise.resolve(getReviews(req.query.username))
    .then((results) => {
      res.status(200);
      res.send(results);
    });
})

module.exports = {
  Reviews,
}
