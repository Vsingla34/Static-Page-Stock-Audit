import { useState } from 'react';
// Import Link from react-scroll
import { Link as ScrollLink } from 'react-scroll';
// Import icons for the mobile menu
import { Menu, X, ArrowRight } from 'lucide-react'; 
import Logo from '../logo/Logo';


// Data for navigation links
const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Features', to: 'features' },
  { name: 'Insights', to: 'insights' },
  { name: 'Partners', to: 'partners' },
];

export default function Navbar() {
  // State to manage if the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Common props for all scroll links
  const scrollProps = {
    spy: true,
    smooth: true,
    duration: 600,
    offset: -80, // Adjusts for the navbar height
    activeClass: "text-indigo-600 font-semibold",
  };

  // Shared styles for desktop links for a clean code structure
  const desktopLinkClasses = "relative text-gray-600 hover:text-indigo-600 font-medium px-3 py-2 text-base cursor-pointer transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full";

  return (
    // Main Container: Fixed, Glassmorphism effect
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* --- LOGO SECTION (Perfectly Aligned) --- */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              // FIX: 'flex items-center' centers vertical, 'gap-2' handles spacing
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Logo/>
            </ScrollLink>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                {...scrollProps}
                className={desktopLinkClasses}
              >
                {item.name}
              </ScrollLink>
            ))}

            {/* Career Link (External) */}
          

            {/* CTA Button */}
            
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (Slide Down Animation) --- */}
      <div 
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              {...scrollProps}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          
          <div className="border-t border-gray-100 my-2 pt-2">
            
           
          </div>
        </div>
      </div>
    </nav>
  );
}