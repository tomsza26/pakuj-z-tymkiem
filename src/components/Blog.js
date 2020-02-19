import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class Blog extends React.Component {
	shorten = (str, maxLen, separator = ' ') => {
		if (str.length <= maxLen) return str;
		return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
	};

	render() {
		return (
			<section id="blog">
				<header id="blogHeader">BLOG</header>
				<div id="blogContainer">
					<div id="blogButtonsContainer">
						<div className="blogContentHeader">szybki start</div>
						<a href="" className="blogButton">
							dieta
						</a>
						<a href="" className="blogButton">
							trening
						</a>
						<a href="" className="blogButton">
							jak zacząć?
						</a>
						<a href="" className="blogButton">
							ciekawostki
						</a>
						<a href="" className="blogButton">
							rozwój osobisty
						</a>
						<a href="" className="blogButton">
							plany treningowe
						</a>
					</div>
					<div id="blogContent">
						<div className="blogContentHeader">najnowsze artykuły</div>
						<div id="blogArticlesContainer">
							<a href="" target="_blank" className="blogArticle">
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
							</a>
							<a href="" target="_blank" className="blogArticle">
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
							</a>
							<a href="" target="_blank" className="blogArticle">
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
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Blog;
