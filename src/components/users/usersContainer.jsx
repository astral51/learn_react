import Users from "./users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {dispatch(followAC(userId))},
		unfollow: (userId) => {dispatch(unFollowAC(userId))},
		setUsers: (users) => {dispatch(setUsersAC(users))},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;