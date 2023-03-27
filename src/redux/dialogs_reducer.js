const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	
	switch (action.type){
		case SEND_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageBody,
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageBody: '',
			};

		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.newText,
			};

		default:
			return state;
	}
};

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newText: text,
});

export default dialogsReducer;