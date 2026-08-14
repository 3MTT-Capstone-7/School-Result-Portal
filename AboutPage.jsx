import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header / Hero Section */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-emerald-400">School Result Portal</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Empowering educational institutions, students, and parents with seamless, transparent, and secure digital academic records management.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To eliminate administrative delays and record inaccuracies by providing a fast, reliable, and accessible result compilation platform for schools everywhere.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold">
            👁️
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To become the leading digital result processing standard across secondary and tertiary institutions, fostering transparency and instant reporting.
          </p>
        </div>
      </section>

      {/* Key Features / What We Offer */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
            Why Choose Our Platform?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-lg mb-2">⚡ Instant Access</h3>
              <p className="text-slate-600 text-sm">
                Students can view and download term or semester results immediately after publication.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-lg mb-2">🔒 Secure & Tamper-Proof</h3>
              <p className="text-slate-600 text-sm">
                Advanced data privacy protocols guarantee that student records remain confidential and authentic.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-lg mb-2">📊 Analytics & PDF Reports</h3>
              <p className="text-slate-600 text-sm">
                Comprehensive performance visualizer with one-click official PDF report downloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Built by DevCore 7-Innovators
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Engineered as part of the 3MTT Capstone project to modernize academic record management.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium">
          <span>🚀 Capstone Project 7</span>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;