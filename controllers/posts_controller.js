const PostModel = require('../models/post');

module.exports = {

  createPost(req, res, next) {
    var post = new PostModel(req.body);

    user.save(function (err) {
      if (err) {
        next(err);
      } else {
        res.json(post);
      }
    });
  },
    
  updatePost(req, res, next) {
    PostModel.findOneAndUpdate({ id: req.body.id }, req.body, {new: true}, (err, post) => {
      if (err) {
        next(err);
      } else {
        res.json(post);
      }
    });
  },
    
  getPostById(req, res, next) {
    PostModel.findOne({ id: req.params.id }, (err, post) => {
      if (err) {
        next(err);
      } else {
        res.json(post)
      }
    });
  },

  getAllPosts(req, res, next) {
    PostModel.find(function (err, posts) {
      if (err) {
        next(err);
      } else {
        res.json(posts);
      }
    });
  }

}
