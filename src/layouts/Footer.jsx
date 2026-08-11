import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 text-sm text-[#64748B] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} School Result Portal. Built for better learning outcomes.</p>
        <div className="flex gap-5">
          <Link to="/about" className="transition-colors hover:text-[#2563EB]">About</Link>
          <Link to="/contact" className="transition-colors hover:text-[#2563EB]">Contact</Link>
          <Link to="/login" className="transition-colors hover:text-[#2563EB]">Portal login</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
