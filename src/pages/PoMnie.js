import React from 'react';

class PoMnie extends React.Component {
	componentDidMount() {
		document.title = 'O Mnie - Pakuj z Tymkiem';
	}

	render() {
		return (
			<div className="PCont">
				<div className="PInner">
					<div className="PHeader" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
						O MNIE
					</div>
					<div
						id="PblogText"
						data-aos="fade-right"
						data-aos-duration="2000"
						data-aos-once="true"
						id="PMHeader"
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, facere minus nam vitae
						numquam ipsa, assumenda, corporis aliquam sapiente quisquam ad mollitia aliquid! Sit eum
						laudantium itaque? Eligendi, blanditiis incidunt!
					</div>
					<div id="PblogImage" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
						<img src={require('../images/slider1.jpg')} alt="tymek" />
					</div>
				</div>
			</div>
		);
	}
}

export default PoMnie;
