import rootRedysers from '@/rootReducer/rootRedysers';
import '@/styles/globals.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
	reducer: rootRedysers,
});
export default function App({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<Component {...pageProps} />;
			</Provider>
		</>
	);
}
