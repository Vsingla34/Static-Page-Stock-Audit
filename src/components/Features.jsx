import React from 'react';
// Using PackageCheck as a placeholder for feature icons
import { PackageCheck, Image as ImagePlaceholder } from 'lucide-react'; 

// All the feature data extracted from your screenshots
const featuresData = [
  {
    title: 'Transaction Management Through AI',
    description: "Experience unparalleled ease with automated transaction categorisation into expenses and revenues, verified by a personal bookkeeper for account accuracy in real time. Access business insights, Balance Sheet, P&L, and Cash Flow Statements.",
  },
  {
    title: 'Automated File Management',
    description: "Upload or share your documents, and watch as our system instantly creates and organises files and folders. No hassle, no fuss–just seamless organisation. Enjoy automated renaming for clarity and timely reminders for any outstanding documents.",
  },
  {
    title: 'Automated Tax Filings',
    description: "Let your personal bookkeeper handle it all—prepares and files tax returns, including GST and TDS. Tax fillings are supported and verified by our team of domain experts, so you can focus on what matters most.",
  },
  {
    title: 'Smart Invoicing and Payments',
    description: "With just a few key details, our smart invoicing feature generates invoices for you in a snap. Plus, our payment surveillance and automatic reminders ensure you stay on top of your finances effortlessly.",
  },
  {
    title: 'Finance Concierge',
    description: "Get a dedicated personal accountant, ready to assist with all your bookkeeping and compliance needs. Connect through a call button on a personalised dashboard or chat for support.",
  }
];

// This is a new, reusable component for the image placeholder
function FeatureImagePlaceholder() {
  return (
    <div 
    id='features'
    className="flex items-center justify-center h-80 w-full bg-gray-100 rounded-2xl">
      <ImagePlaceholder className="w-24 h-24 text-gray-400" />
    </div>
  );
}

export default function Features() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Platform Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What Makes Febi a One-Stop Solution for all Entrepreneurs
          </p>
        </div>

        {/* Features List */}
        <div className="mt-20 space-y-24">
          {featuresData.map((feature, index) => {
            // Check if index is even or odd to alternate layout
            const isEven = index % 2 === 0;

            return (
              <div 
                key={feature.title} 
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                {/* Order classes:
                  - On even rows (index 0, 2): Image is first (`lg:order-1`)
                  - On odd rows (index 1, 3): Text is first (`lg:order-1`)
                */}
                
                {/* Image/Placeholder Column */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <FeatureImagePlaceholder />
                </div>
                
                {/* Text Column */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <PackageCheck className="w-10 h-10 text-teal-500 mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}