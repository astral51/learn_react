import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux_store';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					store={store}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
};


rerenderEntireTree();

store.subscribe(() => {
	rerenderEntireTree();
});

reportWebVitals();
