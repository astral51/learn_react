const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
	users: [
		// {id: 1, photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
		// 	followed: true, fullName: 'Dmitry', status: 'im a boss', location: {city: 'Moscow', country: 'Russia'}},
		// {id: 2, photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
		// 	followed: false, fullName: 'Tamara', status: 'im learn python', location: {city: 'Saint-Petersburg', country: 'Russia'}},
		// {id: 3, photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
		// 	followed: false, fullName: 'Chief Keef', status: 'i like lovv66', location: {city: 'Florida', country: 'Usa'}},
		// {id: 4, photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
		// 	followed: true, fullName: 'Anatoly', status: 'this is my status', location: {city: 'Apatity', country: 'Russia'}},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type){
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true,}
					}
					return u;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false,}
					}
					return u;
				}),
			};
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users],
			}
		default:
			return state;
	}
};

export const followAC = (userId) => ({
	type: FOLLOW,
	userId: userId,
});
export const unFollowAC = (userId) => ({
	type: UNFOLLOW,
	userId: userId,
});
export const setUsersAC = (users) => ({
	type: SET_USERS,
	users: users,
});

export default usersReducer;