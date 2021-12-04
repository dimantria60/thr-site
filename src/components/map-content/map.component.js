import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { mapContainer, imgContainer, iframe } from './map.module.css'

const Map = () => {
  return (
    <div className={mapContainer} >
      {/* <div className={imgContainer}>
        <StaticImage
          src="../../images/Captura.PNG" alt="map" />
      </div> */}
      <h1>Ubicación de la empresa: </h1>
      <div>
        <iframe className={iframe} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.465858682803!2d-97.3989804!3d18.4557152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35deadb08ddb4731!2sTHR-Life%20Service!5e0!3m2!1ses-419!2smx!4v1636226374481!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Map;