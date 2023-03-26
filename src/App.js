import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from "./components/dialogs/dialogsContainer";

function App(props) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<div className='app-wrapper-content block-wrapper'>
				<Routes>
					<Route path="/dialogs/*"
						element={<DialogsContainer />}/>
					<Route path="/profile"
						element={<Profile />} />
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}


export default App;
