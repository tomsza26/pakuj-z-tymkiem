import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Metam() {
	return (
		<div id="metamorfozy">
			<div id="metaCont">
				<div id="metaHeader">Zobacz, komu już pomogłem!</div>
				<div id="metaArticlesCont">
					<div className="metaArticle">
						<img
							src={require('../images/aboutMe.jpg')}
							alt="image"
							data-aos="flip-right"
							data-aos-duration="2500"
							data-aos-once="true"
						/>
						<img
							src={require('../images/aboutMe.jpg')}
							alt="image"
							data-aos="flip-left"
							data-aos-duration="2500"
							data-aos-once="true"
						/>
						<div
							className="metaContentCont"
							data-aos="fade-up"
							data-aos-duration="2500"
							data-aos-once="true"
						>
							<div className="metaNames">Tymek Nowak</div>
							<div className="metaTarget">
								<span className="metaA">osiągnęliśmy: </span>100kg mniej
							</div>
							<div className="metaDate">
								<span className="metaD">czas: </span>3 miesiące
							</div>
							<div className="metaDesc">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eius sequi eaque
								repellat culpa autem voluptate accusamus reiciendis, quas ipsam recusandae expedita
								voluptas, cupiditate assumenda tenetur hic, ipsum exercitationem harum!
							</div>
						</div>
					</div>
					<div className="metaArticle">
						<img
							src={require('../images/aboutMe.jpg')}
							alt="image"
							data-aos="flip-right"
							data-aos-duration="3000"
							data-aos-once="true"
						/>
						<img
							src={require('../images/aboutMe.jpg')}
							alt="image"
							data-aos="flip-left"
							data-aos-duration="3000"
							data-aos-once="true"
						/>
						<div
							className="metaContentCont"
							data-aos="fade-up"
							data-aos-duration="2500"
							data-aos-once="true"
						>
							<div className="metaNames">Tymek Nowak</div>
							<div className="metaTarget">
								<span className="metaA">osiągnęliśmy: </span>100kg mniej
							</div>
							<div className="metaDate">
								<span className="metaD">czas: </span>3 miesiące
							</div>
							<div className="metaDesc">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eius sequi eaque
								repellat culpa autem voluptate accusamus reiciendis, quas ipsam recusandae expedita
								voluptas, cupiditate assumenda tenetur hic, ipsum exercitationem harum!
							</div>
						</div>
					</div>
				</div>
			</div>
			<a href="" target="_blank" id="metaButton">
				WIĘCEJ METAMORFOZ <FontAwesomeIcon icon={faExternalLinkAlt} />
			</a>
		</div>
	);
}

export default Metam;
