import React from 'react';
// Make sure to adjust this path to where your actual image is located
import logoIcon from '../../../public/First.png'; 

const Logo = () => {
  return (
    <div className="flex items-center gap-3 select-none cursor-pointer group relative">
      
      {/* Icon Section */}
      <img 
        src={logoIcon} 
        alt="StockCheck360 Logo" 
        // h-10 (40px) usually balances perfectly with text-3xl
        className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
      />

      {/* Text Section */}
      <div className="font-extrabold text-2xl md:text-3xl tracking-tight text-gray-800 leading-none absolute left-35">
        StockCheck
        {/* Using the specific purple hex code to match your brand image */}
        <span className=" bg-clip-text text-transparent bg-indigo-600">360</span>
      </div>

    </div>
  );
}

export default Logo;