import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Hero from './pages/hero';
import TrustedBy from './components/TrustedBy';
import ValueProp from './components/ValuProp';
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import CTA from './components/CTA';


function App() {
  return (
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
  );
}

export default App;