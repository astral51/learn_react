const SEND_MESSAGE = 'SEND_MESSAGE';


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
};

const dialogsReducer = (state = initialState, action) => {
	
	switch (action.type){
		case SEND_MESSAGE:
			let newMessage = {
				id: state.messages.length + 1,
				message: action.newText
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
			};

		default:
			return state;
	}
};

export const sendMessage = (newText) => ({
	type: SEND_MESSAGE,
	newText,
});


export default dialogsReducer;