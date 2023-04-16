import {connect} from "react-redux";
import {
	followThunk, getUsersThunk,
	setCurrentPage,
	toggleIsFollowingProgress,
	unfollowThunk
} from "../../redux/users_reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers,
} from "../../redux/users_selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		// this.props.setCurrentPage(pageNumber);
		this.props.getUsersThunk(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollowThunk={this.props.unfollowThunk}
				followThunk={this.props.followThunk}
				onPageChanged={this.onPageChanged}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	};
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	};
};

let mapDispatchToProps = {
		followThunk,
		unfollowThunk,
		setCurrentPage,
		toggleIsFollowingProgress,
		getUsersThunk,
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(UsersContainer);