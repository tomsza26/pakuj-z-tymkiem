import React from 'react';
import '../App.scss';

function AboutMe() {
	return (
		<article id="aboutMe">
			<div id="aboutMeContainer">
				<div id="aboutMeTextContainer" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true">
					<div id="aboutMeName">Tymek Nowak</div>
					<div id="aboutMeTrener">TRENER PERSONALNY</div>
					<img id="aboutPic1" src={require('../images/aboutMeCircle.png')} alt="image" />
					<div id="aboutMeContent">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ligula vel mollis
						finibus. Ut et viverra lacus, convallis pulvinar lorem. Nulla facilisi. Sed sed urna nec felis
						luctus pharetra. Nunc fringilla, quam sit amet rutrum commodo, lectus lectus rutrum lacus, et
						pulvinar elit neque id lorem. Proin eu nisl suscipit, varius nunc sed, cursus est. Praesent nec
						facilisis nunc. Integer volutpat est ut porttitor ullamcorper. Etiam congue cursus justo, vel
						volutpat erat pulvinar feugiat. Donec rhoncus eros porta leo tincidunt, a tincidunt lorem
						placerat. Ut ac tincidunt lacus, ut tincidunt tellus. Mauris rhoncus rutrum orci, id malesuada
						est varius sit amet. Sed commodo, tortor quis blandit lobortis, neque ante rhoncus nisl, ut
						fringilla neque nisl laoreet nunc. Quisque aliquam augue vulputate dolor fermentum rutrum. Nunc
						quis rhoncus sem. Etiam molestie rutrum nisl, eget cursus purus ullamcorper et. Integer feugiat
						enim quis ullamcorper congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
					</div>
					<a href="" id="aboutMeButton">
						CZYTAJ WIĘCEJ
					</a>
				</div>
				<img
					id="aboutPic2"
					src={require('../images/aboutMeCircle.png')}
					alt="image"
					data-aos="fade-left"
					data-aos-duration="3000"
					data-aos-once="true"
				/>
			</div>
		</article>
	);
}

export default AboutMe;
