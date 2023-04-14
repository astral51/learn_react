import {profileAPI} from "../api/api";
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
	posts: [
		{ id: 1, message: 'hello!!! this is my first post', likes_count: 10 },
		{ id: 2, message: 'okay, bro, its cool!', likes_count: 16 },
	],
	newPostText: '',
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {

	switch (action.type){
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.newPostText,
				likes_count: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({
	type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
export const setStatus = (status) => ({
	type: SET_STATUS,
	status
});

export const getUserProfileThunk = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId).then(data => {
			dispatch(setUserProfile(data));
		});
	}
}
export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then(data => {
			dispatch(setStatus(data));
		});
	}
}
export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then(data => {
			if (data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
	}
}

export default profileReducer;