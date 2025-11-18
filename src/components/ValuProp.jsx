export default function ValueProp() {
  return (
    <div 
    id="about"
    className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark container with large rounded corners */}
        <div className="bg-teal-900 rounded-3xl p-12 sm:p-16 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
                Service Dependency
                <br />
                to Service
                <br />
                Independency
              </h2>
            </div>
            
            {/* Right Column: Text and Button */}
            <div className="space-y-6">
              <p className="text-lg text-teal-100 opacity-90">
                With Febi, quit relying on any additional software or hiring
                more staff for your finances. Febi's cutting-edge AI/ML
                platform, coupled with our team of seasoned domain experts
                including CAs and personal accountants, ensures seamless
                management of all your accounting, tax compliance and
                finance operations in real-time.
              </p>
              <p className="text-lg text-teal-100 opacity-90">
                Leverage our dedicated personal accountant for strategic
                financial guidance and support. Experience the freedom of
                focusing on your core business while Febi takes care of
                your financial intricacies.
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