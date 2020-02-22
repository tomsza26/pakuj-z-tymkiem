import React from 'react';
import Logo from '../images/LogoV1.js';
import { Link } from 'react-router-dom';

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
		} else {
			this.setState({
				containerName: 'container'
			});

			let items = document.querySelectorAll('.b');
			items.forEach((userItem) => {
				userItem.style.display = 'none';
			});
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
						<Link to="/" className="b">
							<div className="a">strona główna</div>
						</Link>
						<Link to="/oMnie" className="b">
							<div className="a">o mnie</div>
						</Link>
						<Link to="/blog" className="b">
							<div className="a">blog</div>
						</Link>
						<Link to="/metamorfozy" className="b">
							<div className="a">metamorfozy</div>
						</Link>
						<Link to="/wspolpraca" className="b">
							<div className="a">współpraca</div>
						</Link>
						<a className="a" href="#footerBackground">
							kontakt
						</a>
					</nav>
				</div>
			</header>
		);
	}
}

export default Heading;
