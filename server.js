var express = require('express');
var webpack = require('webpack');
var zipcodes = require('zipcodes');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var RedisStore = require('connect-redis')(session);
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var app = express();
passport.use(new FacebookStrategy({
    //Get this information from your app's page on developers.facebook.com
    clientID: '1688464571421592',
    clientSecret: '372f84078e663316511bdc223caa2b34',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name', 'gender', 'link', 'picture']

  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(id, done) {
  done(null, id);
});

var baucis = require('baucis');
var swagger = require('baucis-swagger');
var models = require('./app/models');
var User = models.User;
var Meal = models.Meal;
process.models = models;

// Express middleware setup
app.use(express.static('assets'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser('your secret here'));
app.use(session({
  secret: "2ApplePies",
  //Change this location if you are running Redis remotely
  store: new RedisStore({
    host: 'pub-redis-18820.us-east-1-2.3.ec2.garantiadata.com',
    port: 18820,
    pass: '2ApplePies'
  })
}));
app.use(passport.initialize());

// PP routing setup
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});
// give zip and radius range returns a list of menus within that range
app.get("/zipcode", (req, res) => {

  console.log(req.query["zipcode"]);
  var zipcode = req.query["zipcode"];
  var radius = req.query["radius"];
  var rad = zipcodes.radius(zipcode, radius);
  console.log(rad)

  Meal.find()
  .populate({
    path: 'location',
    match: { zip: { $in: rad }}
  })
  .populate("menu")
  .exec((err, locations ) => {
    if (err) return handleError(err);
    console.log(locations);
    res.end(JSON.stringify(locations));
  });

});

app.use('/docs', express.static(path.join(__dirname, './assets/swagger/')));
app.get('/me', function(req, res, next) {
  if (!isAuthorized(req)) return res.status(401).json({
    error: "Unauthorized"
  });
  var u = req.session.passport.user;
  User.findOne({
    facebook_id: u.id
  }, function(error, doc) {
    if (error) return next('mongo-query-error');
    res.json(doc);
  });
})
restify();
app.use('/', baucis());
app.post('/logout', function(req, res, next) {
  if (isAuthorized(req)) {
    req.session.destroy();
  }
  res.send(200);
});

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/auth/facebook/loginSuccess',
    failureRedirect: '/auth/facebook/loginFailure'
  }));
app.get('/auth/facebook/loginSuccess', (req, res) => {
  if (!req.session || !req.session.passport || !req.session.passport.user) return res.status(401).json({
    error: "Unauthorized"
  });
  var u = req.session.passport.user;
  console.log(u)
  User.findOne({
    facebook_id: u.id
  }, function(error, doc) {
    if (error) return res.sendFile(path.resolve(__dirname, './assets/fbCallbackPages/successful.html'));
    else if (!doc) {
      var user = new ({
        first_name: u.name.givenName,
        last_name: u.name.familyName,
        facebook_meta: u,
        facebook_id: u.id
      })
      user.save(function(error, newuser) {
        console.log(error)
        if (error || !newuser) return res.sendFile(path.resolve(__dirname, './assets/fbCallbackPages/successful.html'));
        req._user = newuser;
        return res.sendFile(path.resolve(__dirname, './assets/fbCallbackPages/successful.html'));
      })
    } else {
      res.sendFile(path.resolve(__dirname, './assets/fbCallbackPages/successful.html'));
    }
  })
});
app.get('/auth/facebook/loginFailure', (req, res) => {
  res.sendFile(path.resolve(__dirname, './assets/fbCallbackPages/failure.html'));
})

app.listen(3000, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log("Listening on 3000");
});

new webpackDevServer(webpack(webpackConfig), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    "*": "http://localhost:3000"
  }
}).listen(3001, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log("Listening dev server on 3001");
});

function isAuthorized(req) {
  if (!req.session || !req.session.passport || !req.session.passport.user) return false;
  else return true;
}

function restify() {
  Object.keys(process.models).forEach(function(model) {
    var controller = baucis.rest(process.models[model]);
    controller.request(bindController);
    controller.emptyCollection(200);
  });
}

function bindController(req, res, next) {
  if (!isAuthorized(req)) return res.status(401).json({
    error: "Unauthorized"
  });
  next();
};
