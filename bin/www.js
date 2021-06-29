const port = 5000;

const app = require('../server');

app.set('port', port);

const http = require('http');

const mongoose = require('mongoose');

const dbUrl = "mongodb://localhost:27017/Products";

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true },
  () => {
    console.log('Database has been connected correctly');
    /* if (err) {
      console.log("Error", err);
      return;
    }  */
    const server = http.createServer(app);
    server.listen(port);
  }
);
