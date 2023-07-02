'use strict'
var http = require('http');
var fs = require('fs');
var express = require('express');
var serveIndex = require('serve-index');

var app = express();
app.use(serveIndex('./public'));
app.use(express.static('./public'));


// var http_server = http.createServer(app).listen(8091, '0.0.0.0');

var http_server = http.createServer(app).listen(8091, '0.0.0.0');
