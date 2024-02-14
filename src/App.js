import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/projects' Component={Projects}/>
      </Routes>
    </Router>
  );
}

export default App;
