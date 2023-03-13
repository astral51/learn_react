import MyPosts from './myPosts/myPosts';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';



const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts />
		</div>
	);
}
export default Profile;