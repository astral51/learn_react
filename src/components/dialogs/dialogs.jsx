import DialogItem from './dialogItem/dialogItem';
import s from './dialogs.module.css';
import Message from './message/message';


const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map((elem) => <DialogItem id={elem.id} name={elem.name} />);
	let messagesElements = props.dialogsPage.messages.map(elem => <Message id={elem.id} message={elem.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;