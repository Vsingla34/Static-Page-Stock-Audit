export default function ValueProp() {
  return (
    <div 
    id="about"
    className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark container with large rounded corners */}
        <div className="bg-indigo-800 rounded-3xl p-12 sm:p-16 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center ">
            
            {/* Left Column: Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
                Experience a New Standard of Stock Audit Management
              </h2>
            </div>
            
            {/* Right Column: Text and Button */}
            <div className="space-y-6">
              <p className="text-lg text-white opacity-90">
               Say goodbye to Excel chaos and version confusion. With StockCheck360’s Stock Audit Automation Tool, every data entry is secure, traceable, and permanent. Once entered, figures can’t be reset or marked pending, ensuring absolute data integrity and audit reliability. The platform’s built-in automation instantly generates <span className="font-bold">ICAI-compliant stock audit reports</span>, eliminating manual compilation and formatting errors.

              </p>
              <p className="text-lg text-white opacity-90">
               Designed for ease of use, StockCheck360 offers a clean, user-friendly interface  perfect for partners, managers, and article assistants alike. Seamless collaboration between Admins and Stock Auditors ensures transparency, faster reviews, and end-to-end audit control, from planning to reporting.

              </p>
              
              {/* Button */}
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-block px-8 py-3 bg-white text-teal-900 font-medium rounded-md shadow-md hover:bg-gray-100 transition-colors"
                >
                  Book a Demo
                </a>
                {/* Note: The button in the screenshot is slightly different,
                    but this provides the same function and fits the theme.
                */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}