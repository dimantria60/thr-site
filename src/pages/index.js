import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layaut';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <h1>Thr Header</h1>
        <Link to="/about">About</Link>
        <StaticImage
        alt="logo"
        src="../images/logo.png"
      /> 
      </Layout>
    </div>
  )
}

export default IndexPage;
