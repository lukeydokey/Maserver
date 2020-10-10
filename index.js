// index.js

var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();

db_config.connect(conn);

app.get('/', function(req, res) {
  var sql = 'SELECT * from Users';
  conn.query(sql, function(err, rows, fields) {
    if (err) {
      console.log('query is not excuted. select fail...\n' + err);
      throw error;
    }
    else{
      console.log('User info is: ', rows);
      res.send(rows);
    }
  });
});

var port = 3000;
app.listen(port, function(){
  console.log('server is running on! http://localhost:' + port);
});
