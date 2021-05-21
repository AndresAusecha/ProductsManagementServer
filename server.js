const express = require('express');

const cors = require('cors');

const products = require('./routes/products');
const productTypes = require('./routes/productTypes');

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the products management server');
});

app.use('/products', products);

app.use('/product_types', productTypes);

module.exports = app;