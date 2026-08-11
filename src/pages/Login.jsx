import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [feedback, setFeedback] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setFeedback(null)

    if (!email || !password) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setFeedback({ type: 'success', message: 'Details validated. Authentication will be connected in the next phase.' })
  }

  return (
    <main className="relative flex flex-1 items-center overflow-hidden bg-[#F8FAFC] px-4 py-14 sm:px-6 sm:py-18">
      <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-9">
          <div className="text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M7 11V8a5 5 0 0 1 10 0v3m-11 0h12v9H6v-9Zm6 3v3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A]">Welcome back</h1>
            <p className="mt-2 text-sm text-[#64748B]">Login to access your school portal account.</p>
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
            <InputField id="login-email" label="Email address" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required />
            <div>
              <InputField id="login-password" label="Password" type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
              <div className="mt-2 text-right">
                <button type="button" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">Forgot password?</button>
              </div>
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8]">
              Login
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[#64748B]">
            Don’t have an account?{' '}
            <Link to="/register" className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]">Create account</Link>
          </p>
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-[#64748B]">Secure access for administrators, teachers, and students.</p>
      </div>
    </main>
  )
}

export default Login
