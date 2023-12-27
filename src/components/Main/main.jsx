import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingPost, fetchedPost } from '../../redux/redux';
import { data } from 'autoprefixer';

export default function Main() {
	const dispetch = useDispatch();
	const { posts, loadingStatus } = useSelector(state => state.postReducer);

	useEffect(() => {
		dispetch(fetchingPost());
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => dispetch(fetchedPost(data)));
	});
	console.log(posts);
	return (
		<div>
			{posts.map(item => (
				<h3>{item.title}</h3>
			))}
		</div>
	);
}
