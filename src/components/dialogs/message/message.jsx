import s from '../dialogs.module.css';


const Message = (props) => {
	return (
		<div className={s.message}>
			<div className={s.message_wrapper}>
				{props.message}
			</div>
		</div>
	);
}

export default Message;