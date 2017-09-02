var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const authHelper = require('./authHelper');
const db = require('../model/db.js');

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},	
	function(username, password, done) {
		db.one('SELECT * FROM users WHERE email=$1',username)
			.then(user=>{
		    	if (!user){
		    	 	return done(null, false);
		    	}
		    	if(!authHelper.validPassword(password, user.hash)){
		    		return done(null, false);
		    	}else{
		    		return done(null,user);
		    	}
			}).catch(err=>{
				console.log(err);
				return done(err);
			})
	}
));

module.exports=passport;
