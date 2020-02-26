import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import articles from '../content/articles.json';

class Blog extends React.Component {
	shorten = (str, maxLen, separator = ' ') => {
		if (str.length <= maxLen) return str;
		return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
	};

	render() {
		let blog = articles
			.sort(function(a, b) {
				return b.id - a.id;
			})
			.slice(0, 3)
			.map((data, index) => {
				return (
					<Link to={'/blog/' + data.id} key={index}>
						<div className="blogArticle">
							<div className="blogArticleCategory">{data.kategoria}</div>
							<div className="blogArticleHeader">{data.nazwa}</div>
							<div className="blogArticleContent">{this.shorten(data.tekst, 300)}</div>
							<div className="blogArticleDate">
								<FontAwesomeIcon icon={faCalendarAlt} /> {data.data}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</div>
					</Link>
				);
			});

		return (
			<section id="blog">
				<header id="blogHeader">BLOG</header>

				<div id="headerContainer">
					<div className="blogContentHeader1">najnowsze artykuły</div>
					<div className="blogContentHeader">szybki start</div>
				</div>

				<div id="blogContainer">
					<div id="blogButtonsContainer" data-aos="fade-right" data-aos-duration="2500" data-aos-once="true">
						<Link to="/blog/dieta">
							<div className="blogButton">dieta</div>
						</Link>
						<Link to="/blog/trening">
							<div className="blogButton">trening</div>
						</Link>
						<Link to="/blog/jak_zaczac">
							<div className="blogButton" id="blogStart">
								jak zacząć?
							</div>
						</Link>
						<Link to="/blog/ciekawostki">
							<div className="blogButton">ciekawostki</div>
						</Link>
						<Link to="/blog/rozwoj_osobisty">
							<div className="blogButton">rozwój osobisty</div>
						</Link>
						<Link to="/blog/plany_treningowe">
							<div className="blogButton">plany treningowe</div>
						</Link>
					</div>
					<div id="blogContentHeader2">najnowsze artykuły</div>
					{blog}
				</div>
			</section>
		);
	}
}

export default Blog;
