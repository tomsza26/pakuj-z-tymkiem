import React from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './Navigation';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import * as palmDude from './images/palmDude.json';
import * as success from './images/success.json';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';

AOS.init();

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: palmDude.default,
	rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
};

const defaultOptions2 = {
	loop: false,
	autoplay: true,
	animationData: success.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: undefined,
			loading: undefined
		};
	}

	componentDidMount() {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => {
				this.setState({ loading: true });
				setTimeout(() => {
					this.setState({ done: true });
				}, 650);
			});
		}, 1200);
	}

	render() {
		return <Navigation />;
	}
}

export default App;
