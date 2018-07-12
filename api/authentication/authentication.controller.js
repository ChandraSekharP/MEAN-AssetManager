var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./verify-token');
var User = require('../user/user.model');

const DUPLICATE_CODE = 11000;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* Configure JWT */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config/config'); // get config file

router.post('/register',function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  User.create({
    username : req.body.username,
    loginName : req.body.loginName,
    email: req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if(err) {
      if(err !== null) {
        if(err.code === DUPLICATE_CODE) {
          return res.status(500).send({message:"Login Name already exists"})
        }
      } else return res.status(500).send("There was a problem registering the user.")
    }
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.get('/me', VerifyToken, function(req, res, next) {
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

router.post('/login', function(req, res) {
  User.findOne({ loginName: req.body.loginName }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id, username: user.username, email: user.email, loginName: user.loginName }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;