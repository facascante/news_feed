var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to Simple live updating news feed' });
});
router.post('/', function(req, res) {
  
  res.render('index', { title: 'Welcome to Simple live updating news feed' });
});


module.exports = router;
