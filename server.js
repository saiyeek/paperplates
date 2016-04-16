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
