import {getAuthUserDataThunk} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type){
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};
		default:
			return state;
	}
};

export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
});


export const initializeAppThunk = () => (dispatch) => {
	let authUsersData = dispatch(getAuthUserDataThunk());
	// let users = dispatch(getUsersThunk());

	Promise.all([authUsersData]).then(() => {
		dispatch(initializedSuccess());
	})
}

export default appReducer;
