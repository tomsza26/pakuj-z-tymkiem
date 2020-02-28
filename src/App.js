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
import * as footerLoading from './images/footerLoading.json';

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
	static defaultProps = {
		shouldShowDialog: false,
		htmlRef: undefined,
		minimized: undefined,
		themeColor: undefined,
		loggedInGreeting: undefined,
		loggedOutGreeting: undefined,
		greetingDialogDisplay: undefined,
		greetingDialogDelay: undefined,
		autoLogAppEvents: true,
		xfbml: true,
		version: '2.11',
		language: 'pl_PL',
		debug: false,
		onCustomerChatDialogShow: undefined,
		onCustomerChatDialogHide: undefined
	};

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
		return (
			<React.Fragment>
				<MessengerCustomerChat pageId="109305670666810" appId="812114352600049" />
				{!this.state.done ? (
					<FadeIn>
						<div id="loading">
							{!this.state.loading ? (
								<Lottie options={defaultOptions} height={200} width={200} />
							) : (
								<Lottie options={defaultOptions2} height={200} width={200} />
							)}
							<h1>jeszcze moment</h1>
						</div>
					</FadeIn>
				) : (
					<Navigation />
				)}
			</React.Fragment>
		);
	}
}

export default App;
