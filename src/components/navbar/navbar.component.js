import * as React from 'react';
import { Link } from 'gatsby';
import { navLinks, navLinkItem, navLinkText, navImg, navBar, imgContainer, navLinksMobil } from './navbar.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { FaHome } from 'react-icons/fa';
import Navigation from '../navigation/navigation.component';

const Navbar = () => {
	return (
		<div>
			<div className={imgContainer}>
				<StaticImage className={navImg} alt='logo' src='../../images/image.png' />
			</div>
			<div className={navLinksMobil}>
				<Navigation className={navLinksMobil}></Navigation>
			</div>
			<nav className={navBar}>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link className={navLinkText} to='/'>
							<FaHome />
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link className={navLinkText} to='/about'>
							NOSOTROS
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link className={navLinkText} to='/contact'>
							CONTACTO
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link className={navLinkText} to='/clients'>
							CLIENTES
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
