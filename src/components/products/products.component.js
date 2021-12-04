import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sProducts } from './products.module.css';

const SectionProducts = () => {
  return (
    <section className={sProducts}>
      <h1> Artículos Gamer</h1>
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
      <h1> Consumibles</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/impresora.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Botella de tinta de Brother Negra</h5>
              <p className="card-text">La tinta Brother está especialmente formulada para lograr la fluidez adecuada para fluir a través de puntos críticos del cabezal de impresión con facilidad. Esto garantiza una distribución equilibrada de la tinta en la página, lo que resulta en un equilibrio de colores más óptimo.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/impresora1.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Botella de tinta de Brother Magenta</h5>
              <p className="card-text">Ultrarendimiento

                Consigue hasta 5000 páginas impresas

                Ideal para usar en modelos DCP-T300, DCP-T500W, DCP-T700W y MFC-T800W</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/impresora2.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Botella tinta de Brother Amarillo</h5>
              <p className="card-text">Las tintas originales Brother forman parte de un sistema completo de impresión diseñado para funcionar perfectamente con nuestros multifuncionales de inyección de tinta continua InkBenefit Tank. Los consumibles originales Brother te ayudarán a imprimir más páginas con una alta calidad.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/impresora3.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Botella tinta de Brother Negra</h5>
              <p className="card-text">La Botella de Tinta Brother te brinda alto rendimiento y negros profundos en cada impresión al usarla en tu equipo Brother. Está diseñada para lograr impresiones nítidas y uniformes, aun en escala de grises.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/impresora4.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cartucho Epson</h5>
              <p className="card-text">Calidad de impresión garantizada con la tinta original Epson</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/impresora5.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Botella tinta de Brother Cyan</h5>
              <p className="card-text">BOTELLA DE TINTA BROTHER BT5001C CYAN 5,000 PAGINAS Tecnología de impresión: inyección de tinta
                Colores de impresión: Cian
                Rendimiento de impresión: 5000 páginas</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Artículos Electrónicos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/laptop.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Portátil GHIA LIBERO</h5>
              <p className="card-text">Con la nueva linea de portatiles libero obtienes versatilidad y rendimiento con un excelente precio. su procesador intel celeron y su configuracion de memoria integrada 4g/64g te dan la velocidad que necesitas sin pagar de mas</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/laptop1.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Portátil Asus Chromebook</h5>
              <p className="card-text">ASUS Chromebook funciona con Chrome OS, el sistema operativo rápido, simple y seguro de Google. Con una batería que dura todo el día y seguridad incorporada, siempre está al día con actualizaciones automáticas. ¡ASUS Chromebook es simplemente la mejor laptop para todos!</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/laptop2.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Portátil Acer Aspire</h5>
              <p className="card-text">Laptop Acer Aspire 3 A315-34-C1F5 15.6" Intel Celeron N4020 Disco duro 500 GB Ram 4 GB Windows 10 Home Color Negro</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/laptop4.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Notebook Comercial HP</h5>
              <p className="card-text">La laptop HP 240 G7 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/laptop3.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Portátil GHIA LIBERO</h5>
              <p className="card-text">Con la nueva linea de portatiles libero obtienes versatilidad y rendimiento con un excelente precio. su procesador intel celeron y su configuracion de memoria integrada 4g/64g te dan la velocidad que necesitas sin pagar de mas</p>
            </div>
          </div>
        </div>
        
      </div>
      <h1>Artículos Móviles</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/movil1.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet GHIA 10.1</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/movil2.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet Lenovo Think</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/movil3.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet GHIA A7 Plus</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/movil4.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet GHIA 10.1</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/movil5.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet Lenovo TB-X505L</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <StaticImage src="../../images/movil.jpg" className="card-StaticImage-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tablet GHIA 7 TODDLER</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProducts;