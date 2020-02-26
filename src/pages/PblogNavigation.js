import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import articles from '../content/articles.json';

class PblogNavigation extends React.Component {
	shorten = (str, maxLen, separator = ' ') => {
		if (str.length <= maxLen) return str;
		return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
	};

	render() {
		return (
			<React.Fragment>
				{articles
					.sort(function(a, b) {
						return b.id - a.id;
					})
					.map((data, index) => {
						let docLoc = document.location.pathname;
						if (docLoc === '/blog') {
							return (
								<Link to={'/blog/' + data.id} className="PblogArticle" key={index}>
									<div className="PblogCategory">{data.kategoria}</div>
									<div className="PblogHeader">{data.nazwa}</div>
									<img src={require('../images/slider1.jpg')} alt="articleP" className="PblogImg" />
									<div className="PblogText">{this.shorten(data.tekst, 400)}</div>
									<div className="PblogDateCont">
										<FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</div>
								</Link>
							);
						} else if (
							data.kategoria
								.replace(/\s+/g, '_')
								.replace('ą', 'a')
								.replace('ć', 'c')
								.replace('ó', 'o')
								.replace(/[^\w\s]/gi, '')
								.toLowerCase() === docLoc.substring(docLoc.indexOf('/') + 6)
						) {
							return (
								<Link to={'/blog/' + data.id} className="PblogArticle" key={index}>
									<div className="PblogCategory">{data.kategoria}</div>
									<div className="PblogHeader">{data.nazwa}</div>
									<img src={require('../images/slider1.jpg')} alt="articleP" className="PblogImg" />
									<div className="PblogText">{this.shorten(data.tekst, 400)}</div>
									<div className="PblogDateCont">
										<FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</div>
								</Link>
							);
						}
					})}
			</React.Fragment>
		);
	}
}

export default PblogNavigation;
