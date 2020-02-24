import React from 'react';

class Pwspolpraca extends React.Component {
	componentDidMount() {
		document.title = 'Współpraca - Pakuj z Tymkiem';
	}

	render() {
		return (
			<div className="PCont">
				<div className="PInner">
					<div
						className="PHeader"
						data-aos="fade-down"
						data-aos-duration="2000"
						data-aos-once="true"
						id="PMWspol"
					>
						WSPÓŁPRACA
					</div>
					<div className="Pcoop">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quasi consequatur quo
						beatae, excepturi velit quos eum! Commodi vitae eos magnam optio, aspernatur laborum repellendus
						quae reprehenderit cum, laudantium soluta.
					</div>
				</div>
			</div>
		);
	}
}

export default Pwspolpraca;
