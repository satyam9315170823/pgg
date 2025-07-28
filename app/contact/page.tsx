"use client";

import Navbar from "../navbar";
import Footer from "../footer"


import React, { useState } from "react";


const ContactSection = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Corrected type for focusedField to allow string literal types or null
  const [focusedField, setFocusedField] = useState<'name' | 'email' | 'phone' | 'service' | 'message' | null>(null);
  // Corrected type for submissionStatus to allow specific string literal types or null
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error' | null>('idle');

  const [errorMessage, setErrorMessage] = useState('');

  // Updated handleInputChange to accept ChangeEvent for both HTMLInputElement and HTMLTextAreaElement
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Updated handleSubmit to accept FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmissionStatus('loading');
    setErrorMessage('');

    // IMPORTANT: Replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual Web3Forms Access Key.
    // You can get this by signing up at https://web3forms.com/ and creating a new form.
    const web3formsAccessKey = "920da2a0-0f3a-4633-aa78-79e0f48d1a49";
    const web3formsEndpoint = "https://api.web3forms.com/submit";

    // Prepare data for Web3Forms, including the access key
    const dataToSend = {
      access_key: web3formsAccessKey,
      ...formData,
    };

    try {
      const response = await fetch(web3formsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      const result = await response.json(); // Parse the JSON response

      if (result.success) {
  setSubmissionStatus('success');
  setFormData({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  setTimeout(() => setSubmissionStatus('idle'), 5000);
} else {
  setSubmissionStatus('error');
  setErrorMessage(result.message || 'Something went wrong. Please try again.');
  setTimeout(() => setSubmissionStatus('idle'), 5000);
}

    } catch (error) {
      console.error('Submission error:', error);
      
      setSubmissionStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
     
      setTimeout(() => setSubmissionStatus('idle'), 5000); // Clear message after 5 seconds
    }
  };

  return (
    <div>
        <Navbar />
      <div className="relative min-h-screen mt-5 md:mt-7 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 mt-5 md:mt-10 py-20 px-4 sm:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Company Info Section */}
            <div className="space-y-8 transform hover:scale-105 transition-all duration-700">
              <div className="relative group">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight mb-2">
                  Get in Touch with
                  <span className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                    Prettify Go Global
                  </span>
                </h2>
                {/* Glowing effect behind text */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>

              {/* Fixed: Moved the div outside the p tag to resolve DOM nesting warning */}
              <div className="relative"> {/* Added a new div to wrap both p and the background div */}
                <p className="text-gray-700 text-xl leading-relaxed font-light relative z-10">
                  We are here to amplify your brand presence, reach the right
                  audience, and deliver powerful PR strategies that work.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <div className="space-y-6">
                {/* Vision Card */}
                <div className="group relative p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </div>
                      <h4 className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">Our Vision</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      To build meaningful brand connections through strategic PR,
                      media outreach, and digital influence.
                    </p>
                  </div>
                </div>

                {/* Services Card */}
                <div className="group relative p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl hover:border-purple-300/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-5">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </div>
                      <h4 className="text-xl font-bold text-blue-600 group-hover:text-purple-600 transition-colors duration-300">What We Offer</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Media and Influencer Campaigns",
                        "Brand Reputation Management",
                        "Corporate Communications",
                        "Event PR and Coverage",
                        "Digital Marketing & SEO Strategy"
                      ].map((service, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300 group/item">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="font-medium text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="relative p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl text-white overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group/contact">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg group-hover/contact:scale-110 transition-transform duration-300">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <span className="text-gray-300 text-sm">Phone:</span>
                        <div className="font-bold text-lg text-white group-hover/contact:text-green-300 transition-colors duration-300">+91 93159 72991</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group/contact">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover/contact:scale-110 transition-transform duration-300">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <span className="text-gray-300 text-sm">Email:</span>
                        <a
                          href="mailto:info@prettifyglobal.com"
                          className="block font-bold text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          info@prettifyglobal.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group/contact">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mt-1 shadow-lg group-hover/contact:scale-110 transition-transform duration-300">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <span className="text-gray-300 text-sm">Address:</span>
                        <p className="font-medium text-white leading-relaxed group-hover/contact:text-purple-300 transition-colors duration-300">
                          B-209, Block D,Tekhand, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                {/* Decorative floating elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3">
                      Send Us a Message
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto mt-2 opacity-60"></div>
                  </div>
              
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group/input">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within/input:text-blue-600">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-white/90 backdrop-blur-sm placeholder-gray-400"
                          required
                        />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-opacity duration-300 pointer-events-none ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within/input:text-blue-600">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-white/90 backdrop-blur-sm placeholder-gray-400"
                          required
                        />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-opacity duration-300 pointer-events-none ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within/input:text-blue-600">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+91-9876543210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-white/90 backdrop-blur-sm placeholder-gray-400"
                          required
                        />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-opacity duration-300 pointer-events-none ${focusedField === 'phone' ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within/input:text-blue-600">
                        How Can We Help You
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="service"
                          name="service"
                          placeholder="Brand Strategy / SEO Help / Media Query"
                          value={formData.service}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-white/90 backdrop-blur-sm placeholder-gray-400"
                          required
                        />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-opacity duration-300 pointer-events-none ${focusedField === 'service' ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>

                    <div className="group/input">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within/input:text-blue-600">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your query..."
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange} // This handler now correctly accepts HTMLTextAreaElement
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none placeholder-gray-400"
                          required
                        />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-opacity duration-300 pointer-events-none ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submissionStatus === 'loading'}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group/button"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {submissionStatus === 'loading' ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : submissionStatus === 'success' ? (
                          <>
                            <span className="text-xl">✅</span>
                            <span>Message Sent!</span>
                          </>
                        ) : submissionStatus === 'error' ? (
                          <>
                            <span className="text-xl">❌</span>
                            <span>Error: {errorMessage}</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 transform scale-x-0 group-hover/button:scale-x-100 transition-transform origin-left duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
