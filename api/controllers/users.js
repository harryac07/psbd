
const db = require('../model/db.js');

// send json responses
const sendJSONresponse = (res, status, content)=>{
	res.status(status);
	res.json(content);
};

/* GET all users */
module.exports.getAllUsers=(req,res,next)=>{
  	db.any('select * from users')
	    .then(function (data) {
	    	if(!data){
	    		sendJSONresponse(res,404,{'message':'user not found'});
	    	}else{
	    		sendJSONresponse(res,200,data);
	    	}
	    })
	    .catch(function (err) {
	      	return next(err);
	    });
}
/* GET one user */
module.exports.getOneUser=(req,res,next)=>{
	const id = req.params.id;
	if(!id){
		sendJSONresponse(res, 400, {
			"message": "id is required"
		});
		return;
	}	
  	db.one('select * from users where id=$1',id)
	    .then(function (data) {
	    	if(!data){
	    		sendJSONresponse(res,404,{'message':'user not found with that id'});
	    	}else{
	    		sendJSONresponse(res,200,data);
	    	}
	    })
	    .catch(function (err) {
	      	return next(err);
	    });
}
/* POST one user */
module.exports.postUser=(req,res,next)=>{
  	db.none('INSERT INTO users(username,email,password)'+'VALUES=(${username},${email},${password})',req.body)
	    .then(function () {
    		sendJSONresponse(res,201,{'message':'user created.'});
	    })
	    .catch(function (err) {
	      	return next(err);
	    });
}
/* UPDATE one user */
module.exports.updateUser=(req,res,next)=>{
	const id = req.params.id;
	if(!id){
		sendJSONresponse(res, 400, {
			"message": "id is required" 
		});
		return;
	}
  	db.none('UPDATE users SET(username=${1},email=${2},password=${3} WHERE id=${4})',
  		[req.body.username,req.body.email,req.body.password,id])
	    .then(function () {
    		sendJSONresponse(res,201,{'message':'user updated.'});
	    })
	    .catch(function (err) {
	      	return next(err);
	    });
}
/* DELETE one user */
module.exports.deleteUser=(req,res,next)=>{
	const id = req.params.id;
	if(!id){
		sendJSONresponse(res, 400, {
			"message": "id is required"
		});
		return;
	}
  	db.result('DELETE FROM  users WHERE id=${1}',id)
	    .then(function () {
    		sendJSONresponse(res,204,{'message':'user not found.'});
	    })
	    .catch(function (err) {
	      	return next(err);
	    });
}



