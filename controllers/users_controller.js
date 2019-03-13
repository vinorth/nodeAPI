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
        User.findByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, user) {
          if (err) {
            next(err);
          } else {
            res.json(user);
          }
        });
    },
      
    deleteUser(req, res, next) {
        req.user.remove(function (err) {
          if (err) {
            next(err);
          } else {
            res.json(req.user);
          }
        });
    },
      
    getAllUsers(req, res, next) {
        User.find(function (err, users) {
          if (err) {
            next(err);
          } else {
            res.json(users);
          }
        });
    },
      
    getOneUser(req, res) {
        res.json(req.user);
    },
      
    getByIdUser(req, res, next, id) {
        User.findOne({_id: id}, function (err, user) {
          if (err) {
            next(err);
          } else {
            req.user = user;
            next();
          }
        });
    }

}
