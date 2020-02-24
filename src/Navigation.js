import React from 'react';
import './App.scss';
import Heading from './components/Heading';
import Footer from './components/Footer';
import PoMnie from './pages/PoMnie';
import Pblog from './pages/Pblog';
import Pglowna from './pages/Pglowna';
import Pmetamorfozy from './pages/Pmetamorfozy';
import Pwspolpraca from './pages/Pwspolpraca';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Navigation() {
	return (
		<Router>
			<div className="App">
				<Heading />
				<Switch>
					<Route path="/" exact component={Pglowna} />
					<Route path="/oMnie" component={PoMnie} />
					<Route path="/blog" component={Pblog} />
					<Route path="/wspolpraca" component={Pwspolpraca} />
					<Route path="/metamorfozy" component={Pmetamorfozy} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
