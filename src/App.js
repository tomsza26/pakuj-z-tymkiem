import React from 'react';
import './App.scss';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Heading />
			<Blog />
			<AboutMe />
			<Footer />
		</div>
	);
}

export default App;
