const logger = require("../functions");

const express = require('express');
const SalesService = require('../services/sales.service.js');

const salesService = new SalesService();

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const data = await salesService.getList();
    res.status(200).json(data);
  } catch (error) {
    logger(error);
    res.send(500);
  }
});

router.post('/', async (req, res) => {
  try {
    await salesService.create(req.body);
    res.status(200).json({ "success": true, "message": "Sale was inserted correctly"});
  } catch (error) {
    logger(error);
    res.sendStatus(500)
  }
});

module.exports = router;
