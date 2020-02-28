import React from 'react';
import AboutMe from '../components/AboutMe';
import Blog from '../components/Blog';
import Metam from '../components/Metam';
import HeaderPhoto from '../components/HeaderPhoto';

class Pglowna extends React.Component {
	componentDidMount() {
		document.title = 'Strona Główna - Pakuj z Tymkiem';
		window.history.pushState(null, null, ' ');
	}

	render() {
		return (
			<React.Fragment>
				<HeaderPhoto />
				<Blog />
				<Metam />
				<AboutMe />
			</React.Fragment>
		);
	}
}

export default Pglowna;
