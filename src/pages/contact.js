import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import HeaderBar from '../components/header-bar/header-bar.component';
import DarkBar from '../components/dark-bar/dark-bar.component';
import BodyLayout from '../components/body-content/body.component';
import FooterComponent from '../components/footer-content/footer.component';
import Map from '../components/map-content/map.component';

// markup
const ContactPage = () => {
  return (
    <>
      <header>
        <DarkBar></DarkBar>
        <HeaderBar></HeaderBar>

      </header>
      <section>
        <div className="container">
          <Map></Map>
        </div>
      </section>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default ContactPage;
