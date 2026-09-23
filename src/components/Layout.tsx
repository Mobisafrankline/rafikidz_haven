import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/children', label: 'Our Children' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/news', label: 'News' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-xl shadow-[0_2px_30px_rgba(43,126,140,0.12)] border-b border-[#2B7E8C]/10'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/92 backdrop-blur-xl border-b border-[#2B7E8C]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center group min-w-0 shrink-0">
            <img
              src="/logo.png"
              alt="Rafikidz Haven Logo"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[240px] object-contain drop-shadow-md transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#2B7E8C] bg-[#2B7E8C]/10'
                      : scrolled || !isHome
                        ? 'text-[#5A7880] hover:text-[#2B7E8C] hover:bg-[#2B7E8C]/6'
                        : 'text-white/85 hover:text-white hover:bg-white/12'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`text-sm font-semibold transition-colors ${scrolled || !isHome ? 'text-[#5A7880] hover:text-[#2B7E8C]' : 'text-white/75 hover:text-white'}`}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-gradient-to-r from-[#F5B429] to-[#FBCF5F] hover:from-[#D4920A] hover:to-[#F5B429] text-[#1A2E33] px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#F5B429]/30"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled || !isHome ? 'text-[#2B7E8C] hover:bg-[#2B7E8C]/10' : 'text-white hover:bg-white/12'}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#2B7E8C]/10 px-6 py-5 shadow-xl">
            <div className="flex flex-col gap-1">
              {[...NAV, { to: '/faq', label: 'FAQ' }, { to: '/contact', label: 'Contact' }].map(n => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'text-[#2B7E8C] bg-[#2B7E8C]/10' : 'text-[#5A7880] hover:text-[#2B7E8C] hover:bg-[#2B7E8C]/6'}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/donate"
                className="mt-3 bg-gradient-to-r from-[#F5B429] to-[#FBCF5F] text-[#1A2E33] text-center py-3.5 rounded-full font-bold text-sm shadow-lg"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  const cols = [
    {
      title: 'Who We Are',
      links: [
        { to: '/about', label: 'Our Story' },
        { to: '/children', label: 'Our Children' },
        { to: '/vision', label: 'Vision & Goals' },
        { to: '/impact', label: 'Our Impact' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { to: '/donate', label: 'Donate' },
        { to: '/get-involved', label: 'Volunteer' },
        { to: '/get-involved', label: 'Partner With Us' },
        { to: '/get-involved', label: 'Fundraise' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { to: '/programs', label: 'Our Programs' },
        { to: '/news', label: 'News & Updates' },
        { to: '/gallery', label: 'Photo Gallery' },
        { to: '/faq', label: 'FAQ' },
      ],
    },
  ]

  return (
    <footer className="bg-[#0F3840] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2B7E8C]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8603A]/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#F5B429]/8 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-white/8">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <img
                src="/logo.png"
                alt="Rafikidz Haven"
                className="h-14 w-auto max-w-[260px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Providing orphaned and vulnerable children with shelter, education, and love in Kenya since 2006.
            </p>
            <p className="text-white/25 text-xs leading-relaxed">
              Registered CBO — Kenya Ministry of<br />Culture & Social Services
            </p>
            <div className="mt-6">
              <Link
                to="/donate"
                className="inline-block bg-gradient-to-r from-[#F5B429] to-[#FBCF5F] text-[#0F3840] px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-[#F5B429]/20"
              >
                Donate Now →
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(c => (
            <div key={c.title}>
              <div className="text-[#F5B429] font-extrabold text-xs uppercase tracking-widest mb-5">{c.title}</div>
              <div className="flex flex-col gap-3">
                {c.links.map(l => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-white/40 hover:text-white text-sm transition-colors font-medium hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
          <span>© 2025 Rafikidz Haven / Heartbeats of Hope. All rights reserved. Designed by f.mobisa.</span>
          <span>Mai-Mahiu, Nakuru County, Kenya · Est. 2006</span>
        </div>
      </div>
    </footer>
  )
}
