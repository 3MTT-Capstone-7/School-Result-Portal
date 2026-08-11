import { useState } from 'react'
import InputField from '../components/InputField'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState(null)

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFeedback(null)

    if (!form.name || !form.email || !form.message) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setFeedback({
      type: 'success',
      message: 'Your message is ready. Submission will be enabled when the backend is connected.',
    })
  }

  return (
    <main className="flex-1 bg-[#F8FAFC] py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[#2563EB]">CONTACT US</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">How can we help?</h1>
          <p className="mt-4 leading-7 text-[#64748B]">Questions about the portal or its rollout? Send the project team a message.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="bg-[#2563EB] p-7 text-white sm:p-10">
            <h2 className="text-2xl font-bold">Let’s connect</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">We welcome feedback from school leaders, teachers, students, and project collaborators.</p>
            <div className="mt-9 space-y-6">
              {[
                ['Email', 'support@schoolresultportal.edu'],
                ['Availability', 'Monday – Friday, 8:00 AM – 5:00 PM'],
                ['Project team', 'DevCore 7-Innovators'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="mt-1 size-2.5 shrink-0 rounded-full bg-blue-200" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">{label}</p>
                    <p className="mt-1 text-sm text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-blue-400 bg-[#1D4ED8] p-4 text-sm leading-6 text-blue-50">
              This sprint covers the frontend experience. Authentication and form delivery will be connected in a later phase.
            </div>
          </aside>

          <div className="p-7 sm:p-10">
            <h2 className="text-2xl font-bold text-[#0F172A]">Send a message</h2>
            <p className="mt-2 text-sm text-[#64748B]">Complete the form and we’ll get back to you.</p>
            <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
              {feedback && (
                <p
                  role="status"
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    feedback.type === 'error'
                      ? 'border-red-200 bg-red-50 text-[#DC2626]'
                      : 'border-green-200 bg-green-50 text-[#16A34A]'
                  }`}
                >
                  {feedback.message}
                </p>
              )}
              <InputField id="name" label="Full name" placeholder="Enter your full name" value={form.name} onChange={updateField} autoComplete="name" required />
              <InputField id="email" label="Email address" type="email" placeholder="you@example.com" value={form.email} onChange={updateField} autoComplete="email" required />
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help"
                  value={form.message}
                  onChange={updateField}
                  className="w-full resize-y rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-3 focus:ring-blue-100"
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8]">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
