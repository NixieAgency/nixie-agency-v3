var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', 
    { 
      navType: 'hero',
      partials: {footer: 'footer', header: 'header'}
    });
});

router.get('/art', function(req, res) {
  res.render('art', 
    { 
      navType: 'normal',
      partials: {footer: 'footer', header: 'header'}
    });
});

router.get('/technology', function(req, res) {
  res.render('technology', 
    { 
      navType: 'normal',
      partials: {footer: 'footer', header: 'header'}
    });
});

router.get('/contact', function(req, res) {
  res.render('contact', 
    { 
      navType: 'normal',
      partials: {footer: 'footer', header: 'header'}
    });
});

module.exports = router;
