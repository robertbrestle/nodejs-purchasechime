var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
//var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })