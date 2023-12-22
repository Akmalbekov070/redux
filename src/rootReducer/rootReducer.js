const { combineReducers } = require('redux');
import postReducer from '@/redux/redux';

const rootReducer = combineReducers({
	postReducer,
});

export default rootReducer;
