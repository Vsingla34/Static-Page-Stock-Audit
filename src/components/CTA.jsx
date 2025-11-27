import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, TrendingUp, ShieldCheck, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; // We still use EmailJS for emails

export default function CTA() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Environment Variables
    const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
    const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY; // This is your anon public key

    try {
      // --- 1. Save to Supabase using FETCH (No library needed) ---
      const response = await fetch(`${SUPABASE_URL}/rest/v1/demo_requests`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal' // Don't return the whole object, just save it
        },
        body: JSON.stringify({
          full_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company_name: formData.company,
          industry: formData.industry,
          message: formData.comments,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save to database');
      }

      // --- 2. Send Email to Admin (You) ---
      await emailjs.send(
        'service_661j84g', 
        'template_9n45it8',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.comments,
          to_email: 'info@stockcheck360.com' 
        },
        '-BniL0zh2vmU_VhD1'
      );

      // --- 3. Send Auto-Reply Email to Visitor ---
      await emailjs.send(
        'service_661j84g',
        'template_yjp3doa',
        {
          to_name: formData.name,
          to_email: formData.email, 
          reply_to: 'info@stockcheck360.com'
        },
        '-BniL0zh2vmU_VhD1'
      );

      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your demo request has been received.' 
      });
      
      setFormData({
        name: '', phone: '', email: '', company: '', industry: '', comments: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contactUs' className="relative py-20 sm:py-32 bg-gray-50 overflow-hidden">
      
       <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Ready to Streamline Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Stock Audits?
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join leading audit firms and businesses using StockCheck360 to cut audit times by 50% and eliminate reporting errors. Schedule your free demo today.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                { icon: TrendingUp, text: "Increase audit efficiency by 2x" },
                { icon: ShieldCheck, text: "100% Data Integrity & Security" },
                { icon: CheckCircle2, text: "Instant CA-Standard Reports" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <item.icon size={20} />
                  </div>
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in touch
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all outline-none border"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all outline-none border"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all outline-none border"
                  />
                </div>

                {/* Company & Industry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company */}
                  <div className="space-y-1">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Audit Firm LLP"
                      className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all outline-none border"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-1">
                    <label htmlFor="industry" className="text-sm font-medium text-gray-700">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g. Retail, FMCG"
                      className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all outline-none border"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="comments" className="text-sm font-medium text-gray-700">How can we help?</label>
                  <textarea
                    name="comments"
                    id="comments"
                    rows={3}
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="I am interested in a demo for my team..."
                    className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 transition-all outline-none border resize-none"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                    <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {status.message}
                    </div>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-2 py-4 px-6 border border-transparent rounded-lg text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      Processing...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Schedule Demo
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  No credit card required. We respect your privacy.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}