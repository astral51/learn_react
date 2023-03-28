import { NavLink } from 'react-router-dom';
import s from './nav.module.css';

const Nav = () => {
	return (
		<nav className={`${s.nav} block-wrapper`}>
			<div className={s.item}>	
				<NavLink to='/profile' className={navData => navData.isActive ? s.active : s.nonActive}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.nonActive}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/users' className={navData => navData.isActive ? s.active : s.nonActive}>Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' className={navData => navData.isActive ? s.active : s.nonActive}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' className={navData => navData.isActive ? s.active : s.nonActive}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings' className={navData => navData.isActive ? s.active : s.nonActive}>Settings</NavLink>
			</div>
		</nav>
	);
}

export default Nav;