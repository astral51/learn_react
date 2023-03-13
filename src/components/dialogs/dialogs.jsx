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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				<DialogItem name='Dmitriy' id='1' />
				<DialogItem name='Sveta' id='2' />
				<DialogItem name='Sasha' id='3' />
				<DialogItem name='Gosha' id='4' />
				<DialogItem name='Swagga' id='5' />
			</div>
			<div className={s.messages}>
				<Message message='hi' />
				<Message message='how are u?' />
				<Message message='i hope u are okey' />
			</div>
		</div>
	);
}

export default Dialogs;