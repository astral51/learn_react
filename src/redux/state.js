
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
		],
	},
};

export default state;