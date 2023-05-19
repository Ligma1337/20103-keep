var http = require('http');

http.createServer(function (req, res) {

  res.write("I'm alive");

  res.end();

}).listen(8000);


http.createServer(function (req, res) {

  res.write("I'm alive");

  res.end();

}).listen(443);

http.createServer(function (req, res) {

  res.write("I'm alive");

  res.end();

}).listen(8080);

http.createServer(function (req, res) {

  res.write("I'm alive");

  res.end();

}).listen(80);
