
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {

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
			newMessageBody: '',
		},
	},
	_callSubscriber(){
		console.log('state was changed');
	},

	
	getState(){
		return this._state;
	},
	subscribe(observer){
		this._callSubscriber = observer;
	},
	
	dispatch(action){
		if (action.type === ADD_POST){
			let newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				likes_count: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT){
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_BODY){
			this._state.dialogsPage.newMessageBody = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === SEND_MESSAGE){
			let newMessage = {
				id: 4,
				message: this._state.dialogsPage.newMessageBody, 
			}
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageBody = '';
			this._callSubscriber(this._state);	
		}
	},

};

export const addPostActionCreator = () => ({
		type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
});
export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newText: text,
});


export default store;