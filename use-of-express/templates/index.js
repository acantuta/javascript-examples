var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    var data = {
        currentUrl: req.protocol + "://" + req.headers.host + req.originalUrl
    };

    res.render('template', data);
});

console.log("Web server listening on port:" + port);
app.listen(port);