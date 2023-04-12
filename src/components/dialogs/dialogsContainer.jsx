import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs_reducer';
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);