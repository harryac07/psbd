const bcrypt = require('bcryptjs');
const db = require('../model/db.js');
const jwt = require('jsonwebtoken');

//compare password
const validPassword=(userPassword, databasePassword)=>{
  	return bcrypt.compareSync(userPassword, databasePassword);
}
// create user 
const createUser =(req,res)=>{
  	const salt = bcrypt.genSaltSync();
  	const hash = bcrypt.hashSync(req.body.password, salt);
  	return db.one('INSERT INTO users(username,email,hash,salt)'+'VALUES($1,$2,$3,$4) returning id,username,email',[req.body.username,req.body.email,hash,salt]);
}

//generate Json Web Token
const generateJwt = function(user){
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7); // create expiry date obj and set expiry for 7 days

	return jwt.sign({
		id: user.id,
		email: user.email,
		username: user.username
	}, process.env.JWT_SECRET);
};

module.exports ={
	createUser,
	validPassword,
	generateJwt
};