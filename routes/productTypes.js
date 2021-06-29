const express = require('express');
const ProductType = require('../models/ProductType');

const router = express.Router();



router.get('/', (req, res, next) => {
  
});

router.post('/', async (req, res, next) => {
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