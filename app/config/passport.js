var configAuth = require('./auth');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
      done(null, {id: id});
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.appId,
    clientSecret: configAuth.facebookAuth.appSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'emails', 'name', 'gender', 'link', 'picture']
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
))
}
