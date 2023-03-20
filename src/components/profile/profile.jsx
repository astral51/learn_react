import MyPosts from './myPosts/myPosts';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts 
				posts={props.profilePage.posts} 
				newPostText={props.profilePage.newPostText}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
}
export default Profile;