import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-carbon text-oat selection:bg-accent/40 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <PortfolioCarousel />
      <Contact />
    </div>
  )
}

export default App;
