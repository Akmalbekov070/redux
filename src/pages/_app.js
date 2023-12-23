import rootRedysers from '@/rootReducer/rootRedysers';
import '@/styles/globals.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
	// const story = configureStore({
	// 	reducer: rootRedysers,
	// });
	return (
		<>
			{/* <Provider story={story}></Provider> */}
			<Component {...pageProps} />;
		</>
	);
}
