var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/art', function(req, res) {
  res.render('art', { title: 'Express' });
});

router.get('/technology', function(req, res) {
  res.render('technology', { title: 'Express' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
