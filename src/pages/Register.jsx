import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'

const Register = () => {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [feedback, setFeedback] = useState(null)

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFeedback(null)

    if (Object.values(form).some((value) => !value)) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (form.password.length < 8) {
      setFeedback({ type: 'error', message: 'Password must be at least 8 characters.' })
      return
    }

    if (form.password !== form.confirmPassword) {
      setFeedback({ type: 'error', message: 'Passwords do not match.' })
      return
    }

    setFeedback({ type: 'success', message: 'Details validated. Account creation will be enabled with authentication.' })
  }

  return (
    <main className="relative flex flex-1 items-center overflow-hidden bg-[#F8FAFC] px-4 py-14 sm:px-6 sm:py-18">
      <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-lg">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-9">
          <div className="text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M16 20v-1.5c0-2-1.8-3.5-4-3.5H7c-2.2 0-4 1.5-4 3.5V20m6.5-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 8v6m-3-3h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A]">Create an account</h1>
            <p className="mt-2 text-sm text-[#64748B]">Register to get started with the school portal.</p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
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
            <InputField id="fullName" label="Full name" placeholder="Enter your full name" value={form.fullName} onChange={updateField} autoComplete="name" required />
            <InputField id="email" label="Email address" type="email" placeholder="you@example.com" value={form.email} onChange={updateField} autoComplete="email" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField id="password" label="Password" type="password" placeholder="At least 8 characters" value={form.password} onChange={updateField} autoComplete="new-password" required />
              <InputField id="confirmPassword" label="Confirm password" type="password" placeholder="Repeat password" value={form.confirmPassword} onChange={updateField} autoComplete="new-password" required />
            </div>
            <p className="text-xs leading-5 text-[#64748B]">By creating an account, you agree to use the portal responsibly and keep your login details secure.</p>
            <button type="submit" className="w-full rounded-lg bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8]">
              Create account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[#64748B]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]">Login</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Register
