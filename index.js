// index.js

var express = require('express');
var app = express();

app.get('/', function(req, res)) {
  res.send('Hi');
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:' + port);
});
