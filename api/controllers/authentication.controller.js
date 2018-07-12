
var passport = require('passport');
var mongoose = require('mongoose');
require('../models/authentication.model');
var UserModel = mongoose.model('User');

var UserService = require('../services/authentication.service')

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getUsers = function (req, res) {
  UserModel.find({}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
  });
}

module.exports.register = function(req, res) {
  var user = new UserModel();
  user.username = req.body.username;
  user.email = req.body.email;
  user.loginName = req.body.loginName;
  user.password = req.body.password;

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200).json({"token": token});
  });
};

module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    var token;
    // If Passport throws/catches an error
    if (err) { res.status(404).json(err); return; }
    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200).json({ "token":token });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};
