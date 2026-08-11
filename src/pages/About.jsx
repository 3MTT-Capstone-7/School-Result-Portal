const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      {/* Header / Hero Section */}
      <section className="bg-white border-b border-[#E2E8F0] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            About <span className="text-[#2563EB]">School Result Portal</span>
          </h1>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering educational institutions, students, and parents with seamless, transparent, and secure digital academic records management.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-md flex items-center justify-center mb-4 text-2xl font-bold">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Our Mission</h2>
          <p className="text-[#64748B] leading-relaxed">
            To eliminate administrative delays and record inaccuracies by providing a fast, reliable, and accessible result compilation platform for schools everywhere.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-md flex items-center justify-center mb-4 text-2xl font-bold">
            👁️
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Our Vision</h2>
          <p className="text-[#64748B] leading-relaxed">
            To become the leading digital result processing standard across secondary and tertiary institutions, fostering transparency and instant reporting.
          </p>
        </div>
      </section>

      {/* Key Features / What We Offer */}
      <section className="py-12 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0F172A] mb-10">
            Why Choose Our Platform?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] hover:border-blue-200 transition-colors">
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">⚡ Instant Access</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Students can view and download term or semester results immediately after publication.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] hover:border-blue-200 transition-colors">
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">🔒 Secure & Tamper-Proof</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Advanced data privacy protocols guarantee that student records remain confidential and authentic.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] hover:border-blue-200 transition-colors">
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">📊 Analytics & PDF Reports</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Comprehensive performance visualizer with one-click official PDF report downloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
          Built by DevCore 7-Innovators
        </h2>
        <p className="text-[#64748B] max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Engineered as part of the 3MTT Capstone project to modernize academic record management.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-md text-sm font-medium shadow-sm">
          <span>🚀 Capstone Project 7</span>
        </div>
      </section>
    </div>
  );
};

export default About;
