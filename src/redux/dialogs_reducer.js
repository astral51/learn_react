const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


const dialogsReducer = (state, action) => {
	switch (action.type){
		case SEND_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageBody, 
			}
			state.messages.push(newMessage);
			state.newMessageBody = '';
			return state;
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.newText;
			return state;
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