var express = require('express');
var db = require('../db/w_mongoose.js');
var router = express.Router();

router.get('/', function(req, res) {
  db.News
    .find({publish:true})
    .limit(10)
    .sort('-created')
    .exec(function(err,news){
        console.log(err,news);
        res.render('index', { title: 'Welcome to Simple live updating news feed' });    
  });
  
});
router.post('/', function(req, res, next) {
    var news = db.News(req.body);
    news.save(function(err){
        if(err){
            err.status = 500
            err.stack = "Unable to save record"
            return next(err);
        }
        else{
            res.redirect('/');
        }
    });
});


module.exports = router;
