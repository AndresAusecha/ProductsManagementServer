const express = require('express');
const ProductType = require('../models/ProductType');

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const list = await ProductType.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ "success": false, "message":"Product types not found" });
  }
});

router.post('/', async (req, res) => {
  const productTypeRegistry = new ProductType({
    name: req.body.name,
  });

  try {
    const insertion = await productTypeRegistry.save();
    console.log(insertion);
    res.status(200).json({ "success": true, "message":"Product type was saved" });
  } catch (err) {
    res.status(400).json({ "success": false, "message":"Error saving the product type" });
  }
});

module.exports = router;