var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var people = [
    {
      name: 'John Doe'
    },
    {
      name: 'Jane Doe'
    },
    {
      name: 'Jim Doe'
    }
  ];
  res.render('index', { title: 'MEAN Stack', people: people});
});

module.exports = router;
