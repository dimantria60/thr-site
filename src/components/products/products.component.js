import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sProducts } from './products.module.css';

const SectionProducts = () => {
  return (
    <section className={sProducts}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/product1.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Control Gaming Acteck X</h5>
              <p className="card-text">OPTIMIZA TU JUEGO A UN NIVEL QUE NUNCA IMAGINASTE Controla con todos los comandos necesarios para lograr una partida perfecta.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/product2.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Teclado Gaming Ocelot</h5>
              <p className="card-text">Tecnología de membrana que otorgará la mejor precisión con el menor ruido posible. Para esas sesiones de juego que se extienden hasta la noche.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/product3.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Teclado mecánico</h5>
              <p className="card-text">Funcionamiento mecánico: Tecnología de switch azul que permite un retroceso suave en las teclas, otorgando ese sonido fuerte que te hará estar seguro de que si esquivaste esa kill.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/product7.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Laptop Ghia</h5>
              <p className="card-text">Tecnología Intel: Cuenta con procesador Intel Celeron N4020. Te permitirá hacer tu trabajo y tareas de forma sencilla.
                Pantalla estándar: Sus 14.1" pulgadas de pantalla lo vuelven una opción ideal para llevarla a todos lados.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/product5.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Headsets Gamer Ocelot</h5>
              <p className="card-text">𝗔𝗷𝘂𝘀𝘁𝗲 𝗲𝗿𝗴𝗼𝗻𝗼́𝗺𝗶𝗰𝗼: Diseñados para utilizarse durante jornadas de juego prolongadas, por lo que no sufrirás de molestias mientras juegas.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/product6.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet Samsung Galaxy A7 Lite</h5>
              <p className="card-text">Tab A7 Lite te brinda estilo y conveniencia en una pantalla de 8.7 pulgadas. Disfruta de películas y videos en su diseño con biseles delgados que optimizan el espacio de pantalla y un sonido stereo Dolby Atmos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProducts;