import {connect} from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users_reducer";
import React from "react";
import axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
		});
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
	};
};

let mapDispatchToProps = {
		follow,
		unfollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		toggleIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);