import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {getAuthUserDataThunk} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component{
	componentDidMount() {
		this.props.getAuthUserDataThunk();
	}

	render(){
		return (
			<Header {...this.props} />
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});
const mapDispatchToProps = {
	getAuthUserDataThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);