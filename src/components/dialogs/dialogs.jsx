import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css';

const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	);
}

const Message = (props) =>{
	return(
		<div className={s.message}>{props.message}</div>
	);
}

const Dialogs = () => {

	let dialogsData = [
		{id: 1, name: 'Dmitriy'},
		{id: 2, name: 'Sveta'},
		{id: 3, name: 'Sasha'},
		{id: 4, name: 'Gosha'},
		{id: 5, name: 'Swagga'},
	];

	let messagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'how are u?'},
		{id: 3, message: 'i hope u are okey'},

	];

	let dialogsElements = dialogsData.map((elem) => <DialogItem id={elem.id} name={elem.name} />);
	let messagesElements = messagesData.map(elem => <Message id={elem.id} message={elem.message} />);

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