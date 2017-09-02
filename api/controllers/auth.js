// const db = require('../model/db.js');
const authHelper = require('../config/authHelper');
const passport = require('../config/passport');
// const passport = require('passport');

// send json responses
const sendJSONresponse = (res, status, content)=>{
	res.status(status);
	res.json(content);
};

module.exports.register  = (req, res, next)  => {
	if(!req.body.email || !req.body.username){
		sendJSONresponse(res, 400, {
			"message": "Username and email are required" // marked means all. 
		});
		return;
	}
  	authHelper.createUser(req, res)
	  	.then((user) => {
	  		const token = authHelper.generateJwt(user);
	  		sendJSONresponse(res,200,{'token':token});
	  	})
  		.catch((err) => {
  			sendJSONresponse(res, 500, {'message':'internal server error'+err}); 
  		});
}
module.exports.login  = (req, res, next)  => {
	if(!req.body.email || !req.body.password){
		sendJSONresponse(res, 400, {
			"message": "Username and Password are required" // marked means all. 
		});
		return;
	}
	passport.authenticate('local', function(err, user, info) {
		var token;
		if (err) {
			sendJSONresponse(res, 400, err);
			return;
		}

		if (user) {
			token = authHelper.generateJwt(user);
			sendJSONresponse(res, 200, {
				"token": token
			});
		} else {
			console.log(info);
			sendJSONresponse(res, 401, info);
		}

	})(req, res);
}
