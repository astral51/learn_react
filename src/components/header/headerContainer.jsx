import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/auth_reducer";

const HeaderContainer = (props) => {

	const onLogout = () => {
		props.logoutThunk();
	}

	return (
		<Header {...props} onLogout={onLogout}/>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});
const mapDispatchToProps = {
	logoutThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);