import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col justify-between">
     
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-4xl mx-auto">
          Simplifying Academic Result Management for Everyone
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          A secure, fast, and unified web platform that automates continuous assessments, exam calculations, and report card generation for schools.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <a
            href="#"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3.5 rounded-md font-semibold text-base transition-colors shadow-sm"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] px-8 py-3.5 rounded-md font-semibold text-base transition-colors shadow-sm"
          >
            Login
          </a>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A]">Key Platform Features</h2>
          <p className="mt-3 text-[#64748B] text-base">Designed to deliver an effortless experience for students, teachers, and admins.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md flex items-center justify-center text-[#2563EB] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Role-Based Access</h3>
            <p className="text-[#64748B] leading-relaxed">
              Dedicated and secure access interfaces customized individually for Administrators, Teachers, and Students.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md flex items-center justify-center text-[#2563EB] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Automated Computations</h3>
            <p className="text-[#64748B] leading-relaxed">
              Instantly calculate scores, grade distributions, term averages, and class rankings accurately without human error.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md flex items-center justify-center text-[#2563EB] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Instant PDF Reports</h3>
            <p className="text-[#64748B] leading-relaxed">
              Generate and download official terminal report cards and academic histories in clear PDF format at any time.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#E2E8F0] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#64748B] text-sm">
          &copy; {new Date().getFullYear()} School Result Portal. Built for Sprint 1.
        </div>
      </footer>
    </div>
  );
}
