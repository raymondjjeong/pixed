const { saveUsername, saveReview, getReviews, deleteReview } = require('../db');

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
  } else if (req.body.username !== undefined) {
    Promise.resolve(saveUsername(req.body.username))
      .then(() => {
        console.log('This line ran (3)');
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
});

Reviews.delete('/', (req, res) => {
  console.log(req);

  Promise.resolve(deleteReview(req.data.photographUrl))
    .then((result) => {
      if (result.deleteCount === 0) {
        res.status(404);
        res.end();
      } else {
        res.status(200);
        res.end();
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = {
  Reviews,
}
