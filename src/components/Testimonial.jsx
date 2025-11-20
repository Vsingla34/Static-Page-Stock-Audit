import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import required modules
import { Navigation } from 'swiper/modules';

// Import icons
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder data for testimonials
const reviews = [
  {
    quote: "Purpose-built for Indian Chartered Accountant firms, StockCheck360 ensures accuracy in every stock audit process aligned with ICAI guidelines and statutory reporting formats.",
    title: 'Uncompromised Accuracy'
  },
  {
    quote: "Firms using StockCheck360 report up to 40% faster audit cycles. The automation engine eliminates redundant steps and allows partners to focus on review, insights, and client satisfaction.",
    title: 'Time Saved, Productivity Multiplied'
  },
  {
    quote: "Modern audits are team-driven. StockCheck360 centralizes audit files, communications, and approvals — ensuring your entire team works in sync, even across multiple branches or clients.",
    title: 'Collaboration that Scales'
  },
  {
    quote: "Whether you handle 10 audits or 100+, StockCheck360 scales effortlessly. It’s cloud-ready, secure, and optimized for high data volumes perfect for fast-growing CA practices.",
    title: 'Scalable for Growth'
  }
];

export default function Testimonials() {
  return (
    <div 
      id='insights'
      className="bg-white py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Why choose StockCheck<span className='bg-indigo-600 bg-clip-text text-transparent'>360</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Empowering Chartered Accountants with next-gen tools for smarter audits.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="!pb-12 !px-4"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group h-full bg-violet-200 rounded-[2rem] p-8 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  
                  {/* Decorative Background Icon (Watermark style) */}
                  <div className="absolute -top-4 -right-4 opacity-40 rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                    <Quote 
                      className="w-32 h-32 text-white fill-white" 
                      strokeWidth={0}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Title First (Modern Hierarchy) */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 pr-8">
                      {review.title}
                    </h3>

                    {/* Quote Text */}
                    <p className="text-gray-700 text-base leading-relaxed flex-grow">
                      {review.quote}
                    </p>

                    {/* Optional: Small visual anchor at bottom */}
                    <div className="mt-6 pt-6 border-t border-violet-300/50 flex items-center">
                       <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modern Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-prev-custom group flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-indigo-50 hover:border-indigo-100 transition-all duration-200 focus:outline-none active:scale-95">
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
            </button>
            <button className="swiper-button-next-custom group flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-indigo-50 hover:border-indigo-100 transition-all duration-200 focus:outline-none active:scale-95">
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}