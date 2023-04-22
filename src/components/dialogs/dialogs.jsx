import React from 'react';
import DialogItem from './dialogItem/dialogItem';
import s from './dialogs.module.css';
import Message from './message/message';
import {useForm} from "react-hook-form";


const DialogsForm = (props) => {

	const { register, handleSubmit, resetField } = useForm();

	function onSubmit(data){
		props.sendMessage(data.newText);
		resetField('newText');
	}

	return (
		<div>
			<form className={s.new_message_wrapper} onSubmit={handleSubmit(onSubmit)}>
				<div>
						<input
							className={s.new_message_input}
							placeholder={'Enter your message...'}
							{...register('newText')}
						/>
				</div>

				<button className={s.send_new_message_button} type="submit">
					Send
				</button>

			</form>
		</div>
	);
}



const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map(elem => <DialogItem id={elem.id} name={elem.name} key={elem.id}/>);
	let messagesElements = props.messages.map(elem => <Message id={elem.id} message={elem.message} key={elem.id}/>);

	return (
		<div className={s.dialogs}>
		
			<div className={s.dialogs_items}>
				{dialogsElements}
			</div>

			<div className={s.messages_wrapper}>
				<div className={s.messages}>
					{messagesElements}
				</div>
				<DialogsForm sendMessage={props.sendMessage}/>
			</div>

		</div>
	);
}

export default Dialogs;