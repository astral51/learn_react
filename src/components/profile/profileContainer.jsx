import React, {useEffect} from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunk, updateStatus} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";


const ProfileContainer = (props) => {

	useEffect(() => {
		let userId = props.match.params.userId;
		if (!userId) userId = 28637;
		props.getUserProfileThunk(userId);
		props.getStatus(userId);
	}, []);


	return (
		<Profile {...props}/>
	)
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});

let mapDispatchToProps = {
	getUserProfileThunk,
	getStatus,
	updateStatus,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect,
)(ProfileContainer);