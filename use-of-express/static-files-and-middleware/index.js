var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('<html><head><link rel="stylesheet" type="text/css" href="/assets/style.css"></head><body><h1>Hello World!</h1></body</html>');
});

app.listen(port);