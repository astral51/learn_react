import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";


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
		sidebar: {
			
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},

};



export default store;