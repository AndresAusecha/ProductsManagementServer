const express = require('express');
const logger = require('../functions');
const Products = require('../models/Products');
const ProductType = require('../models/ProductType');
const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const list = await Products.find();
    res.status(200).json(list);
  } catch (error) {
    logger(`Error getting product types: ${error}`);
  }
});

router.post('/', async (req, res) => {
  logger(`Request to insert product received ${req.body}`);
  const { prodType: ptId, name, price } = req.body;

  const Product = new Products({ name, price });
  ProductType.findById(ptId, async (err, registry) => {
    console.log(registry);
    if (err) {
      logger(`Error finding product type ${err}`);
      res.status(400).send({ "success": false, "message": "Error finding the product type" });
      return;
    }
    let prodRegistry;
    try {
      prodRegistry = await Product.save();
    } catch (error) {
      logger(`Error inserting product ${error}`);
      res.status(400).send({ "success": false, "message": "Error inserting the product" });
    }

    const newList = [...registry.productList, prodRegistry];
    try {
      await ProductType.updateOne({ _id: ptId }, { productList: newList });
      res.status(200).json({ "success": true, "message": "Product inserted correctly" });
    } catch (error) {
      logger(`Error inserting product ${error}`);
      res.status(400).send({ "success": false, "message": "Error inserting the product" });
    }
  });
});

module.exports = router;