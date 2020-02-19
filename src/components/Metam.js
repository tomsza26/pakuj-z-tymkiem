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
						<img src={require('../images/aboutMe.jpg')} alt="image" />
						<img src={require('../images/aboutMe.jpg')} alt="image" />
						<div className="metaNames">Tymek Nowak</div>
						<div className="metaDesc">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eius sequi eaque repellat
							culpa autem voluptate accusamus reiciendis, quas ipsam recusandae expedita voluptas,
							cupiditate assumenda tenetur hic, ipsum exercitationem harum!
						</div>
					</div>
					<div className="metaArticle">
						<img src={require('../images/aboutMe.jpg')} alt="image" />
						<img src={require('../images/aboutMe.jpg')} alt="image" />
						<div className="metaNames">Tymek Nowak</div>
						<div className="metaDesc">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eius sequi eaque repellat
							culpa autem voluptate accusamus reiciendis, quas ipsam recusandae expedita voluptas,
							cupiditate assumenda tenetur hic, ipsum exercitationem harum!
						</div>
					</div>
				</div>
			</div>
			<a href="" target="_blank" id="metaButton">
				METAMORFOZY <FontAwesomeIcon icon={faExternalLinkAlt} />
			</a>
		</div>
	);
}

export default Metam;
