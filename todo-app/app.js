var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var models = require('./models');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'jade');

setupController(app);
apiController(app);

console.log('Web server is running on port ' + port);
app.listen(port);
