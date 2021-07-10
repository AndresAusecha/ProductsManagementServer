const Products = require('../models/Products');
const ProductType = require('../models/ProductType');
const logger = require('../functions');

class ProductsService {
  async get(){
    const list = await Products.find();

    return list;
  }

  create = (prodBody) => new Promise((resolve, reject) => {
    const { prodType: ptId, name, price } = prodBody;
    const Product = new Products({ name, price });
    ProductType.findById(ptId, async (err, registry) => {
      console.log(registry);
      if (err) {
        logger(`Error finding product type ${err}`);
        reject(err);
      }
      let prodRegistry;
      try {
        prodRegistry = await Product.save();
      } catch (error) {
        logger(`Error inserting product ${error}`);
        reject(error);
      }

      const newList = [...registry.productList, prodRegistry];
      try {
        await ProductType.updateOne({ _id: ptId }, { productList: newList });
        resolve({});
      } catch (error) {
        logger(`Error inserting product ${error}`);
        reject(error);
      }
    })
  });
}

module.exports = ProductsService;