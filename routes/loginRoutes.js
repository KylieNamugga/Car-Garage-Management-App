const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res) => {
	res.render('login')
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {

	req.session.user = req.user
	res.redirect('/dashboard');
});

router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/login');
});

module.exports = router;