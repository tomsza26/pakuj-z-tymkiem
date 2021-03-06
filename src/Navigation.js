import React from 'react';
import './App.scss';
import Heading from './components/Heading';
import Footer from './components/Footer';
import PoMnie from './pages/PoMnie';
import Pblog from './pages/Pblog';
import Pglowna from './pages/Pglowna';
import Pmetamorfozy from './pages/Pmetamorfozy';
import Particle from './pages/Particle';
import Pwspolpraca from './pages/Pwspolpraca';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Navigation() {
	return (
		<div className="App">
			<Router basename="/">
				<Heading />
				<Switch>
					<Route path="/" exact component={Pglowna} />
					<Route path="/oMnie" component={PoMnie} />
					<Route path="/blog" exact component={Pblog} />
					<Route path="/blog/:cate/:id" component={Particle} />
					<Route path="/blog/:cate" exact component={Pblog} />
					<Route path="/wspolpraca" component={Pwspolpraca} />
					<Route path="/metamorfozy" component={Pmetamorfozy} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
