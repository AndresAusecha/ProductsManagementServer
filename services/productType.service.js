const ProductType = require('../models/ProductType');

class ProductTypeService {
  getList() {
    return ProductType.find();
  }

  create(body) {
    const productTypeRegistry = new ProductType({
      name: body.name,
    });
  
    return productTypeRegistry.save();
  }
}

module.exports = ProductTypeService;