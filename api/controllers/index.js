
const db = require('../model/db.js');

// send json responses
const sendJSONresponse = (res, status, content)=>{
	res.status(status);
	res.json(content);
};

module.exports.getExchange=(req,res,next)=>{
	console.log('ok');
}