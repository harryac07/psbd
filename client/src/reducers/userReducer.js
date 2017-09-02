import {REGISTER,LOGIN,ERRORS} from '../actions/authAction';

const initialState={
  	fetched: false,
  	user:[]
};

export default function(state=initialState,action){
	switch(action.type){
		case REGISTER:
			return Object.assign({},state,{
				fetched: true,
				user : action.payload
			});
		case LOGIN:
			return Object.assign({},state,{
				fetched: true,
				user : action.payload
			});
		case ERRORS:
			return Object.assign({},state,{
				fetched : false,
				user:[],
				error : action.payload
			});
		default:
			return state;
	}
}