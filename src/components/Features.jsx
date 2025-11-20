import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, CheckCircle2, BarChart3, FileText, Users, ShieldCheck } from 'lucide-react';
// Assuming these are your image imports
import DataIntegrity from "../../public/DataIntegrity.png";
import Automation from "../../public/Automation.png";
import UI from "../../public/UI.png";
import Admin from "../../public/Admin.png";
import Report from "../../public/Report.png";

// I've mapped specific icons to features to make it visually richer than just using PackageCheck everywhere
const featuresData = [
  {
    title: 'Unbreakable Data Integrity',
    url: DataIntegrity,
    icon: ShieldCheck,
    description: "Once recorded, your audit data cannot be deleted or modified. Every entry, review, and update is automatically logged ensuring transparency, traceability, and accountability.",
  },
  {
    title: 'Hassle-Free Automation',
    url: Automation,
    icon: CheckCircle2,
    description: "Reduce manual effort by up to 50%. StockCheck360 automates repetitive audit processes from working paper management to variance analysis delivering accurate results.",
  },
  {
    title: 'Instant, Professional Reporting',
    url: Report,
    icon: FileText,
    description: "Generate ready-to-share stock audit reports in a single click. The software consolidates all data and working papers into professional, CA-standard stock audit reports.",
  },
  {
    title: 'Intuitive User Experience',
    url: UI,
    icon: BarChart3,
    description: "No technical training required. The intuitive dashboard allows smooth onboarding, quick navigation, and effortless workflow management for all levels.",
  },
  {
    title: 'Real-Time Collaboration',
    url: Admin,
    icon: Users,
    description: "Ensure total visibility across multiple audits. Admins can assign and track work in real time, while auditors can upload observations instantly, creating a centralized system.",
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id='features' className="bg-gray-50 py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide mb-4">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            One Platform, <span className="text-indigo-600">Endless Possibilities</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            See what makes Febi the one-stop solution for modern entrepreneurs and audit teams.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-24">
          {featuresData.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon || PackageCheck;

            return (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Column */}
                <motion.div
                  variants={itemVariants}
                  // Adjusted width for smaller image
                  className="w-full lg:w-5/12 relative group max-w-xl mx-auto lg:mx-0"
                >
                  {/* Decorative Blob/Glow behind image - reduced opacity and blur */}
                  <div className={`absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-10 blur-xl transition duration-1000 group-hover:opacity-30 group-hover:duration-200`} />

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                    <img
                      className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                      src={feature.url}
                      alt={feature.title}
                    />
                  </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                  variants={itemVariants}
                  // Adjusted width for text to take more space
                  className="w-full lg:w-7/12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Optional: Add a 'Learn more' link styling */}
                  <div className="flex items-center text-indigo-600 font-semibold cursor-pointer group/link">
                    <scrollTo></scrollTo>
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}