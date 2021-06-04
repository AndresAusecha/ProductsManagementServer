const port = 5000;

const app = require('../server');

var http = require('http');

const client = require('mongodb').MongoClient;

const dbUrl = "mongodb://localhost:27017";

app.set('port', port);

client.connect(dbUrl, (err, db) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  app.set('db', db.db('Products'));
  const server = http.createServer(app);
  server.listen(port);  
});
