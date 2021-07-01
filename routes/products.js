const express = require('express');
const Products = require('../models/Products');
const ProductType = require('../models/ProductType');
const router = express.Router();

router.get('/', (req, res) => {
  
});

router.post('/', async (req, res) => {
  console.log(`--------------------------------------------------------------`);
  console.log("Request to insert product received");
  console.log(req.body);
  console.log(`--------------------------------------------------------------`);
  const { prodType: ptId, name, price } = req.body;
  const Product = new Products({ name, price });
  try {
    // Add logic to update the product type
    ProductType.findById(ptId, async (err, registry) => {
      console.log(registry);
      if(err){
        console.log(`--------------------------------------------------------------`);
        console.log(`Error finding product type with id: ${ptId} on ${new Date()} `);
        console.log(err);
        console.log(`--------------------------------------------------------------`);
        res.status(400).json({ "success": false, "message":"Error finding the product type" });
        return;
      }
      const prodRegistry = await Product.save();
      console.log(prodRegistry);
      try {
        const newList = [...registry.productList, prodRegistry];
        console.log(newList);
        const updateRes = await ProductType.updateOne({ _id: ptId }, { productList: newList });
        console.log(updateRes);
        res.status(200).json({ "success": true, "message":"Product inserted correctly" }); 
      } catch (error) {
        console.log(`--------------------------------------------------------------`);
        console.log(`Error updating product type with id: ${ptId} on ${new Date()} `);
        console.log(error);
        console.log(`--------------------------------------------------------------`);
        res.status(400).json({ "success": false, "message":"Error finding the product type" }); 
      }
    });
  } catch (error) {
    console.log(`--------------------------------------------------------------`);
    console.log(`Error finding product type with id: ${ptId} on ${new Date()} `);
    console.log(error);
    console.log(`--------------------------------------------------------------`);
    res.status(400).json({ "success": false, "message":"Error saving the product" }); 
  }
});

module.exports = router;