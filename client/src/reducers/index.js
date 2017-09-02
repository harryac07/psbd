import {combineReducers} from 'redux';
import exchangeReducer from './exchangeReducer';
import userReducer from './userReducer';

export default combineReducers({
	exchange : exchangeReducer,
	user : userReducer
});