const mongoose = require('mongoose');
const Products = require('./Products');

const ProductTypeSchema = mongoose.Schema({
  name: { 
    type: String,
  },
  productList: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Product',
  }],
});

module.exports = mongoose.model('ProductType', ProductTypeSchema);
