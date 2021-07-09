const Products = require('../models/Products');
const ProductType = require('../models/ProductType');
const logger = require('../functions');

class ProductsService {
  async get(){
    const list = await Products.find();

    return list;
  }

  async create(req, res){
    const { prodType: ptId, name, price } = req.body;
    const Product = new Products({ name, price });
    ProductType.findById(ptId, async (err, registry) => {
      console.log(registry);
      if (err) {
        logger(`Error finding product type ${err}`);
        res.status(500).send({ "success": false, "message": "Error finding the product type" });
        return;
      }
      let prodRegistry;
      try {
        prodRegistry = await Product.save();
      } catch (error) {
        logger(`Error inserting product ${error}`);
        res.status(500).send({ "success": false, "message": "Error inserting the product" });
      }

      const newList = [...registry.productList, prodRegistry];
      try {
        await ProductType.updateOne({ _id: ptId }, { productList: newList });
        res.status(200).json({ "success": true, "message": "Product inserted correctly" });
      } catch (error) {
        logger(`Error inserting product ${error}`);
        res.status(500).send({ "success": false, "message": "Error inserting the product" });
      }
    });
  }
}

module.exports = ProductsService;