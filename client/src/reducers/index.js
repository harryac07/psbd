import {combineReducers} from 'redux';
import exchangeReducer from './exchangeReducer';

export default combineReducers({
	exchange : exchangeReducer
});