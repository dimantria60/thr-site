import * as React from 'react';
import HeaderBar from '../components/header-bar/header-bar.component';
import DarkBar from '../components/dark-bar/dark-bar.component';
import FooterComponent from '../components/footer-content/footer.component';
import ContentVideo from '../components/content-video/content-video.component';
import THRVideo from '../videos/THRWORK.mp4'
import Facebook from '../videos/Facebook.mp4'

const AboutPage = () => {
  return (
    <main>
      <header>
        <DarkBar></DarkBar>
        <HeaderBar></HeaderBar>

      </header>
      <section className="container">
        <h1 className="text-center text-primary">Sobre nuestro trabajo en THR</h1>
        <ContentVideo
          videoSrcURL={Facebook}
          videoTittle='Venta e instalación en equipos de Video Vigilancia y Alarma Vecinal'
          videoDescription='Calidad y tecnología en sistemas de Video Vigilancia como también lo más nuevo en Alarma Vecinal y con el mejor soporte técnico.'
        />
        <br />
        <hr />
        <ContentVideo
          videoSrcURL={THRVideo}
          videoTittle='THR a su servicio'
          videoDescription='En THR ofrecemos a nuestro clientes la mejor calidad en nuestras reparaciones'
        />
        <br />
        <hr />

      </section>

      <footer>
        <FooterComponent />
      </footer>
    </main>
  )
}
export default AboutPage