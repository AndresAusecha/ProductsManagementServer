const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: mongoose.Schema.Types.Number,
    validate: (value) => {
      if(value < 0) throw new Error("Price cannot be negative");
    }
  },
});

module.exports = mongoose.model('Product', ProductSchema);
