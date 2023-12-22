import rootReducer from '@/rootReducer/rootReducer';
import '@/styles/globals.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
	const story = configureStore({
		reducer: rootReducer,
	});
	return (
		<>
			<Provider story={story}>
				<Component {...pageProps} />;
			</Provider>
		</>
	);
}
