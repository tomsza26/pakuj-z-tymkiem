import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
	shorten = (str, maxLen, separator = ' ') => {
		if (str.length <= maxLen) return str;
		return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
	};

	render() {
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
						<Link to="/blog/jakZaczac">
							<div className="blogButton" id="blogStart">
								jak zacząć?
							</div>
						</Link>
						<Link to="/blog/ciekawostki">
							<div className="blogButton">ciekawostki</div>
						</Link>
						<Link to="/blog/rozwojOsobisty">
							<div className="blogButton">rozwój osobisty</div>
						</Link>
						<Link to="/blog/planyTreningowe">
							<div className="blogButton">plany treningowe</div>
						</Link>
					</div>
					<div id="blogContentHeader2">najnowsze artykuły</div>

					<Link to="/blog/">
						<div className="blogArticle">
							<div className="blogArticleCategory">rozwój osobisty</div>
							<div className="blogArticleHeader">nagłówek jest masno</div>
							<div className="blogArticleContent">
								{this.shorten(
									'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias expedita ipsum libero ex nisi ipsam quia, sequi earum repellat ipsa quibusdam accusamus deleniti error nihil porro soluta tempora sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore mollitia aspernatur laboriosammolestias illum eum assumenda ab laudantium, nemo corporis perspiciatis! Qui tempore ab eligendi dolores molestias. Suscipit!',
									300
								)}
							</div>
							<div className="blogArticleDate">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</div>
					</Link>
					<Link to="/blog/">
						<div className="blogArticle">
							<div className="blogArticleCategory">rozwój osobisty</div>
							<div className="blogArticleHeader">nagłówek jest masno</div>
							<div className="blogArticleContent">
								{this.shorten(
									'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias expedita ipsum libero ex nisi ipsam quia, sequi earum repellat ipsa quibusdam accusamus deleniti error nihil porro soluta tempora sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore mollitia aspernatur laboriosammolestias illum eum assumenda ab laudantium, nemo corporis perspiciatis! Qui tempore ab eligendi dolores molestias. Suscipit!',
									300
								)}
							</div>
							<div className="blogArticleDate">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</div>
					</Link>
					<Link to="/blog/">
						<div className="blogArticle">
							<div className="blogArticleCategory">rozwój osobisty</div>
							<div className="blogArticleHeader">nagłówek jest masno</div>
							<div className="blogArticleContent">
								{this.shorten(
									'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias expedita ipsum libero ex nisi ipsam quia, sequi earum repellat ipsa quibusdam accusamus deleniti error nihil porro soluta tempora sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore mollitia aspernatur laboriosammolestias illum eum assumenda ab laudantium, nemo corporis perspiciatis! Qui tempore ab eligendi dolores molestias. Suscipit!',
									300
								)}
							</div>
							<div className="blogArticleDate">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</div>
					</Link>
				</div>
			</section>
		);
	}
}

export default Blog;
