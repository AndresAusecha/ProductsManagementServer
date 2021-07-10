const Sale = require('../models/Sale');

class SalesService {
  getList() {
    return Sale.find();
  }

  create(body) {
    const { total, productsList } = body;

    const sale = new Sale({
      total, 
      productsList,
      date: new Date(),
    });
    
    return sale.save();
  }
}

module.exports = SalesService;