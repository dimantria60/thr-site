import * as React from 'react';
import { footerStart, imgContainer, listGroupItem } from './footer.module.css';
import { StaticImage } from 'gatsby-plugin-image';


const FooterComponent = () => {
  return (
    <div className={footerStart}>

      <div>
        <ul className={listGroupItem}>
          <li>Dirección</li>
          <p>
            Miguel Lerdo de Tejada #910 75770 Tehuacán, México</p>
          <li>Telefonos</li>
          <p>238 166 78 03 </p>
          <p>238 390 1772</p>
          <li>Correos Electronicos</li>
          <p>ventas@thrlifeservice.mx</p>
        </ul>
      </div>

      <div className={imgContainer} >
        <StaticImage src="../../images/image.png" className="card-StaticImage-top" alt="..." />
      </div>

      <div>
        <ul className={listGroupItem}>
          <li>Facebook</li>
          <p>THR Life Service</p>
          <li>Instagram</li>
          <p>@thrlifeservice</p>
          <li>Whatsapp</li>
          <p>+52 1 238 390 1772</p>
        </ul>
      </div>

      {/* <div>
        <ul className={listGroupItem}>
          <li>Preguntas Frecuentes</li>
          <li>Aviso Legal</li>
          <li>Terminos y Condiciones</li>
        </ul>
      </div> */}

    </div>
  )
}

export default FooterComponent;