import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
	loadingStatus: 'default',
};
const postSlise = createSlice({
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
export const { fetchingPost, fetchedPost } = postSlise.actions;
const postReducer = postSlise.reducer;
export default postReducer;
