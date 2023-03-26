import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs_reducer';
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {

	let state = props.store.getState();

	const NewMessageChange = (text) => {
		props.store.dispatch(updateNewMessageBodyCreator(text));
	}
	const SendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	return (<Dialogs
		updateNewMessageBody={NewMessageChange}
		sendMessage={SendMessageClick}
		newMessageBody={state.dialogsPage.newMessageBody}
		dialogs={state.dialogsPage.dialogs}
		messages={state.dialogsPage.messages}
	/>);
}

export default DialogsContainer;