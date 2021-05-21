const express = require('express');

const router = express.Router();

const mon = require('mongodb');

router.get('/', (req, res, next) => {
  const db = req.app.get('db');
  db.collection('Products').find().toArray((err, documents) => {
    if(err) {
      res.send(500).send(err.toString());
      return;
    }
    res.send({
      products: documents,
    });
  });
});

router.post('/', (req, res) => {
  const db = req.app.get('db');
  console.log('body: ', req.body);
  if (!req.body) {
    res.send(500);
    return;
  }

  db.collection('Products').insertOne({ ...req.body , "_id": new mon.ObjectID() }, (err, resp) => {
    if(err) {
      res.send(err.toString());
      return;
    }
    res
      .send(resp);
  });
});

module.exports = router;