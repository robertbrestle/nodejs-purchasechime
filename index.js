var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
//var multer  = require('multer');

app.disable('x-powered-by');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/data', (req, res) => {
   res.header("Content-Type", "application/json");
   res.send(JSON.stringify({
      data: ["11/21/2022", "11:59:59 PM", 3, 432.10]
   }));
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});