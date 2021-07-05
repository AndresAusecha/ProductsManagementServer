const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  total: {
    type: mongoose.Schema.Types.Number, 
    required: true, 
    validate: (value) => {
      if(value < 0) throw new Error("Price value cannot minnor than 0");
    }
  },
  date: {
    type: mongoose.Schema.Types.Date, required: true,
  },
  productsList: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Product',
  }]
}); 

module.exports = mongoose.model('Sale', saleSchema);
