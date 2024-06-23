import React from 'react';
import { createRoot } from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store.js';

import App from './app/App';
import About from './components/About';
import Article from './components/Article';
import ArticlePreviews from './components/ArticlePreviews';
import FilterTermPage from './components/FilterTermPage.js';
import ErrorPage from './components/ErrorPage.js';

// import { store } from './app/store.js';

import './index.scss';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<App
					state={store.getState()}
					dispatch={store.dispatch}
					errorElement={<ErrorPage />}
				/>
			}
		>
			<Route index element={<ArticlePreviews />} />
			<Route path="/:pageNumber" element={<ArticlePreviews />} />
			<Route path="about" element={<About />} />
			<Route path="articles/:slug" element={<Article />} />
			<Route path="writers/:slug" element={<FilterTermPage />} />
			<Route path="tags/:slug" element={<FilterTermPage />} />
		</Route>
	)
);

const root = createRoot(document.getElementById('root'));

const render = () => {
	root.render(
		<React.StrictMode>
			<HelmetProvider>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<RouterProvider router={router}>
							<App />
						</RouterProvider>
					</PersistGate>
				</Provider>
			</HelmetProvider>
		</React.StrictMode>
	);
};

render();

// reportWebVitals(console.log);
