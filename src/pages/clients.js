import * as React from 'react';
import Carrousel from '../components/carrusel/carrusel.component'
import { StaticImage } from 'gatsby-plugin-image';
import HeaderBar from '../components/header-bar/header-bar.component';
import DarkBar from '../components/dark-bar/dark-bar.component';
import BodyLayout from '../components/body-content/body.component';
import FooterComponent from '../components/footer-content/footer.component';

// markup
const ClientPage = () => {
  return (
    <>
      <header>
        <DarkBar></DarkBar>
        <HeaderBar></HeaderBar>

      </header>
      <section>
        <div>
          <Carrousel />
        </div>
      </section>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default ClientPage;
