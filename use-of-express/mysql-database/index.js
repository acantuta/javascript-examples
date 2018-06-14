var express = require('express');
var app = express();
var connection = require('./connection');

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    connection.query('select * from peoples', function (err, rows) {
        if(err) throw err;
        console.log(rows);
        res.render('index', {items: rows});
    });
});

console.log('Web server listening on port 3000');
app.listen(3000);