import React from 'react';
import AboutMe from '../components/AboutMe';
import Blog from '../components/Blog';
import Metam from '../components/Metam';
import HeaderPhoto from '../components/HeaderPhoto';

function Pglowna() {
	return (
		<React.Fragment>
			<HeaderPhoto />
			<Blog />
			<Metam />
			<AboutMe />
		</React.Fragment>
	);
}

export default Pglowna;
