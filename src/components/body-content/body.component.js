
import * as React from 'react';
import SectionProducts from '../products/products.component';
import Slider from '../slider/slider.component';
import Info from '../info-content/info.component';

const BodyLayout = () => {
  return (
    <>
      <Slider />

      <SectionProducts />
      <Info />
      {/* <StaticImage className={imagesContainer} src="../../images/slidemid.jpg" alt="camera" />

      <StaticImage className={imagesContainer} src="../../images/slidemidgamer.png" alt="camera" /> */}
    </>
  )
}

export default BodyLayout;