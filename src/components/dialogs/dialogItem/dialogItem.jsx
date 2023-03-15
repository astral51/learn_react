import { NavLink } from 'react-router-dom';
import s from '../dialogs.module.css'

const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink 
				className={dialogData => dialogData.isActive ? s.active : s.nonActive}
				to={"/dialogs/" + props.id}>
				<div className={s.dialog_link_wrapper}>
					<img src="https://cdn.onlinewebfonts.com/svg/download_415637.png" alt="none" />
					<div className={s.dialog_name}>{props.name}</div> 
				</div>
			</NavLink>
		</div>
	);
}

export default DialogItem;