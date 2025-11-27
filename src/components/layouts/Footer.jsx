import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import logo from "../../../public/First.png"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* Logo Placeholder - using ShieldCheck to avoid broken image links */}
             
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The comprehensive stock audit solution designed for Chartered Accountants. Automate inventory verification, eliminate errors, and generate reports in minutes.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Platform</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Features', 'Request Demo'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}   
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-indigo-500 mt-0.5 group-hover:text-indigo-400 transition-colors" />
                          <span>
             FF-05, Plot No. 20, Block H1/A, 

Sector 63 Noida, Gautam Buddha Nagar, Noida, 

Uttar Pradesh 201301, India <br />
            
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                <a href="mailto:info@stockcheck360.com" className="group-hover:text-white transition-colors">
                  info.stockcheck360@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">+91 88608 83031</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Stay Updated</h4>
            <p className="text-sm mb-4 text-slate-400">
              Subscribe to get the latest audit regulations and feature updates.
            </p>
            
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-500"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 top-1.5 p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} StockCheck360. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}