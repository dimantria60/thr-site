import React from "react"

import { Link } from "gatsby"

import * as styles from "./menu.module.scss"
import { FaCog, FaHome, FaLaughBeam, FaMapMarkerAlt } from 'react-icons/fa';


const Menu = (props) => {

  return (
    <div
      role="button"
      tabIndex="0"
      className={`${styles.menu} ${props.open ? `${styles.open}` : ""}`}
      onClick={props.toggle}
      onKeyDown={props.toggle}
    >
      <Link to="/"> <h1><FaHome /> &nbsp; Inicio</h1></Link>
      <Link to="/about"><h1> <FaCog /> &nbsp; Nosotros</h1></Link>
      <Link to="/contact"> <h1> <FaMapMarkerAlt /> &nbsp; Contacto</h1></Link>
      <Link to="/clients"><h1> <FaLaughBeam /> &nbsp; Clientes</h1></Link>
    </div>
  )

}
export default Menu;
