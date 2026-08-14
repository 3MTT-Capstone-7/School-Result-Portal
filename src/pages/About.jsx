import { Link } from 'react-router-dom'

const values = [
  ['Accuracy', 'Automated calculations reduce errors in totals, grades, averages, and positions.'],
  ['Accessibility', 'Responsive online access keeps results available to authorized users on any device.'],
  ['Security', 'Role-based access protects confidential student and school information.'],
]

const About = () => {
  return (
    <main className="flex-1 bg-[#F8FAFC]">
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold text-[#2563EB]">ABOUT THE PORTAL</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">Better tools for better academic decisions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            School Result Portal replaces slow, error-prone result processes with a secure and reliable web application for the whole school community.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#2563EB]">OUR PURPOSE</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A]">Make result management efficient and dependable</h2>
            <p className="mt-5 leading-7 text-[#64748B]">
              Many schools still rely on paper records and spreadsheets. This makes computation time-consuming, retrieval difficult, publication delayed, and sensitive information harder to protect.
            </p>
            <p className="mt-4 leading-7 text-[#64748B]">
              Our portal brings student records, score entry, automated grading, approval, reporting, and result access into one consistent system.
            </p>
            <Link to="/contact" className="mt-7 inline-flex rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]">
              Talk to the team
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Administrators', 'Manage users, classes, subjects, sessions, and result approval.'],
              ['Teachers', 'Record assessment and examination scores for assigned classes.'],
              ['Students', 'View results, academic history, and downloadable report cards.'],
              ['Parents', 'Monitor a child’s academic progress in a future portal release.'],
            ].map(([title, description], index) => (
              <article key={title} className={`rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm ${index % 2 ? 'sm:translate-y-5' : ''}`}>
                <span className="grid size-9 place-items-center rounded-lg bg-blue-50 text-sm font-bold text-[#2563EB]">{index + 1}</span>
                <h3 className="mt-4 font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#0F172A]">What guides the product</h2>
            <p className="mt-4 text-[#64748B]">Every feature is designed around trustworthy records and a clear user experience.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <div className="flex items-center gap-3">
                  <span className="size-2.5 rounded-full bg-[#2563EB]" />
                  <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
