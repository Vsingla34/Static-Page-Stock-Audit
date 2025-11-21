import './App.css';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Hero from './pages/hero';
import TrustedBy from './components/TrustedBy';
import ValueProp from './components/ValuProp';
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import CTA from './components/CTA';

function App() {
 
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          <TrustedBy />
          <ValueProp />
          <Features />
          <Testimonials/>
          <CTA/>
        </main>
        <Footer/>
      </div>
    </ReactLenis>
  );
}

export default App;