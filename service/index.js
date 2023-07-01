'use strict'
var http = require('http');

var app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world\n');
}).listen(8091, '0.0.0.0');