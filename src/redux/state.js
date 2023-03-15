import { rerenderEntireTree } from "../render";

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'hello!!! this is my first post', likes_count: 10 },
			{ id: 2, message: 'okay, bro, its cool!', likes_count: 16 },
		],
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Dmitriy'},
			{id: 2, name: 'Sveta'},
			{id: 3, name: 'Sasha'},
			{id: 4, name: 'Gosha'},
			{id: 5, name: 'Swagga'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'how are u?'},
			{id: 3, message: 'i hope u are okey'},
			// {id: 4, message: 'i hope u are okey'},
			// {id: 5, message: 'i hope u are okey'},
			// {id: 6, message: 'i hope u are okey'},
			// {id: 7, message: 'i hope u are okey'},
			// {id: 8, message: 'i hope u are okey'},
			// {id: 9, message: 'i hope u are okey'},
		],
	},
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 4,
		message: postMessage,
		likes_count: 0,
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
};

export default state;