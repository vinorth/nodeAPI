const UserModel = require('../models/user');
const helper = require('../helper');

module.exports = {

  createUser(req, res, next) {
    var user = new UserModel(req.body);
    user.id = helper.createGuidId();

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
    UserModel.find({ archived: { $ne: true } }, function (err, users) {
      if (err) {
        next(err);
      } else {
        res.json(users);
      }
    });
  },

  archiveUser(req, res, next) {
    UserModel.findOne({ id: req.params.id }, (err, user) => {
      if (err) {
        next(err);
      } else {
        user.archived = true;
        user.save();
      }
    });
  }

}
