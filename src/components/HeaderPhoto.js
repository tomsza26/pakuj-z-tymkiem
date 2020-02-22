import React from 'react';

function HeaderPhoto() {
	return (
		<div id="headerImgBack">
			<div id="headerImgContainer">
				<div id="headerTextContainer" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
					<div className="headerImgTitle">Szukasz zmiany?</div>
					<div className="headerImgTitle">Dobrze trafiłeś!</div>
					<div className="headerImgText">Mam na imię Tymek i pomogę Ci osiągnąć wymarzoną sylwetkę!</div>
					<div className="headerImgText">
						Znajdziesz tutaj ogromną dawkę wiedzy, łatwo przystępną dla każdego. Koniecznie zajrzyj do
						sekcji BLOG.
					</div>
					<div className="headerImgText">Możesz umówić się ze mną na trening.</div>
				</div>
				<img
					id="headerImg"
					src={require('../images/newMain1.png')}
					alt="slider"
					data-aos="fade-left"
					data-aos-duration="2000"
					data-aos-once="true"
				/>
			</div>
		</div>
	);
}

export default HeaderPhoto;
