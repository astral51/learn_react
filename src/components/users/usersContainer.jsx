import {connect} from "react-redux";
import {
	follow, getUsers,
	setCurrentPage,
	toggleIsFollowingProgress,
	unfollow
} from "../../redux/users_reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		// this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				onPageChanged={this.onPageChanged}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	};
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

let mapDispatchToProps = {
		follow,
		unfollow,
		setCurrentPage,
		toggleIsFollowingProgress,
		getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);