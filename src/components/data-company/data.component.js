import * as React from 'react';
import { containBlue, textJustify, box } from './data.module.css';

const DataCompany = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className={box}>
              <h1 className={containBlue}>Misión</h1>
              <p className={textJustify}>Somos una empresa seria dedicada a comercializar e instalar equipos confiables y de calidad.
                Buscamos solucionar las necesidades de nuestros clientes basándonos en nuestras capacidades y en la
                innovación tecnológica, teniendo amplio stock y talento humano"</p>
            </div>

          </div>
          <div className="col-md-4">
            <div className={box}>
              <h1 className={containBlue}>Visión</h1>
              <p className={textJustify}>Ser reconocidos como la mejor empresa de servicios y equipos tecnológicos</p>
            </div>

          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-8">
            <div className={box}>
              <h1 className={containBlue}>Filosofía</h1>
              <p className={textJustify}>El trabajo, constancia, honestidad y disciplina es el factor del éxito de nuestra empresa. Somos una empresa que
                nos esforzamos día a día para dar a nuestros clientes lo mejor de nosotros a fin de brindarle una buena y cordial
                atención para de esta manera cubrir sus necesidades dentro del rubro en el cual nos hemos desarrollado.
                Estamos dispuestos a emplear todo nuestro potencial, conocimiento y calidad para cumplir nuestros objetivos</p>
            </div>

          </div>
          <div className="col-md-4">
            <div className={box}>
              <h1 className={containBlue}>Valores</h1>
              <div className={textJustify}>
                <ul>
                  <li>Honestidad</li>
                  <li>Responsabilidad</li>
                  <li>Puntualidad</li>
                  <li>Integridad</li>
                  <li>Compromiso y entrega</li>
                  <li>Trabajo en equipo</li>
                  <li>Innovación y apertura</li>
                </ul>
              </div>

            </div>


          </div>
        </div>


      </div>
    </div>
  )
}

export default DataCompany;