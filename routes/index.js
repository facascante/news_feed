var express = require('express');
var db = require('../db/w_mongoose.js');
var router = express.Router();

router.get('/', function(req, res) {
  db.News
    .find({publish:true})
    .limit(10)
    .sort('-created')
    .exec(function(err,news){
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
router.get('/api/news', function(req, res, next) {
    db.News
    .find({publish:true})
    .limit(10)
    .sort('-created')
    .exec(function(err,news){
        if(err){
            err.status = 500
            err.stack = "Unable to save record"
            return next(err);
        }
        else{
            console.log(news);
            res.status(200).json(news);
        }
            
  });
});


module.exports = router;
