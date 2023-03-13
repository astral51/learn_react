import s from './profileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8zXzE1MzIzNzgxNjFfMDIw/screen-3.jpg?fakeurl=1&type=.jpg' />
			</div>
			<div className={s.description_block}>
				ava + discription
			</div>
		</div>
	);
}
export default ProfileInfo;