const port = 5000;

const app = require('../server');

var http = require('http');

const db = require('mongodb').MongoClient;

const dbUrl = "mongodb://localhost:27017/Products";

app.set('port', port);

db.connect(dbUrl, (err, db) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  app.set('db', db);
  const server = http.createServer(app);
  server.listen(port);  
})
