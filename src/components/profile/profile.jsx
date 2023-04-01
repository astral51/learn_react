import MyPosts from './myPosts/myPosts';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from "./myPosts/myPostsContainer";



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	);
}
export default Profile;