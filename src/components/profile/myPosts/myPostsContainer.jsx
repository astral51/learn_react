import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from "./myPosts";



const MyPostsContainer = (props) => {

	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let onPostChange = () => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};

	return (<MyPosts

		updateNewPostText={onPostChange}
		addPost={addPost}
		posts={state.profilePage.posts}
		newPostsText={state.profilePage.newPostText}
	/>);
}
export default MyPostsContainer;