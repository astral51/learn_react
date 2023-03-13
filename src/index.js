import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
	{ id: 1, message: 'hello!!! this is my first post', likes_count: 10 },
	{ id: 2, message: 'okay, bro, its cool!', likes_count: 16 },
];

let dialogsData = [
	{id: 1, name: 'Dmitriy'},
	{id: 2, name: 'Sveta'},
	{id: 3, name: 'Sasha'},
	{id: 4, name: 'Gosha'},
	{id: 5, name: 'Swagga'},
];

let messagesData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'how are u?'},
	{id: 3, message: 'i hope u are okey'},

];




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
