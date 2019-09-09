import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
     <Header />
     <About />
     <Gallery />
     <Contact />
    </div>
  );
}

export default App;
