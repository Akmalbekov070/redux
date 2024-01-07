import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingPost, fetchedPost, addBacket } from '../../redux/redux';
import { data } from 'autoprefixer';

export default function Main() {
	const dispetch = useDispatch();
	const { posts, loadingStatus, basket } = useSelector(state => state.postReducer);
	useEffect(() => {
		dispetch(fetchingPost());
		fetch('https://jsonplaceholder.org/posts')
			.then(res => res.json())
			.then(data => dispetch(fetchedPost(data)));
	});
	const addToBacket = item => {
		dispetch(addBacket(item));
	};
	const count = basket.length;
	return (
		<div className='py-20'>
			<h1>count: {count}</h1>
			{posts.map(item => (
				<div className='p-5 m-3 flex items-center justify-between border-2 ' key={item.id}>
					<div>{item.title}</div>
					<button onClick={() => addToBacket(item)} className='px-12 py-4 bg-green-800 text-neutral-50 rounded-md'>
						add to backet
					</button>
				</div>
			))}
		</div>
	);
}
