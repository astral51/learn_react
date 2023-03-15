import React from 'react';
import DialogItem from './dialogItem/dialogItem';
import s from './dialogs.module.css';
import Message from './message/message';


const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map((elem) => <DialogItem id={elem.id} name={elem.name} />);
	let messagesElements = props.dialogsPage.messages.map(elem => <Message id={elem.id} message={elem.message} />);

	let sendNewMessage = React.createRef();

	let createNewMessage = () => {
		let text = sendNewMessage.current.value;
		alert(text);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={s.messages_wrapper}>
				<div className={s.messages}>
					{messagesElements}
				</div>
				<div className={s.new_message_wrapper}>
					<div>
						<textarea className={s.new_message_textarea} ref={sendNewMessage}></textarea>
					</div>					
						<button className={s.send_new_message_button} onClick={createNewMessage}>send</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;