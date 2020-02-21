import React from 'react';
import '../App.scss';
import Logo from '../images/LogoV1.js';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
	<AutoplaySlider
		play={true}
		cancelOnInteraction={false} // should stop playing on user interaction
		interval={8000}
	>
		<div data-src={require('../images/slider1.jpg')}>
			<p>konsultacje on-line</p>
			<p>pełna współpraca</p>
		</div>
		<div data-src={require('../images/slider2.jpg')}>
			<p>dssds</p>
			<p>se</p>
		</div>
		<div data-src={require('../images/slider3.jpg')}>
			<p>siemanko</p>
			<p>witam w mojej kuchni</p>
		</div>
	</AutoplaySlider>
);

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

			let items = document.querySelectorAll('.a');
			items.forEach((userItem) => {
				userItem.style.display = 'grid';
			});
		} else {
			this.setState({
				containerName: 'container'
			});

			let items = document.querySelectorAll('.a');
			items.forEach((userItem) => {
				userItem.style.display = 'none';
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<div id="telephone">
					zadzwoń:{' '}
					<a id="number" href="tel:+48-665-628-680">
						+48 665 628 680
					</a>
				</div>
				<header>
					<Logo />
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
						<a className="a" href="">
							strona główna
						</a>
						<a className="a" href="">
							o mnie
						</a>
						<a className="a" href="">
							blog
						</a>
						<a className="a" href="">
							metamorfozy
						</a>
						<a className="a" href="">
							oferta
						</a>
						<a className="a" href="">
							kontakt
						</a>
					</nav>
				</header>
				{slider}
			</React.Fragment>
		);
	}
}

export default Heading;
