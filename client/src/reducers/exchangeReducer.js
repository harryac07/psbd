import {GET_CURRENCY,ERRORS} from '../actions/currencyAction';

const initialState={
  	fetched: false,
  	exchange:[]
};

export default function(state=initialState,action){
	switch(action.type){
		case GET_CURRENCY:
		console.log(action.payload);
			return Object.assign({},state,{
				fetched: true,
				exchange : action.payload
			});
		case ERRORS:
			return Object.assign({},state,{
				fetched : false,
				exchange : action.payload
			});
		default:
			return state;
	}
}