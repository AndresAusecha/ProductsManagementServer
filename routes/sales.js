
const logger = require("../functions");

const express = require('express');
const SaleModel = require('../models/Sale');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await SaleModel.find();
    res.status(200).json(data);
  } catch (error) {
    logger(error);
    res.send(500);
  }
});

router.post('/', (req, res) => {
  const { total, productsList } = req.body;

  const sale = new SaleModel({
    total, 
    productsList,
    date: new Date(),
  });

  try {
    sale.save();
    res.status(200).json({ "success": true, "message": "Sale was inserted correctly"});
  } catch (error) {
    logger(error);
    res.sendStatus(500)
  }
});

module.exports = router;
