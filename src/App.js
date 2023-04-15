import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import react from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {initializeAppThunk} from "./redux/app_reducer";
import Preloader from "./components/common/preloader/preloader";

class App extends react.Component{

	componentDidMount() {
		this.props.initializeAppThunk();
	}

	render() {
		if (!this.props.initialized) return <Preloader />
		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Nav/>
				<div className='app-wrapper-content block-wrapper'>
					<Routes>
						<Route path="/dialogs/*"
						       element={<DialogsContainer/>}/>
						<Route path="/profile/:userId?"
						       element={<ProfileContainer/>}/>
						<Route path="/users"
						       element={<UsersContainer/>}/>
						<Route path="/login"
						       element={<Login/>}/>
						<Route path="/news" element={<News/>}/>
						<Route path="/music" element={<Music/>}/>
						<Route path="/settings" element={<Settings/>}/>
					</Routes>
				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});
const mapDispatchToProps = {
	initializeAppThunk,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
)(App);
