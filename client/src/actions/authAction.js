import axios from 'axios';

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const ERRORS = "ERRORS";

const ROOT_URL = "http://localhost:3000/api";

/* REGISTER */
export function register(user){
	return dispatch=>{
		return axios.post(`${ROOT_URL}/register`,user)
			.then((response)=>{
				console.log('response',response)
				dispatch({type : REGISTER, payload : response});
			}).catch(err=>{
				console.log('err',err.response);
				dispatch({type : ERRORS, payload : err.response});
			});
	}
}
/* LOGIN */
export function login(user){
	return (dispatch)=>{
		return axios.post(`${ROOT_URL}/login`,user)
			.then((response)=>{
				console.log('suceess ',response);
				saveToken(response.data.token);
				dispatch({type : LOGIN, payload : response});
			}).catch((err)=>{
				console.log('err ',err.response);
				dispatch({type : ERRORS, payload : err.response});
			});
	}
}

/* save token to localstorage */
function saveToken(token){
	window.localStorage['user-token'] = token;
}