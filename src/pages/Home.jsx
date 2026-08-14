import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Accurate result processing',
    description: 'Automated totals, grades, averages, and positions reduce manual calculation errors.',
    icon: (
      <path d="M8 12.5 10.5 15 16 9.5M12 3l7 3v5c0 4.5-2.8 7.6-7 10-4.2-2.4-7-5.5-7-10V6l7-3Z" />
    ),
  },
  {
    title: 'Secure role-based access',
    description: 'Administrators, teachers, and students see only the tools and records relevant to them.',
    icon: (
      <path d="M7 11V8a5 5 0 0 1 10 0v3m-11 0h12v9H6v-9Zm6 3v3" />
    ),
  },
  {
    title: 'Results anywhere',
    description: 'Students can securely view academic history and access printable report cards online.',
    icon: (
      <path d="M7 3h7l4 4v14H7V3Zm7 0v5h4M10 13h5m-5 4h5" />
    ),
  },
]

const Home = () => {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-[#F8FAFC]">
        <div className="absolute -right-32 -top-36 size-96 rounded-full bg-blue-100/70 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-44 -left-32 size-96 rounded-full bg-sky-100/60 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-18 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#2563EB]">
              <span className="size-2 rounded-full bg-[#2563EB]" />
              Smarter academic result management
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              School results, managed with <span className="text-[#2563EB]">clarity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg">
              A secure, reliable portal that helps schools process results faster, reduce errors, and give students timely access to their academic records.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="rounded-lg bg-[#2563EB] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8]"
              >
                Get started
              </Link>
              <Link
                to="/about"
                className="rounded-lg border border-[#E2E8F0] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0F172A] transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#64748B]">
              {['Secure access', 'Responsive design', 'Printable results'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg viewBox="0 0 20 20" className="size-4 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="m4 10 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Student overview</p>
                  <h2 className="mt-1 font-bold text-[#0F172A]">Academic performance</h2>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#16A34A]">Published</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ['Average', '82.4%'],
                  ['Position', '3rd'],
                  ['Subjects', '10'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 sm:p-4">
                    <p className="text-xs text-[#64748B]">{label}</p>
                    <p className="mt-1 text-lg font-bold text-[#0F172A] sm:text-xl">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                {[
                  ['Mathematics', 88],
                  ['English Language', 81],
                  ['Basic Science', 78],
                ].map(([subject, score]) => (
                  <div key={subject}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-[#0F172A]">{subject}</span>
                      <span className="font-semibold text-[#2563EB]">{score}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-[#2563EB]" style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex items-center justify-between rounded-xl bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-white text-[#2563EB] shadow-sm">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M7 3h7l4 4v14H7V3Zm7 0v5h4M10 13h5m-5 4h5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">Term report card</p>
                    <p className="text-xs text-[#64748B]">Ready to download</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-[#2563EB]">PDF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ['Faster', 'Result processing'],
            ['Fewer', 'Calculation errors'],
            ['Secure', 'Academic records'],
            ['Any device', 'Easy access'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-xl font-bold text-[#2563EB] sm:text-2xl">{value}</p>
              <p className="mt-1 text-sm text-[#64748B]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-[#2563EB]">BUILT FOR SCHOOL COMMUNITIES</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Everything needed for dependable results</h2>
            <p className="mt-4 leading-7 text-[#64748B]">One consistent system for recording, processing, publishing, and accessing academic performance.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {feature.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#2563EB] px-6 py-10 text-center shadow-lg shadow-blue-200 sm:px-12 sm:py-14">
            <h2 className="text-3xl font-bold text-white">Ready for a simpler result process?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">Create an account to explore the portal, or sign in if your school has already added you.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/register" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2563EB] transition hover:bg-blue-50">Create account</Link>
              <Link to="/login" className="rounded-lg border border-blue-300 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]">Login to portal</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
