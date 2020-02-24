import React from 'react';
import Logo from '../images/LogoV1.js';
import { Link } from 'react-scroll';
import { HashLink as NavLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

class Heading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			containerName: 'container'
		};
	}

	clicked = () => {
		if (this.state.containerName === 'container') {
			this.setState({
				containerName: 'container change'
			});

			let items = document.querySelectorAll('.b');
			items.forEach((userItem) => {
				userItem.style.display = 'grid';
			});

			document.querySelector('#headContact').style.display = 'grid';
		} else {
			this.setState({
				containerName: 'container'
			});

			let items = document.querySelectorAll('.b');
			items.forEach((userItem) => {
				userItem.style.display = 'none';
			});

			document.querySelector('#headContact').style.display = 'none';
		}
	};

	render() {
		return (
			<header>
				<Logo data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" />
				<div id="navContainer">
					<div id="telephone" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
						zadzwoń:{' '}
						<a id="number" href="tel:+48-665-628-680">
							+48 665 628 680
						</a>
					</div>
					<nav
						id="topNav"
						className="topNavigation"
						data-aos="fade-down"
						data-aos-duration="2000"
						data-aos-once="true"
					>
						<span id="menuText">MENU</span>
						<div className={this.state.containerName} onClick={this.clicked}>
							<div className="bar1" />
							<div className="bar2" />
							<div className="bar3" />
						</div>
						<NavLink to="/" className="b">
							<div className="a">strona główna</div>
						</NavLink>
						<NavLink
							smooth
							to="/oMnie#PMHeader"
							scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">o mnie</div>
						</NavLink>
						<NavLink
							to="/blog"
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">blog</div>
						</NavLink>
						<NavLink
							to="/metamorfozy"
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">metamorfozy</div>
						</NavLink>
						<NavLink
							to="/wspolpraca"
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">współpraca</div>
						</NavLink>
						<Link className="a" id="headContact" to="footer" smooth={true} duration={1000} isDynamic={true}>
							kontakt
						</Link>
					</nav>
				</div>
			</header>
		);
	}
}

export default Heading;
