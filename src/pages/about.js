import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image';
import HeaderBar from '../components/header-bar/header-bar.component';
import DarkBar from '../components/dark-bar/dark-bar.component';
import BodyLayout from '../components/body-content/body.component';
import FooterComponent from '../components/footer-content/footer.component';

const AboutPage = () => {
  return (
    <main>
      <header>
        <DarkBar></DarkBar>
        <HeaderBar></HeaderBar>

      </header>
      <section>
        <h1>Contenido de página de acerca de</h1>
      </section>

      <footer>
        <FooterComponent />
      </footer>
    </main>
  )
}
export default AboutPage