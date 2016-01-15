var express = require('express');
var db = require('../db/w_mongoose.js');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to Simple live updating news feed' }); 
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
router.post('/api/news', function(req, res, next) {
    console.log(req.body,"chito");
    db.News.create(req.body,function(err,feed){
        if(err){
            err.status = 500
            err.stack = "Unable to save record"
            console.log(err);
            res.status(500).json(err);
        }
        else{
            res.status(200).json(feed);
        }
    });
});


module.exports = router;
