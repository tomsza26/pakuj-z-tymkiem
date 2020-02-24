import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class Pblog extends React.Component {
	componentDidMount() {
		document.title = 'Blog - Pakuj z Tymkiem';
	}

	shorten = (str, maxLen, separator = ' ') => {
		if (str.length <= maxLen) return str;
		return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
	};

	render() {
		return (
			<div className="PCont">
				<div className="PInner" id="Pblog">
					<div
						className="PHeader"
						data-aos="fade-down"
						data-aos-duration="2000"
						data-aos-once="true"
						id="PMBlog"
					>
						BLOG
					</div>
					<div id="PblogButtonsCont">
						<div className="PBlogButton">DIETA</div>
						<div className="PBlogButton">TRENING</div>
						<div className="PBlogButton">CIEKAWOSTKI</div>
						<div className="PBlogButton">JAK ZACZĄĆ?</div>
						<div className="PBlogButton">ROZWÓJ OSOBISTY</div>
						<div className="PBlogButton">PLANY TRENINGOWE</div>
					</div>

					<div className="PblogArticlesCont">
						<a href="/" className="PblogArticle">
							<div className="PblogCategory">rozwój osobisty</div>
							<div className="PblogHeader">masno fest</div>
							<img src={require('../images/slider1.jpg')} alt="article Photo" className="PblogImg" />
							<div className="PblogText">
								{this.shorten(
									'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illo voluptas facere, quidem atque quas temporibus fuga consectetur animi quis dignissimos officia maiores sequi laborum impedit voluptates in libero aperiam. Suscipit!',
									400
								)}
							</div>
							<div className="PblogDateCont">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</a>
						<a href="/" className="PblogArticle">
							<div className="PblogCategory">rozwój osobisty</div>
							<div className="PblogHeader">masno fest</div>
							<img src={require('../images/slider1.jpg')} alt="article Photo" className="PblogImg" />
							<div className="PblogText">
								{this.shorten(
									'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illo voluptas facere, quidem atque quas temporibus fuga consectetur animi quis dignissimos officia maiores sequi laborum impedit voluptates in libero aperiam. Suscipit!',
									400
								)}
							</div>
							<div className="PblogDateCont">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</a>
						<a href="/" className="PblogArticle">
							<div className="PblogCategory">rozwój osobisty</div>
							<div className="PblogHeader">masno fest</div>
							<img src={require('../images/slider1.jpg')} alt="article Photo" className="PblogImg" />
							<div className="PblogText">
								{this.shorten(
									'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illo voluptas facere, quidem atque quas temporibus fuga consectetur animi quis dignissimos officia maiores sequi laborum impedit voluptates in libero aperiam. Suscipit!',
									400
								)}
							</div>
							<div className="PblogDateCont">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</a>
						<a href="/" className="PblogArticle">
							<div className="PblogCategory">rozwój osobisty</div>
							<div className="PblogHeader">masno fest</div>
							<img src={require('../images/slider1.jpg')} alt="article Photo" className="PblogImg" />
							<div className="PblogText">
								{this.shorten(
									'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illo voluptas facere, quidem atque quas temporibus fuga consectetur animi quis dignissimos officia maiores sequi laborum impedit voluptates in libero aperiam. Suscipit!',
									400
								)}
							</div>
							<div className="PblogDateCont">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</a>
						<a href="/" className="PblogArticle">
							<div className="PblogCategory">rozwój osobisty</div>
							<div className="PblogHeader">masno fest</div>
							<img src={require('../images/slider1.jpg')} alt="article Photo" className="PblogImg" />
							<div className="PblogText">
								{this.shorten(
									'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illo voluptas facere, quidem atque quas temporibus fuga consectetur animi quis dignissimos officia maiores sequi laborum impedit voluptates in libero aperiam. Suscipit!',
									400
								)}
							</div>
							<div className="PblogDateCont">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</a>
						<a href="/" className="PblogArticle">
							<div className="PblogCategory">rozwój osobisty</div>
							<div className="PblogHeader">masno fest</div>
							<img src={require('../images/slider1.jpg')} alt="article Photo" className="PblogImg" />
							<div className="PblogText">
								{this.shorten(
									'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illo voluptas facere, quidem atque quas temporibus fuga consectetur animi quis dignissimos officia maiores sequi laborum impedit voluptates in libero aperiam. Suscipit!',
									400
								)}
							</div>
							<div className="PblogDateCont">
								<FontAwesomeIcon icon={faCalendarAlt} /> 15.05.1999{' '}
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Pblog;
