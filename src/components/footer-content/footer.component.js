import * as React from 'react';
import { footerStart, imgContainer, listGroupItem } from './footer.module.css';
import { StaticImage } from 'gatsby-plugin-image';


const FooterComponent = () => {
  return (
    <div className={footerStart}>

      <div>
        <ul className={listGroupItem}>
          <li>Dirección</li>
          <li>Telefonos</li>
          <li>Correos Electronicos</li>
        </ul>
      </div>

      <div className={imgContainer} >
        <StaticImage src="../../images/image.png" class="card-StaticImage-top" alt="..." />
      </div>

      <div>
        <ul className={listGroupItem}>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Whatsapp</li>
        </ul>
      </div>

      <div>
        <ul className={listGroupItem}>
          <li>Preguntas Frecuentes</li>
          <li>Aviso Legal</li>
          <li>Terminos y Condiciones</li>
        </ul>
      </div>

    </div>
  )
}

export default FooterComponent;