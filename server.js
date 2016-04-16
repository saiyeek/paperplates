var express = require('express');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var authRoutes = require('./app/routes/auth');
require('./app/config/passport')(passport);

var app = new express();
var baucis;
try {
  baucis = require('baucis');
}catch(e){
  console.err(e, e.stack);
}
var models = require('./app/models');
process.models = models;

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'keyboarWarrior' }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

restify();
app.use('/', baucis());

function restify() {
  Object.keys(process.models).forEach(function(model) {
    var controller = baucis.rest(process.models[model]);
    controller.request(bindController);
    controller.emptyCollection(200);
  });
}

app.listen(3000, function(err, result) {
  if(err){
    console.log(err);
  }
  console.log("Listening on 3000");
});

new webpackDevServer(webpack(webpackConfig), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    "*":"http://localhost:3000"
  }
}).listen(3001, 'localhost', function(err, result){
  if(err){
    console.log(err);
  }
  console.log("Listening dev server on 3001");
});

function bindController(req, res, next) {
  console.log('user', req.user);
  // TODO: Check if is authenticated == true

  if(!req.user) return res.status(401).json({error: "Unauthorized"});
  next();
};
