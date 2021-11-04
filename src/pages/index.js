import * as React from 'react';

import Layout from '../components/layaut';
import { StaticImage } from 'gatsby-plugin-image';
import Navbar from '../components/navbar/navbar.component';
import HeaderBar from '../components/header-bar/header-bar.component';

// markup
const IndexPage = () => {
	return (
		<div>
			<HeaderBar></HeaderBar>
			<StaticImage alt='logo' src='../images/logo.png' />
		</div>
	);
};

export default IndexPage;
