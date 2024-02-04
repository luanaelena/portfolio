import React from 'react';
import Navbar from '../navbar/Navbar';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}
