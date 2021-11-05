import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import HeaderBar from '../components/header-bar/header-bar.component';
import DarkBar from '../components/dark-bar/dark-bar.component';
import BodyLayout from '../components/body-content/body.component';

// markup
const IndexPage = () => {
	return (
		<>
			<header>
				<DarkBar></DarkBar>
				<HeaderBar></HeaderBar>

			</header>
			<section>
				<BodyLayout />
				<StaticImage alt='logo' src='../images/logo.png' />
			</section>
		</>
	);
};

export default IndexPage;
