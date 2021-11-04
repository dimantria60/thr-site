import * as React from 'react';
import { Link } from 'gatsby';
import { navLinks, navLinkItem, navLinkText } from './navbar.module.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul className={navLinks}>
				<li className={navLinkItem}>
					<Link className={navLinkText} to='/'>
						Home
					</Link>
				</li>
				<li className={navLinkItem}>
					<Link className={navLinkText} to='/about'>
						About
					</Link>
				</li>
				<li className={navLinkItem}>
					<Link className={navLinkText} to='/contact'>
						Contact
					</Link>
				</li>
				<li className={navLinkItem}>
					<Link className={navLinkText} to='/clients'>
						Clients
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
