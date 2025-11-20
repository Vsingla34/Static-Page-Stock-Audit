import { motion } from 'framer-motion'; 
import Laptop from "../../public/Laptop.png"

export default function Hero() {
  // Animation variants for the text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } },
  };

  // Animation variants for the image/graphic
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <div
      className="bg-white overflow-hidden" // Added overflow-hidden to prevent scrollbars if image scales too much
      id="home"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8">
        {/* CHANGE 1: Changed 'items-center' to 'items-start'. 
            This aligns both columns to the top, allowing us to push the image down manually.
        */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left lg:pt-10"> {/* Added pt-10 to give text a little breathing room from absolute top */}
            <motion.h1
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              variants={textVariants} 
              initial="hidden"      
              animate="visible"     
            >
              <span className="block xl:inline">Audit Smarter Deliver Faster.</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-lg text-gray-600 sm:mt-6 sm:text-xl"
              variants={textVariants} 
              initial="hidden"
              animate="visible"
              transition={{ ...textVariants.visible.transition, delay: 0.2 }} 
            >
              <span
                className="bg-indigo-600 text-transparent bg-clip-text font-bold"
              >StockCheck360</span> is a next-generation Stock Audit Software for Chartered Accountants, designed to bring <span
                className="bg-indigo-600 text-transparent bg-clip-text font-bold "
              >automation</span>, <span
                className="bg-indigo-600 text-transparent bg-clip-text font-bold "
              >accuracy</span>, and <span
                className="bg-indigo-600 text-transparent bg-clip-text font-bold "
              >real-time control</span> to every audit assignment.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-10"
              variants={buttonVariants} 
              initial="hidden"
              animate="visible"
            >
              <a
                href="#"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Book a Demo
              </a>
            </motion.div>

          </div>

          {/* Right Side: Image */}
          <motion.div
            /* CHANGE 2: Added 'lg:mt-32'.
               This pushes the image down significantly from the top, creating the 
               misaligned look relative to the text.
            */
            className="mt-12 lg:mt-32 relative" 
            variants={imageVariants} 
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-center relative">
                {/* CHANGE 3: Increased scale to 'lg:scale-150' to make it huge.
                    Removed 'top-1/4' as we are using margin on the parent div now.
                */}
                <img 
                    src={Laptop} 
                    alt="laptop with software" 
                    className="w-full h-auto max-w-none transform md:scale-110 lg:scale-150 drop-shadow-2xl" 
                />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}