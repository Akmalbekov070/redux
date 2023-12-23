// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchingPost, fetchedPost } from '../../redux/redux';

// export default function Main() {
// 	const dispetch = useDispatch();
// 	const { posts, loadingStatus } = useSelector(state => state.postReducer);

// 	useEffect(() => {
// 		dispetch(fetchingPost());
// 		fetch('https://jsonplaceholder.org/posts')
// 			.then(res => res.json())
// 			.then(data => dispetch(fetchedPost(data)));
// 	});
// 	console.log(posts);
// 	return <div>Main</div>;
// }
