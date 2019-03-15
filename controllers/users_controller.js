const UserModel = require('../models/user');

module.exports = {

  createUser(req, res, next) {
    var user = new UserModel(req.body);

    user.save(function (err) {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    });
  },
    
  updateUser(req, res, next) {
    UserModel.findOneAndUpdate({ id: req.body.id }, req.body, {new: true}, (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    });
  },
    
  getUserById(req, res, next) {
    UserModel.findOne({ id: req.params.id }, (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json(user)
      }
    });
  },

  getAllUsers(req, res, next) {
    UserModel.find(function (err, users) {
      if (err) {
        next(err);
      } else {
        res.json(users);
      }
    });
  }

}
