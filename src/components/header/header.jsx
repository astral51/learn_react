import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={`${s.header} block-wrapper`}>
			<img src='https://www.clipartmax.com/png/full/184-1841721_web-development-web-design-logo-download-logo-website-png.png' alt={'logo'}></img>
			<div className={s.login_block}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}


export default Header;