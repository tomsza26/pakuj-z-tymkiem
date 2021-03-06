import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PblogNavigation from './PblogNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

class Pblog extends React.Component {
	componentDidMount() {
		document.title = 'Blog - Pakuj z Tymkiem';
		window.history.pushState(null, null, ' ');
	}

	render() {
		return (
			<div className="PCont" id="PMBlog">
				<div className="PInner" id="Pblog">
					<div
						className="PHeader"
						data-aos="fade-down"
						data-aos-duration="2000"
						data-aos-once="true"
						id="PblogHeaderAr"
					>
						BLOG
					</div>
					<div id="PblogButtonsCont">
						<NavLink
							to="/blog/dieta"
							className="PBlogButton"
							activeStyle={{
								background: '#ccf381',
								color: '#4831d4'
							}}
						>
							DIETA
						</NavLink>
						<NavLink
							to="/blog/trening"
							className="PBlogButton"
							activeStyle={{
								background: '#ccf381',
								color: '#4831d4'
							}}
						>
							TRENING
						</NavLink>
						<NavLink
							to="/blog/ciekawostki"
							className="PBlogButton"
							activeStyle={{
								background: '#ccf381',
								color: '#4831d4'
							}}
						>
							CIEKAWOSTKI
						</NavLink>
						<NavLink
							to="/blog/jak_zaczac"
							className="PBlogButton"
							activeStyle={{
								background: '#ccf381',
								color: '#4831d4'
							}}
						>
							JAK ZACZĄĆ?
						</NavLink>
						<NavLink
							to="/blog/rozwoj_osobisty"
							className="PBlogButton"
							activeStyle={{
								background: '#ccf381',
								color: '#4831d4'
							}}
						>
							ROZWÓJ OSOBISTY
						</NavLink>
						<NavLink
							to="/blog/plany_treningowe"
							className="PBlogButton"
							activeStyle={{
								background: '#ccf381',
								color: '#4831d4'
							}}
						>
							PLANY TRENINGOWE
						</NavLink>
						<Link to="/blog" className="PBlogButton" id="PBlogRed">
							<FontAwesomeIcon icon={faRedoAlt} />
						</Link>
					</div>

					<Router>
						<div className="PblogArticlesCont">
							<Switch>
								<Route path="/blog" component={PblogNavigation} />
								<Route path="/blog/dieta" component={PblogNavigation} />
								<Route path="/blog/trening" component={PblogNavigation} />
								<Route path="/blog/ciekawostki" component={PblogNavigation} />
								<Route path="/blog/jak_zaczac" component={PblogNavigation} />
								<Route path="/blog/rozwoj_osobisty" component={PblogNavigation} />
								<Route path="/blog/plany_treningowe" component={PblogNavigation} />
							</Switch>
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

export default Pblog;
