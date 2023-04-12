import React from 'react';
import DialogItem from './dialogItem/dialogItem';
import s from './dialogs.module.css';
import Message from './message/message';
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

	let dialogsElements = props.dialogs.map((elem) => <DialogItem id={elem.id} name={elem.name} />);
	let messagesElements = props.messages.map(elem => <Message id={elem.id} message={elem.message} />);
	let newMessageBody = props.newMessageBody;

	const onNewMessageChange = (event) => {
		let text = event.target.value;
		props.updateNewMessageBody(text);
	}
	const onSendMessageClick = () => {
		props.sendMessage();
	};

	if (props.isAuth === false){
		return <Navigate to={'/login'}/>
	}

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
						<textarea 
							className={s.new_message_textarea} 
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder={'Enter your message...'}>
						</textarea>
					</div>					
						<button className={s.send_new_message_button} onClick={onSendMessageClick}>send</button>
				</div>
			</div>

		</div>
	);
}

export default Dialogs;