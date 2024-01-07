import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
	loadingStatus: 'default',
	basket: [],
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
		addBacket: (state, action) => {
			state.basket.unshift(action.payload);
		},
	},
});
export const { fetchingPost, fetchedPost, addBacket } = postSlise.actions;
const postReducer = postSlise.reducer;
export default postReducer;
