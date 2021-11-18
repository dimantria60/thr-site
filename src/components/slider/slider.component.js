import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { imgContainer, container } from './slider.module.css';

const Slider = () => {
  return (
    <div>
      <div >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <StaticImage src="../../images/cover.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <StaticImage src="../../images/cover2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <StaticImage src="../../images/cover3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <StaticImage src="../../images/cover4.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <StaticImage src="../../images/cover3.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider;