import {connect} from "react-redux";
import {
	followThunk, getUsersThunk,
	setCurrentPage,
	toggleIsFollowingProgress,
	unfollowThunk
} from "../../redux/users_reducer";
import React, {useEffect} from "react";
import Users from "./users";
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

const UsersContainer = (props) => {

	useEffect(() => {
		props.getUsersThunk(props.currentPage, props.pageSize);
	}, [])

	const onPageChanged = (pageNumber) => {
		// this.props.setCurrentPage(pageNumber);
		props.getUsersThunk(pageNumber, props.pageSize);
	}

	return <>
		<Users
			totalUsersCount={props.totalUsersCount}
			pageSize={props.pageSize}
			currentPage={props.currentPage}
			users={props.users}
			unfollowThunk={props.unfollowThunk}
			followThunk={props.followThunk}
			onPageChanged={onPageChanged}
			followingInProgress={props.followingInProgress}
			isFetching={props.isFetching}
		/>
	</>
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