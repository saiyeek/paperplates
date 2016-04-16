var express = require('express');
var router = express.Router();
var passport = require('passport');
var redis = require('redis');


router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/',
                                                                    failureRedirect: '/login' }));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
router.get('/login', (req, res) => {
  res.send({hello: "Hi"});
});

router.post('/login', () => {

})


module.exports = router;
