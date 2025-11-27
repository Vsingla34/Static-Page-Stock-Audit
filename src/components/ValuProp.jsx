import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {Link as ScrollLink} from "react-scroll"

export default function ValueProp() {
  return (
    <div 
      id="about"
      className="bg-white py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Container with Deep Gradient */}
        <div className="relative bg-gradient-to-br from-indigo-900 to-violet-900 rounded-[2.5rem] p-10 sm:p-16 lg:p-24 overflow-hidden shadow-2xl isolate">
          
          {/* Decorative Background Glows */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[64px] opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-[64px] opacity-40 animate-blob animation-delay-2000"></div>
          
          {/* Grid Layout */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
            
            {/* Left Column: Heading */}
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-100 bg-indigo-800/50 border border-indigo-700 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                Audit Management Redefined
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Experience a <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-indigo-200">New Standard</span> <br className="hidden lg:block" />
                of Stock Audits
              </h2>
            </div>
            
            {/* Right Column: Text and Button */}
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-indigo-100 leading-relaxed">
                <p>
                  Say goodbye to Excel chaos and version confusion. With StockCheck360’s Stock Audit Automation Tool, every data entry is <span className="text-white font-semibold">secure, traceable, and permanent</span>. Once entered, figures can’t be reset or marked pending, ensuring absolute data integrity.
                </p>
                <p>
                  The platform’s built-in automation instantly generates <span className="text-teal-300 font-medium">ICAI-compliant stock audit reports</span>, eliminating manual compilation and formatting errors.
                </p>
                <p className="text-base opacity-80 border-l-2 border-indigo-500 pl-4">
                  Designed for ease of use, our clean interface is perfect for partners, managers, and article assistants alike—ensuring transparency and faster reviews from planning to reporting.
                </p>
              </div>
              
              {/* Button */}
              <div className="pt-4">
                <ScrollLink
                  to="contactUs"
                  smooth={true}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-bold text-lg rounded-xl shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </ScrollLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}