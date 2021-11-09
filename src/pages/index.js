import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import HeaderBar from '../components/header-bar/header-bar.component';
import DarkBar from '../components/dark-bar/dark-bar.component';
import BodyLayout from '../components/body-content/body.component';
import FooterComponent from '../components/footer-content/footer.component';

// markup
const IndexPage = () => {
	return (
		<>
			<link rel="shortcut icon" href="/src/images/favicon.ico" />
			<header>
				<DarkBar></DarkBar>
				<HeaderBar></HeaderBar>

			</header>
			<section>
				<BodyLayout />
			</section>

			<footer>
				<FooterComponent />
			</footer>
		</>
	);
};

export default IndexPage;
