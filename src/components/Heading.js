import React from 'react';
import '../App.scss';
import Logo from '../images/LogoV1.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.scss';

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
	render() {
		return (
			<React.Fragment>
				<header>
					<Logo />
					<nav>
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
							oferta<FontAwesomeIcon icon={faSortDown} />
						</a>
						<a className="a" href="">
							kontakt
						</a>
						<div id="telephone">
							zadzwoń:{' '}
							<a id="number" href="tel:+48-665-628-680">
								+48 665 628 680
							</a>
						</div>
					</nav>
				</header>
				{slider}
			</React.Fragment>
		);
	}
}

export default Heading;
