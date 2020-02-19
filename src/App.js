import React from 'react';
import './App.scss';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Metam from './components/Metam';

function App() {
	return (
		<div className="App">
			<Heading />
			<Blog />
			<Metam />
			<AboutMe />
			<Footer />
		</div>
	);
}

export default App;
