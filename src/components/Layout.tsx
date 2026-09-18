import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'

const NAV = [
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
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-[#c4622d]/10'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/90 backdrop-blur-xl border-b border-[#c4622d]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-lg transition-all group-hover:scale-110 ${scrolled || !isHome ? 'bg-[#c4622d] text-white' : 'bg-white text-[#c4622d]'}`}>
              R
            </div>
            <div>
              <div className={`font-extrabold text-base leading-tight tracking-tight transition-colors ${scrolled || !isHome ? 'text-[#1e1610]' : 'text-white'}`}>
                Rafikidz Haven
              </div>
              <div className={`text-[10px] leading-none tracking-widest uppercase font-medium transition-colors ${scrolled || !isHome ? 'text-[#8a7968]' : 'text-white/60'}`}>
                Lemalah Children's Home
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#c4622d] bg-[#c4622d]/8'
                      : scrolled || !isHome
                        ? 'text-[#6b5c4a] hover:text-[#c4622d] hover:bg-[#c4622d]/5'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className={`text-sm font-semibold transition-colors ${scrolled || !isHome ? 'text-[#8a7968] hover:text-[#c4622d]' : 'text-white/70 hover:text-white'}`}>
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-gradient-to-r from-[#c4622d] to-[#e8855a] hover:from-[#8c3d14] hover:to-[#c4622d] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#c4622d]/25"
            >
              Donate Now
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled || !isHome ? 'text-[#c4622d] hover:bg-[#c4622d]/10' : 'text-white hover:bg-white/10'}`}
            onClick={() => setOpen(o => !o)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#c4622d]/10 px-6 py-5 shadow-xl">
            <div className="flex flex-col gap-1">
              {[...NAV, { to: '/faq', label: 'FAQ' }, { to: '/contact', label: 'Contact' }].map(n => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'text-[#c4622d] bg-[#c4622d]/8' : 'text-[#6b5c4a] hover:text-[#c4622d] hover:bg-[#c4622d]/5'}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to="/donate" className="mt-3 bg-gradient-to-r from-[#c4622d] to-[#e8855a] text-white text-center py-3.5 rounded-full font-bold text-sm shadow-lg">
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
    <footer className="bg-[#1e1610] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#c4622d]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d5a3d]/20 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-white/8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#c4622d] flex items-center justify-center text-white font-extrabold text-lg">R</div>
              <span className="font-extrabold text-white text-lg leading-tight">Rafikidz Haven</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Providing orphaned and vulnerable children with shelter, education, and love in Kenya since 2006.
            </p>
            <p className="text-white/25 text-xs leading-relaxed">
              Registered CBO — Kenya Ministry of<br />Culture & Social Services
            </p>
            <div className="mt-6">
              <Link
                to="/donate"
                className="inline-block bg-gradient-to-r from-[#c4622d] to-[#e8855a] text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-[#c4622d]/25"
              >
                Donate Now →
              </Link>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div className="text-white font-extrabold text-xs uppercase tracking-widest mb-5">{c.title}</div>
              <div className="flex flex-col gap-3">
                {c.links.map(l => (
                  <Link key={l.label} to={l.to} className="text-white/40 hover:text-white text-sm transition-colors font-medium hover:translate-x-1 inline-block">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
          <span>© 2025 Rafikidz Haven / Lemalah Children's Home. All rights reserved.</span>
          <span>Mai-Mahiu, Nakuru County, Kenya · Est. 2006</span>
        </div>
      </div>
    </footer>
  )
}
