import React from 'react';
import './navbar.css'

export default function Navbar() {
  return (
    <div>
        <div className='nav'>
        <a id='title' href="/">luanaB</a>

        <nav className='nav-elements'>
            <a id='about-element' href="#about">about me</a>
            <a id='projects-element' href="#projects">my work</a>
            <a id='contact-element' href="#contact">contact</a>
        </nav>
        </div>

        <section id='hero-section'>
            <p>Hi, my name is Luana.</p>
            <p>Front-end developer. <span id='pink-text'>Woman in STEM.</span></p>
        </section>

    </div>
    
  )
}