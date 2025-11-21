import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from "../../../public/First.png"; // Your logo icon

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Features', to: 'features' },
  { name: 'Insights', to: 'insights' },
  { name: 'Contact Us', to: 'contactUs' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Use Framer Motion's hook for performant scroll detection
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // 1. Manage Shadow State
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }

    // 2. Manage Hide/Show Animation
    // Hide if scrolling down AND past 150px AND mobile menu is closed
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollProps = {
    spy: true,
    smooth: true,
    duration: 600,
    offset: -80,
    activeClass: "text-indigo-600 font-semibold",
    onClick: () => isMobileMenuOpen && setIsMobileMenuOpen(false),
  };

  const desktopLinkClasses = "relative text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 text-base cursor-pointer transition-colors duration-200 ease-in-out group";

  // Animation variants for the Navbar itself
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="inline-block cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <img
                className='h-15 w-auto'
                src={logo}
                alt="StockCheck360 Logo"
              />
            </ScrollLink>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex md:items-center md:space-x-7">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                {...scrollProps}
                className={desktopLinkClasses}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
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

      {/* --- MOBILE MENU (Framer Motion Animation) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  transition={{ delay: i * 0.05 }}
                >
                  <ScrollLink
                    to={item.to}
                    {...scrollProps}
                    className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    {item.name}
                  </ScrollLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}