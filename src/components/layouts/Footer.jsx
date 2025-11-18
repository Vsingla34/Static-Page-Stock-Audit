import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube, Book } from 'lucide-react';

// Data for the links
const resources = [
  { name: 'FAQs', href: '#' },
  { name: 'Glossary', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy & Security', href: '#' },
  { name: 'Licenses & Certifications', href: '#' },
  { name: 'IT Security Policy', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Youtube, href: '#', name: 'YouTube' },
  { icon: Book, href: '#', name: 'Medium' }, // Using Book for Medium
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300"> {/* Using dark bg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Contact & Address */}
          <div className="space-y-6">
            <a href="#" className="text-3xl font-bold text-white">Febi.ai</a>
            <div>
              <h4 className="font-semibold text-white mb-2">Contact</h4>
              <ul className="space-y-1 text-sm">
                <li>info@febi.ai</li> {/* */}
                <li>9266700901</li> {/* */}
                <li>9266700902</li> {/* */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Address</h4>
              <p className="text-sm">
                45 Arjun Marg, DLF Phase I<br />
                Gurgaon -122002
              </p> {/* */}
            </div>
          </div>
          
          {/* Column 2: Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Follow (Newsletter) */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to stay updated on our latest
              features releases and industry trends.
            </p> {/* */}
            <form action="#" className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input
                type="email"
                id="email-address"
                autoComplete="email"
                required
                className="w-full px-4 py-2 rounded-md bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Email"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-slate-900 font-medium rounded-md hover:bg-gray-200 transition-colors flex-shrink-0"
              >
                Subscribe
              </button> {/* */}
            </form>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; 2024 Febi.ai. All rights reserved.</p>
          <p className="mt-1">This is a clone for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}