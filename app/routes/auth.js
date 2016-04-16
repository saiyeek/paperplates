var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');


router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/auth/facebook/loginSuccessful',
                                                                    failureRedirect: '/auth/facebook/loginFailed' }));

router.get('/facebook/loginSuccessful', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../assets/fbCallbackPages/successful.html'));
});

router.get('/facebook/loginFailed', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../assets/fbCallbackPages/failure.html'));
});

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
