var express = require('express');
var bodyParser = require('body-parser');
var models = require("./models");

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.all('/', function(req, res) {

    
    var render = function() {
        var promise = models.Post.find().exec();

        promise.then(function(items) {
            return res.render('index', {items: items});
        });
        
    }

    if (req.body.title && req.body.content) {

        var newPost = new models.Post({
            title: req.body.title,
            content: req.body.content
        });

        newPost.save().then(function () {
            render();
        });

    } else {
        render();
    }
});

console.log("Web server listening on port 3000...");
app.listen(3000);