import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { container, slideContainer } from './carrusel.module.css';

const Carrousel = () => {
	return (
		<div className={slideContainer}>
			<h2>Clientes de THR</h2>
			<div className={container}>
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
							<StaticImage src="../../images/logocliente1.png" className="d-block w-100" alt="..." />
						</div>
						<div className="carousel-item">
							<StaticImage src="../../images/logocliente4.png" className="d-block w-100" alt="..." />
						</div>
						<div className="carousel-item">
							<StaticImage src="../../images/logocliente2.jpg" className="d-block w-100" alt="..." />
						</div>
						<div className="carousel-item">
							<StaticImage src="../../images/logocliente5.jpg" className="d-block w-100" alt="..." />
						</div>
						<div className="carousel-item">
							<StaticImage src="../../images/logocliente3.jpg" className="d-block w-100" alt="..." />
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
	);
};

export default Carrousel;
