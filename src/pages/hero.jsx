export default function Hero() {
  return (
    <div 
    className="bg-white"
    id="home"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-28 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Beyond Bookkeeping</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:mt-6 sm:text-xl">
              India's first AI-powered bookkeeping – Automated tax compliances – Real time business insights.
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700"
              >
                Book a Demo
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-500">Trusted by 100+ Businesses</p>
              {/* Placeholder for trusted-by logos */}
              <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                <span className="text-gray-400">Logo1</span>
                <span className="text-gray-400">Logo2</span>
                <span className="text-gray-400">Logo3</span>
              </div>
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