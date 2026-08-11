import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-50 text-[#2563EB]'
        : 'text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <span className="grid size-9 place-items-center rounded-lg bg-[#2563EB] text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
              <path d="m4 9 8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M7 11v4.5c2.8 2 7.2 2 10 0V11M20 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-base font-bold tracking-tight text-[#0F172A] sm:text-lg">
            School Result Portal
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#2563EB] transition-colors hover:bg-blue-50"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8]"
          >
            Create account
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-[#E2E8F0] text-[#0F172A] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#E2E8F0] bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#E2E8F0] pt-4">
              <Link
                to="/login"
                className="rounded-lg border border-[#E2E8F0] px-4 py-2.5 text-center text-sm font-semibold text-[#2563EB]"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-[#2563EB] px-4 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
