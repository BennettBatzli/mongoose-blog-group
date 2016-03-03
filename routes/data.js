var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongo_blog');
mongoose.model(
  'Post',
  new Schema({
    "title": String,
    "author": String,
    "date": Date,
    "blogText": String
  },
    {
      collection: 'posts'
    }
  )
);

var Post = mongoose.model('Post');

router.post('/', function(req, res) {
  console.log('request body::', req);

  var addedPost = new Post({
    "title": req.body.title,
    "author": req.body.author,
    "date": req.body.date,
    "blogText": req.body.blogText
  });

  addedPost.save(function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    } else {
      res.send(true);

    }

  });

});

router.get('/', function(req, res) {
  var posts = [];
  Post.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }

    res.send(data);
  });


});

module.exports = router;