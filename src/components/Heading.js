import React from 'react';
import Logo from '../images/LogoV1.js';
import { HashLink as NavLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';

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

	navToFooter = () => {
		document.querySelector('#footerBackground').scrollIntoView({ behavior: 'smooth' });
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
						<NavLink
							className="b"
							to={window.innerWidth > 680 ? '/' : '/#headerImgContainer'}
							scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
						>
							<div className="a">strona główna</div>
						</NavLink>
						<NavLink
							smooth
							to={window.innerWidth > 680 ? '/oMnie' : '/oMnie#PMHeader'}
							scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">o mnie</div>
						</NavLink>
						<NavLink
							to={window.innerWidth > 680 ? '/blog' : '/blog#PMBlog'}
							scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">blog</div>
						</NavLink>
						<NavLink
							to={window.innerWidth > 680 ? '/metamorfozy' : '/metamorfozy#PMMeta'}
							scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">metamorfozy</div>
						</NavLink>
						<NavLink
							to={window.innerWidth > 680 ? '/wspolpraca' : '/wspolpraca#PMWspol'}
							scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
							className="b"
							activeStyle={{
								background: '#4831d4',
								color: '#ccf381'
							}}
						>
							<div className="a">współpraca</div>
						</NavLink>
						<a onClick={this.navToFooter} className="a" id="headContact">
							kontakt
						</a>
					</nav>
				</div>
			</header>
		);
	}
}

export default Heading;
