import React from 'react';

class Pwspolpraca extends React.Component {
	componentDidMount() {
		document.title = 'Współpraca - Pakuj z Tymkiem';
		window.history.pushState(null, null, ' ');
	}

	render() {
		return (
			<div className="PCont" id="PMWspol">
				<div className="PInner" id="coopCont">
					<div className="PHeader" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
						WSPÓŁPRACA
					</div>
					<div className="Pcoop" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
						Potrzebujesz planu treningowego stworzonego według twoich potrzeb? A może spersonalizowanej
						diety? Czy po prostu jesteś na początku przygody ze zdrowym stylem życia i nie wiesz jak się do
						tego zabrać?
						<p className="coopP">
							Napisz do mnie, lub zadzwoń a przedstawię Ci szeroką gamę ofert i pomogę wybrać taką, która
							będzie najbardziej pasowała do twoich potrzeb!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Pwspolpraca;
