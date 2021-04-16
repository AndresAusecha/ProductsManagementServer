const express = require('express');

const products = require('./routes/products');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the products management server');
});

app.use('/products', products);

module.exports = app;