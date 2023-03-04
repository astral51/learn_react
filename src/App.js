import './App.css';
import Header from './components/header/header';
// import Footer from './components/footer';
// import RandomArray from './components/chatGPT';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';

function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<Profile />
		</div>
	);
}


export default App;
