const express = require('express');

const router = express.Router();

router.get('/', (_, res, next) => {
  res.send({
    name: 'Some shit',
  });
});

module.exports = router;