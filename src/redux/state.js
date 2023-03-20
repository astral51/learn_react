
let store = {
	getState(){
		return this._state;
	},

	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'hello!!! this is my first post', likes_count: 10 },
				{ id: 2, message: 'okay, bro, its cool!', likes_count: 16 },
			],
			newPostText: '',
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
				{id: 3, message: 'i hope u are okay'},
			],
		},
	},

	_callSubscriber(){
		console.log('state was changed');
	},

	addPost(){
		let newPost = {
			id: 4,
			message: this._state.profilePage.newPostText,
			likes_count: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	
	updateNewPostText(newText){
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	
	subscribe(observer){
		this._callSubscriber = observer;
	},

};


export default store;