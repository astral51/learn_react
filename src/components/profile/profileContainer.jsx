import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../redux/profile_reducer";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children) {
	return (props) => {

		const match = {params: useParams()};
		return <Children {...props} match={match}/>
	}
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) userId = 2;
		this.props.getUserProfileThunk(userId);
	}

	render() {
		return (<Profile {...this.props} profile={this.props.profile}/>)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});

let mapDispatchToProps = {
	getUserProfileThunk,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect
)(ProfileContainer);