import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Navbar from '../navbar/navbar.component';
import { headerBarContainer, container, row, navImg } from './header-bar.module.css';

const HeaderBar = () => {
	return (
		<div className={headerBarContainer}>
			<div className={container}>
				<div className={row}>
					<StaticImage className={navImg} alt='logo' src='../../images/logodef.png' />
					<Navbar></Navbar>
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;
