import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type){
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: {userId, email, login, isAuth},
});


export const getAuthUserDataThunk = () =>  async (dispatch) => {
	let data = await authAPI.me();
		if (data.resultCode === 0) {
			let {id, login, email} = data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
}


export const loginThunk = (email, password, rememberMe) =>  async (dispatch) => {
	console.log(2);
	let data = await authAPI.login(email, password, rememberMe);
	if (data.resultCode === 0) {
		dispatch(getAuthUserDataThunk());
		return true;
	}
	else{
		return false;
	}
}

export const logoutThunk = () =>  async (dispatch) => {
	let data = await authAPI.logout();
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

export default authReducer;
