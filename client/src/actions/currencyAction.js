import axios from 'axios';
import _ from 'lodash';
const fx = require("money");

export const GET_CURRENCY ="GET_CURRENCY";
export const ERRORS = "ERRORS";

const ROOT_URL = "http://api.fixer.io";
// http://api.fixer.io/2014-01-01?base=SEK

/* get currency */
export function exchangeCurrency(data){
	return dispatch=>{
		return axios.get(`${ROOT_URL}/latest?base=SEK`)
			.then((response)=>{
				const converted = convert(response.data,data.amount,data.currency);
				console.log(converted);
				dispatch({type : GET_CURRENCY, payload : converted});
			}).catch(err=>{
				dispatch({type : ERRORS, payload : err.response});
			});
	}
}

/* convert */
function convert(data,amountToCheck,toConvert){
	const amount=amountToCheck>=1 ? amountToCheck : 1;
	fx.rates=data.rates;
	const rate = fx(amount).to(toConvert);
	return {amount:amount,base:'SEK',currency:toConvert,convertedRate:rate.toFixed(4)};
}