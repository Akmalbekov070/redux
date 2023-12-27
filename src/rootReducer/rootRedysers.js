const { combineReducers } = require('redux');
import postReducer from '@/redux/redux.js';

const rootRedysers = combineReducers({
	postReducer,
});

export default rootRedysers;

// export const store = configureStore({
// 	reducer: {
// 		drivers: driverReduces,
// 	},
// });
