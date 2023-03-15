import MyPosts from './myPosts/myPosts';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts}/>
		</div>
	);
}
export default Profile;