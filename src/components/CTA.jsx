import React from 'react';

export default function CTA() {
  return (
    <div 
    id='contactUs'
    className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Graphic Placeholder */}
          <div className="hidden lg:block">
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-gray-500 font-medium">
                [Illustration Placeholder]
              </span>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Get Ready to Maximise
              <br />
              Your Productivity With
              <br />
              <span className="text-teal-500">Febi.AI</span>
            </h2>
            
            <form action="#" method="POST" className="mt-10 space-y-6">
              {/* Grid for first 4 fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    placeholder="Name *"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-1 outline-emerald-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="Email *"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-1 outline-emerald-400"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    placeholder="Company"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-1 outline-emerald-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="Phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-1 outline-emerald-400"
                  />
                </div>
              </div>
              
              {/* Textarea */}
              <div>
                <label htmlFor="comments" className="sr-only">Comments or questions</label>
                <textarea
                  name="comments"
                  id="comments"
                  rows={4}
                  placeholder="Enter your comments or questions"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-1 outline-emerald-400"
                />
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3 bg-teal-500 text-white font-medium rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}