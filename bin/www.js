const port = 5000;

const app = require('../server');

app.set('port', port);


var http = require('http');

const server = http.createServer(app);

server.listen(port);
