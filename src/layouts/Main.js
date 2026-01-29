import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Skills from '../components/Skill';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
  scrollbar-width: none;

`;

export default function Main() {
  return (
    <MainWrapper>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Resume />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </MainWrapper>
  )
}
