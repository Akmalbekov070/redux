import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
	loadingStatus: 'default',
};
const postSclise = createSlice({
	name: 'post',
	initialState,
	reducers: {
		fetchingPost: state => {
			state.loadingStatus = 'Loading....';
		},
		fetchedPost: (state, action) => {
			state.posts = action.payload;
			state.loadingStatus = 'default';
		},
	},
});
export const {} = postSclise.actions;
const postReducer = postSclise.reducer;
export default postReducer;
