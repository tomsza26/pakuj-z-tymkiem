import React from 'react';

class PoMnie extends React.Component {
	componentDidMount() {
		document.title = 'O Mnie - Pakuj z Tymkiem';
		window.history.pushState(null, null, ' ');
	}

	render() {
		return (
			<div className="PCont" id="PMHeader">
				<div className="PInner" id="aboutContainer">
					<div className="PHeader" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
						O MNIE
					</div>
					<div id="PblogText" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
						<div className="PblogTextHeader">Cześć!</div> Nazywam się Tymek i jestem trenerem personalnym,
						moją pasją od zawsze był sport. Jako dziecko próbowałem różnych dyscyplin sportowych, jedną z
						nich był hokej na lodzie, z którym przygoda trwała prawie 10 lat! Oczywiście nie ograniczałem
						się jedynie do tego sportu, każda aktywność fizyczna sprawiała mi frajdę czy były to osiedlowe
						mecze w piłkę czy boksowanie worka w piwnicy kolegi. W wieku 12 lat po raz pierwszy udało mi się
						namówić rodziców aby kupili mi podstawowy sprzęt do ćwiczeń siłowych tak zwany atlas, składał
						się ze sztangi ławeczki i kilku talerzy obciążenia. Już rok później kupiłem sobie pierwszy
						karnet na siłownie, od tamtej pory po dziś dzień jestem zakochany w siłowni.<br />
						<br /> W szkole średniej, gdy nasza drużyna miała trening na siłowni już większość z zawodników
						układało sobie trening z moją pomocą. Wtedy hokej już nie był dla mnie tak ważny jak siłownia,
						chłonąłem wiedzę jak gąbka obserwując najlepszych w tej dziedzinie jak i zagłębiając się w
						literaturę. Moja sylwetka, siła i wytrzymałość zaczął się wyróżniać co dawało mi jeszcze większy
						zastrzyk motywacji. <br />
						<br /> Po ukończeniu szkoły średniej zrezygnowałem z gry w hokeja i za główny cel obrałem sobie
						połączenie życia zawodowego z pasją. Wybrałem się na uczelnie AWF w katowicach na kierunek
						aktywność fizyczna i żywienie, już wtedy dostałem pierwszą pracę weekendowa na siłowni,
						pracowałem na recepcji jak i pomagałem klientom, którzy byli ciekawi technik treningowych.
						Poznałem tam także znakomitych trenerów, od których bardzo dużo się dowiedziałem i znajomość z
						nimi po dziś dzień procentuje.<br />
						<br /> Siłownia w której pracowałem jako jedna z pierwszych na Śląsku prowadziła treningi
						EMS(electro muscle stimulation), nowoczesny trening mało znany wśród ludzi lecz przynoszący
						super efekty zdrowotne jak i sylwetkowe. Szefowa siłowni, która także była trenerką EMSa, dała
						możliwość wyszkolenia mnie na właśnie trenera z pomocą elektrostymulacji. Na siłowni spędzam
						wiele godzin już nie tylko w weekendy, po jakimś czasie zostałem trenerem Emsa i prowadziłem
						personalne treningi pod prądem jak i klasyczne na siłowni.<br />
						<br />
						W tym czasie moja masa mięśniowa znacząco się zwiększyła i żeby nie stać się "sztywnym"
						zapisałem się do pobliskiego klubu zapaśniczego gdzie oprócz poprawienia znacząco sprawności
						poznałem wiele super technik treningu na wytrzymałość czy szybkość. Po jakimś czasie w moim
						życiu pojawiła się bardzo ważna osoba, dzięki której zmieniłem miejsce zamieszkania na Poznań.
						Przerwałem naukę na uczelni i wziąłem sprawy w swoje ręce, w stolicy wielkopolski trafiłem do
						Saturn fitness w którym pracuję do dziś jako trener. Moje doświadczenie z dnia na dzień jest
						większe i dzięki pracy z ludźmi mam coraz więcej przemyśleń. <br />
						<br />Powstanie tej strony to kolejny duży krok w moim rozwoju. Dzięki tej witrynie będę mógł
						się podzielić z znacznie wieksza iloscia osob moimi przemyśleniami i sposobami treningowymi jak
						i mentalnymi związanymi z treningiem. Także mam zamiar czegoś się nauczyć od osób ją
						odwiedzających co sprawi, że moje metody będą coraz bardziej skuteczne.
					</div>
					<div id="PblogImage" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
						<img src={require('../images/slider1.jpg')} alt="tymek" />
					</div>
				</div>
			</div>
		);
	}
}

export default PoMnie;
