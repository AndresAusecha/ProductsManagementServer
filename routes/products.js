const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const db = req.app.get('db');
  db.collection('Products').find().toArray((err, documents) => {
    if(err) {
      res.send(500).send(err.toString());
      return;
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.send({
      products: documents,
    });
  });
});

module.exports = router;