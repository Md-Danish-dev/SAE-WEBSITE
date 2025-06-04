import React from 'react';
import WhatWeDo from '../components/what-we-do/what-we-do';
import NavBar from '../components/navbar/navbar';
import Culture from '../components/culture/culture';
import Gallery from '../components/gallery/gallery';
import Footer from '../components/footer/footer';

const About = () => {
  return (
    <div>
      <NavBar />
      <WhatWeDo />
      <Gallery />
      <Culture />
      <Footer />
    </div>
  );
};

export default About;