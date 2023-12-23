const { combineReducers } = require('redux');
import postReducer from '@/redux/redux';

const rootRedysers = combineReducers({
	postReducer,
});

export default rootRedysers;
