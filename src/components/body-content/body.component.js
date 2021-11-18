import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SectionProducts from '../products/products.component';
import Slider from '../slider/slider.component';
import { imagesContainer } from './body.module.css'

const BodyLayout = () => {
  return (
    <>
      <Slider />
      <SectionProducts />

      <StaticImage className={imagesContainer} src="../../images/slidemid.jpg" alt="camera" />

      <StaticImage className={imagesContainer} src="../../images/slidemidgamer.png" alt="camera" />
    </>
  )
}

export default BodyLayout;