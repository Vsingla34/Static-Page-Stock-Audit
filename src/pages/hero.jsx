export default function Hero() {
  return (
    <div 
    className="bg-white"
    id="home"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-35 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Audit Smarter Deliver Faster.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:mt-6 sm:text-xl">
             StockCheck360 is a next-generation Stock Audit Software for Chartered Accountants, designed to bring automation.
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700"
              >
                Book a Demo
              </a>
            </div>
           
          </div>
          
          {/* Right Side: Image/Animation Placeholder */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[Automated bookkeeping process graphic]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}