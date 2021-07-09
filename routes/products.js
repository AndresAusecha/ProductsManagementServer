const express = require('express');
const logger = require('../functions');
const ProductsService  = require('./../services/products.service');

const router = express.Router();

const prodService = new ProductsService();

router.get('/', async (_, res) => {
  try {
    const list = await prodService.get();
    res.status(200).json(list);
  } catch (error) {
    logger(`Error getting product types: ${error}`);
  }
});

router.post('/', async (req, res) => {
  logger(`Request to insert product received ${JSON.stringify(req.body)}`);
  prodService.create(req.body)
    .then(() => {
      res.status(200).json({ "success": true, "message": "Product inserted correctly" });
    })
    .catch(() => {
      res.status(500).send({ "success": false, "message": "Error inserting the product" });
    })
});

module.exports = router;