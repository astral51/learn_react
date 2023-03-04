import MyPosts from './myPosts/myPosts';
import s from './profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8zXzE1MzIzNzgxNjFfMDIw/screen-3.jpg?fakeurl=1&type=.jpg' />
			</div>
			<div>
				ava + discription
			</div>
			<MyPosts />
		</div>
	);
}
export default Profile;