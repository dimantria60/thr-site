import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sProducts } from './products.module.css';

const SectionProducts = () => {
  return (
    <section className={sProducts}>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <StaticImage src="../../images/product1.jpg" class="card-StaticImage-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Control Gaming</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <StaticImage src="../../images/product2.jpg" class="card-StaticImage-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Teclado Gaming</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <StaticImage src="../../images/product3.jpg" class="card-StaticImage-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Teclado mecánico</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <StaticImage src="../../images/product7.jpg" class="card-StaticImage-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Laptop Ghia</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <StaticImage src="../../images/product5.jpg" class="card-StaticImage-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tablet Samsung Galaxy</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <StaticImage src="../../images/product6.jpg" class="card-StaticImage-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProducts;