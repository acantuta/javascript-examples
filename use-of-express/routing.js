var express = require('express');
var app = express();
var port = process.env.port || 3000;
var fs = require('fs');

app.get('/', function(req, res) {
    var html = fs.createReadStream(__dirname + '/index.html');
    html.pipe(res);
});

app.post('/', function(req, res) {
    res.send('POST request to the homepage');
});

app.all('/all', function(req, res) {
    res.send(req.method + ' request to "all" page');
});

app.get('/api/person/:id', function(req, res) {
    var json = {
        _id: "cod" + req.params.id
    };

    res.json(json);
});

app.get('/ab?cd', function(req, res) {
    res.send("Pattern /ab?cd");
});

app.get('/ef+gh', function(req, res) {
    res.send("Pattern /ef+gh");
});

console.log("Web server listening on port" + port);
app.listen(port);
