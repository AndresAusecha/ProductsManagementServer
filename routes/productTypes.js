const express = require('express');
const ProductTypeService = require('../services/productType.service');

const router = express.Router();

const service = new ProductTypeService();

router.get('/', async (_, res) => {
  try {
    const list = await service.getList();
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ "success": false, "message":"Product types not found" });
  }
});

router.post('/', async (req, res) => {
  try {
    const insertion = await service.create(req.body);
    console.log(insertion);
    res.status(200).json({ "success": true, "message":"Product type was saved" });
  } catch (err) {
    res.status(400).json({ "success": false, "message":"Error saving the product type" });
  }
});

module.exports = router;