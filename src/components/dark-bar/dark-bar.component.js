import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { navLinks, navLinkItem, navLinkText, navImg, barBlack } from './dark-bar.module.css';
import { Link } from 'gatsby';


const DarkBar = () => {
  return (
    <div className={barBlack}>
      <div className="row">
        <div className="col">
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link target="_blank" to="https://www.facebook.com/THRLifeService" className={navLinkText}>
                <FaFacebook />
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link target="_blank" to="https://www.instagram.com/thrlifeservice/?hl=es" className={navLinkText}>
                <FaInstagram />
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link target="_blank" to="https://wa.me/522381667803?text=Hola%20necesito%20informacion%20de%20sus%20servicios!" className={navLinkText}>
                <FaWhatsapp />
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link target="_blank" to="https://wa.me/522383901772?text=Hola%20necesito%20informacion%20de%20sus%20servicios!" className={navLinkText}>
                <FaWhatsapp />
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link className={navLinkText}>
                |
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText}>
                <FaPhoneAlt />&nbsp;&nbsp; 238 166 78 03 &nbsp;&nbsp;|&nbsp;&nbsp; 238 390 1772
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DarkBar;