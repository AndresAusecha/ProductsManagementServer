const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const db = req.app.get('db');
  db.collection('TypeProducts').find().toArray((err, documents) => {
    if(err) {
      res.send(500).send(err.toString());
      return;
    }
    res.send({
      typeProducts: documents,
    });
  });
});

module.exports = router;