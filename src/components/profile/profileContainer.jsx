import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunk, updateStatus} from "../../redux/profile_reducer";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserDataThunk} from "../../redux/auth_reducer";

export function withRouter(Children) {
	return (props) => {

		const match = {params: useParams()};
		return <Children {...props} match={match}/>
	}
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) userId = 28637;
		this.props.getUserProfileThunk(userId);
		this.props.getStatus(userId);
		// this.props.getAuthUserDataThunk();
	}

	render() {
		return (
			<>
				<Profile {...this.props}/>
			</>
	)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});

let mapDispatchToProps = {
	getUserProfileThunk,
	getStatus,
	updateStatus,
	// getAuthUserDataThunk,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	// withAuthRedirect,
)(ProfileContainer);