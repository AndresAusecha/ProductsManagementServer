const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: mongoose.Schema.Types.Number,
  },
});

module.exports = mongoose.model(ProductSchema, 'Product');
