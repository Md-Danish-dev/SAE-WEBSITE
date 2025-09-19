// src/pages/AboutPage.jsx
import React from 'react';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Gallery from './components/Gallery';
import Culture from './components/Culture';
import Offerings from './components/Offerings';
import Footer from '../footer/footer';

const AboutPage = () => {
  return (
    <main className='bg-black'>
      <Hero />
      <Vision />
      <Gallery />
      <Culture />
      <Offerings />
      <Footer />
    </main>
  );
};

export default AboutPage;