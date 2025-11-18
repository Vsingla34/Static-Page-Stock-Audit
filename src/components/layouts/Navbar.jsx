import { useState } from 'react';
// Import Link from react-scroll
import { Link as ScrollLink } from 'react-scroll';
// Import icons for the mobile menu
import { Menu, X, ArrowRight } from 'lucide-react'; // Added ArrowRight for the button

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
    spy: true, // Highlights the link when its section is in view
    smooth: true, // Enables smooth scrolling animation
    duration: 600, // Slightly longer duration for a smoother feel
    offset: -80, // Offset from the top (to account for the sticky navbar height)
    activeClass: "font-semibold text-indigo-600 border-b-2 border-indigo-600", // More prominent active state
  };

  const desktopLinkClasses = "relative text-gray-700 font-medium px-3 py-2 text-base cursor-pointer transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full";

  return (
    // Updated Nav: sticky, glassmorphism-like effect with backdrop blur, light shadow
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height for a more premium look */}

          {/* Logo (Scroll link to the top) */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-4xl font-extrabold cursor-pointer tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              Febi.ai
            </ScrollLink>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                {...scrollProps}
                // Applied the new underline hover effect
                className={desktopLinkClasses}
              >
                {item.name}
              </ScrollLink>
            ))}
            
            {/* Career Link (still external) */}
           

            {/* Modern Desktop Sign In/CTA Button */}
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle state
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
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

      {/* Mobile Menu - Added slide-down animation for smoothness */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 border-t border-gray-200">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              {...scrollProps}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 block px-3 py-2 rounded-lg text-base font-medium cursor-pointer transition duration-150 ease-in-out"
            >
              {item.name}
            </ScrollLink>
          ))}
         
        
        </div>
      </div>
    </nav>
  );
}