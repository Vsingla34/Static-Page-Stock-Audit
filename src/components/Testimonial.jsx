import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import required modules
import { Navigation } from 'swiper/modules';

// --- IMPORT THE NEW ICON ---
import { Quote } from 'lucide-react'; // Import the Quote icon

// Placeholder data for testimonials
const reviews = [
  {
    quote: "Switching to Febi was one of the best decisions I've made for my business. Their 30-minute migration process made the transition painless, and I haven't looked back since.",
    author: 'Rajat Jain',
    title: 'Founder Director at Padup Ventures'
  },
  {
    quote: "Much of my operation is on the move, and I use WhatsApp and email extensively for almost everything, including uploading my invoices. Earlier, it was a nightmare, but the moment we started using Febi, I could upload my invoices on the go.",
    author: 'Pankaj Thakar',
    title: 'Founder & Chief Mentor at Padup Ventures'
  },
  {
    quote: "I've been using Febi for about a year since its pilot stage. Although our current data load is minimal, I'm confident the tool can scale with our future needs. The team is able to customise our specifications.",
    author: 'Chetan Rana',
    title: 'CFO, Titan Capital Winners Fund'
  },
  {
    quote: "Another great testimonial! Febi has saved us countless hours in manual data entry, allowing us to focus on growing our core business. The AI-powered insights are a game-changer.",
    author: 'Jane Doe',
    title: 'CEO, Tech Innovations'
  }
];

// --- WE NO LONGER NEED THE OLD QuoteIcon() FUNCTION ---
// (It has been deleted)

// The main Testimonials component
export default function Testimonials() {
  return (
    <div 
    id='insights'
    className="bg-white py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say About Us
          </h2>
        </div>

        <div className="mt-16 relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-4 !px-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="bg-emerald-50 rounded-2xl p-8 flex flex-col h-full shadow-sm">
                  <div className="flex-shrink-0">
                    {/* --- USE THE NEW ICON HERE --- */}
                    {/* We set the fill and stroke to the same color to make it solid */}
                    <Quote
                      className="w-16 h-16 text-teal-400 fill-teal-400"
                      strokeWidth={1} 
                    />
                  </div>
                  <blockquote className="mt-6 flex-grow">
                    <p className="text-gray-700 text-base">
                      {review.quote}
                    </p>
                  </blockquote>
                  <footer className="mt-6">
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-gray-600 text-sm">{review.title}</div>
                  </footer>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows (remain the same) */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}