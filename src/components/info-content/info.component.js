import { container } from './info.module.css'
import * as React from 'react';

const Info = () => {
  return (
    <div className="container">
    <div className={container}>
      
        <h2 className="text-center mt-4 mb-3">Servicios THR</h2>
        <div className="row">
          <div className="col-md-4">
            <ul>
              <li>Conmutadores telefónicos</li>
              <li>Cctv-digitales</li>
              <li>Cableado estructurado</li>
              <li>Redes inalámbricas</li>
              <li>Correo de voz</li>
              <li>Voz IP</li>
              <li>Biométricos</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Tarificadores</li>
              <li>CCTV-IP</li>
              <li>Mantenimieto de equipos de computo</li>
              <li>Equipos y Consumibles</li>
              <li>Puntos de venta para negocios</li>
              <li>Video vigilancia</li>
              <li>Redes</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Seguridad de redes</li>
              <li>Tierra física</li>
              <li>Fibra óptica</li>
              <li>Switch</li>
              <li>Alarmas residenciales</li>
              <li>Instalación de tubería</li>
              <li>Routers</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Info;