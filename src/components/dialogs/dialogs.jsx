import s from './dialogs.module.css';

const Dialogs = () =>{
	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				<div className={s.dialog + ' ' + s.active}>
					Dmitriy
				</div>
				<div className={s.dialog}>
					Sveta
				</div>
				<div className={s.dialog}>
					Sasha
				</div>
				<div className={s.dialog}>
					Gosha
				</div>
				<div className={s.dialog}>
					Valera
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How are u?</div>
				<div className={s.message}>I hope, are u okey</div>
			</div>
		</div>
	);
}

export default Dialogs;