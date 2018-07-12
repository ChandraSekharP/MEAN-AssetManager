var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
//var bluebird = require('bluebird');
var passport = require('passport');
//var config = require('./api/config/database');

require('./api/config/passport');

//var index = require('./routes/index');
var apiRoutes = require('./api/routes/index.route');

var app = express();

//Port Number
const PORT = process.env.PORT || 8080;
app.listen(PORT);
//const MONGOLAB_URI = 'mongodb://<Chandra Sekhar>:<db-poc1!>@ds161136.mlab.com:61136/it-store'
//mongoose.Promise = bluebird
mongoose.connect('mongodb://itstoreuser:itstoreuser1@ds123171.mlab.com:23171/itstore' || 'mongodb://127.0.0.1:27017/db-it-store')
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://itstoreuser:itstoreuser1@ds123171.mlab.com:23171/itstore`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://itstoreuser:itstoreuser1@ds123171.mlab.com:23171/itstore`)})
mongoose.Promise = global.Promise;
app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "http://localhost:4200/");
  res.header("Access-Control-Allow-Origin", "https://evening-woodland-71576.herokuapp.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Custom-Header, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
  res.end();
});
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
}); */

global.__root   = __dirname + '/';
var AuthController = require(__root + 'api/authentication/authentication.controller');
app.use('/api/auth', AuthController);

var UserController = require(__root + 'api/user/user.controller');
app.use('/api/users', UserController);

//app.use('/', index);
app.use(passport.initialize());
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
}); */

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* app.listen(port, () => {
  console.log('Server started on port '+port);
}); */

/* app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.user = req.user;
  next();
}); */

module.exports = app;
