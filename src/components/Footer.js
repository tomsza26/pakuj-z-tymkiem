import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div id="footerBackground">
				<div id="footerCallCon">
					<div id="footerCallText">ZADZWOŃ TERAZ</div>
					<div id="footerCallNumber">665 628 680</div>
				</div>
			</div>
			<div id="footerContent">
				<div id="footerContactBorder">
					<form method="POST">
						<div id="footerContactHeader">Wolisz napisać? Nie ma problemu!</div>
						<p>Wyślij do mnie e-mail, lub skontaktuj się ze mną poprzez Facebook Messenger.</p>
						<input type="email" name="_replyto" placeholder="Twój adres e-mail" maxLength="30" required />
						<input
							type="tel"
							name="_subject"
							placeholder="Twój numer telefonu"
							maxLength="9"
							required
							pattern="[0-9]{9}"
						/>
						<textarea
							name="message"
							placeholder="Treść wiadomości..."
							maxLength="600"
							minLength="10"
							required
						/>
						<button type="submit">wyślij</button>
					</form>
				</div>

				<div id="footerAboutMe">
					<div id="footerMapContainer">
						<div id="footerMap">
							<div id="footerMapHeader">Aktualnie pracuję w: </div>
							<iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuwbKviNbBEcRvWQliAw1SZc&key=AIzaSyBJX_FzAlIwwa6TMAIsQrWBFDVOpd_akto" />
						</div>
						<div id="footerSocialContainer">
							<div id="footerSocialHeader">Znajdziesz mnie na:</div>
							<div id="footerIcons">
								<a href="" target="_blank">
									<FontAwesomeIcon icon={faFacebookF} color="#3b5999" />
								</a>
								<a href="" target="_blank">
									<FontAwesomeIcon icon={faInstagram} color="#e4405f" />
								</a>
								<a href="" target="_blank">
									<FontAwesomeIcon icon={faYoutube} color="#cd201f" />
								</a>
							</div>
						</div>
					</div>
					<div id="footerClose">
						<section id="footerCopyright">&copy; 2020 - Wszelkie prawa zastrzeżone</section>
						<section id="footerMakedBy">
							Projekt i Realizacja:{' '}
							<a href="https://tomsza26.github.io/portfolio/" target="_blank">
								Tomasz Szablewski
							</a>
						</section>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
