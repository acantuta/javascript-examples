var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', function(req, res) {
    res.json(req.body);
});

app.listen(port);