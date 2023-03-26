import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs_reducer';
import Dialogs from "./dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageBody: state.dialogsPage.newMessageBody,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (text) => {dispatch(updateNewMessageBodyCreator(text))},
		sendMessage: () => {dispatch(sendMessageCreator())},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;