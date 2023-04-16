import React from 'react';
import Header from "./header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
	return (
		<Header {...props} />
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});
const mapDispatchToProps = {
	// getAuthUserDataThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);