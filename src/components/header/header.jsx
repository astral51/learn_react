import s from './header.module.css';

const Header = () => {
	return (
		<header className={s.header + ' ' + 'block-wrapper'}>
			<img src='https://www.clipartmax.com/png/full/184-1841721_web-development-web-design-logo-download-logo-website-png.png'></img>
		</header>
	);
}


export default Header;