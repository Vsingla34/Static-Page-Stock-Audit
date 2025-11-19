import React from 'react';
// Using PackageCheck as a placeholder for feature icons
import { PackageCheck, Image as ImagePlaceholder } from 'lucide-react'; 

// All the feature data extracted from your screenshots
const featuresData = [
  {
    title: 'Unbreakable Data Integrity',
    description: "Once recorded, your audit data cannot be deleted or modified. Every entry, review, and update is automatically logged ensuring transparency, traceability, and accountability across the audit team.",
  },
  {
    title: 'Hassle-Free Automation for Efficiency',
    description: "Reduce manual effort by up to 50%. StockCheck360 automates repetitive audit processes from working paper management to variance analysis delivering accurate and consistent results every time.",
  },
  {
    title: 'Instant, Professional Reporting',
    description: "Generate ready-to-share stock audit reports in a single click. The software consolidates all data and working papers into professional, CA-standard stock audit reports saving hours every week.",
  },
  {
    title: 'Intuitive and User-Friendly Design',
    description: "No technical training required. The intuitive dashboard allows smooth onboarding, quick navigation, and effortless workflow management for all levels partners, managers, or trainees.",
  },
  {
    title: 'Real-Time Admin–Auditor Collaboration',
    description: "Ensure total visibility across multiple audits. Admins can assign, review, and track work in real time, while auditors can upload observations, evidence, and updates instantly, creating a centralized audit control system.",
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
                  <PackageCheck className="w-10 h-10 text-indigo-600" />
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