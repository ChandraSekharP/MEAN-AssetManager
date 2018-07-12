var mongoose = require( 'mongoose' );
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  loginName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
