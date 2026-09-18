import { useState } from 'react'
import { Link } from 'react-router'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?w=1600&h=600&fit=crop&auto=format"
            alt="Contact"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610] via-[#1e1610]/60 to-[#1e1610]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c94a]" />
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-5">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c94a] to-[#c4622d]">Talk</span>
          </h1>
          <p className="text-white/70 text-xl font-light max-w-xl">
            Whether you want to donate, volunteer, partner, or simply learn more — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <div className="inline-block bg-[#fdf6ee] text-[#c4622d] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Get in Touch</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-6 leading-tight">
                We're <span className="text-[#c4622d]">Here</span>
              </h2>
              <p className="text-[#6b5c4a] leading-relaxed mb-10 text-lg font-light">
                Rafikidz Haven / Lemalah Children's Home is open to partnerships, donations, volunteer visits, and media enquiries. We respond to all messages within 3–5 business days.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: '📍', title: 'Physical Location', lines: ['Mai-Mahiu, Nakuru County, Kenya', 'Approximately 33 miles NW of Nairobi'] },
                  { icon: '🏛️', title: 'Legal Status', lines: ['Registered Community Based Organization (CBO)', 'Kenya Ministry of Culture & Social Services'] },
                  { icon: '👤', title: 'CEO Contact', lines: ['Ms. Lucy M. Njogu', 'Chief Executive Officer'] },
                  { icon: '🤝', title: 'Partnerships & Media', lines: ['For formal partnerships, sponsorships,', 'and media enquiries, use the form →'] },
                ].map(c => (
                  <div key={c.title} className="flex gap-5 bg-[#fdf6ee] rounded-3xl px-6 py-5 border border-[#c4622d]/8 hover:border-[#c4622d]/20 transition-colors">
                    <span className="text-2xl mt-0.5 shrink-0">{c.icon}</span>
                    <div>
                      <div className="font-bold text-[#1e1610] text-sm mb-1">{c.title}</div>
                      {c.lines.map(l => <div key={l} className="text-[#6b5c4a] text-sm font-light">{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#2d5a3d] to-[#1a3825] rounded-3xl p-8 text-white">
                <h3 className="font-extrabold text-xl mb-3">Ready to donate right now?</h3>
                <p className="text-white/70 text-sm mb-6 font-light">You don't have to wait — go straight to our donation page and make an immediate impact.</p>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 bg-[#f0c94a] text-[#1e1610] px-7 py-3.5 rounded-full font-extrabold hover:bg-white transition-colors shadow-lg"
                >
                  Donate Now →
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#fdf6ee] border border-[#c4622d]/8 rounded-[2.5rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-6">✉️</div>
                  <h3 className="text-3xl font-extrabold text-[#1e1610] mb-4">Message Received</h3>
                  <p className="text-[#6b5c4a] leading-relaxed max-w-sm mx-auto text-lg font-light">
                    Thank you for reaching out. Our team will respond within 3–5 business days.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-extrabold text-[#1e1610] text-2xl mb-8">Send Us a Message</h3>
                  <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#8a7968] uppercase tracking-widest mb-2 block">First Name</label>
                        <input required type="text" placeholder="Jane" className="w-full border-2 border-[#c4622d]/15 bg-white rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#c4622d] font-medium" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#8a7968] uppercase tracking-widest mb-2 block">Last Name</label>
                        <input required type="text" placeholder="Doe" className="w-full border-2 border-[#c4622d]/15 bg-white rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#c4622d] font-medium" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#8a7968] uppercase tracking-widest mb-2 block">Email Address</label>
                      <input required type="email" placeholder="jane@example.com" className="w-full border-2 border-[#c4622d]/15 bg-white rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#c4622d] font-medium" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#8a7968] uppercase tracking-widest mb-2 block">Country</label>
                      <input type="text" placeholder="Your country" className="w-full border-2 border-[#c4622d]/15 bg-white rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#c4622d] font-medium" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#8a7968] uppercase tracking-widest mb-2 block">Subject</label>
                      <select className="w-full border-2 border-[#c4622d]/15 bg-white rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#c4622d] text-[#6b5c4a] font-medium">
                        <option>I want to make a donation</option>
                        <option>I want to sponsor a child</option>
                        <option>I want to volunteer</option>
                        <option>I represent an organization / partnership</option>
                        <option>Media or press inquiry</option>
                        <option>In-kind donation / physical supplies</option>
                        <option>General question</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#8a7968] uppercase tracking-widest mb-2 block">Message</label>
                      <textarea required rows={5} placeholder="Tell us how you'd like to help or what you'd like to know..." className="w-full border-2 border-[#c4622d]/15 bg-white rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#c4622d] resize-none font-medium" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-[#c4622d] to-[#e8855a] hover:from-[#8c3d14] hover:to-[#c4622d] text-white font-extrabold py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl shadow-[#c4622d]/25 text-base">
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-20 bg-[#fdf6ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1610]">Quick Links</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: '💝', title: 'Donate', sub: 'Give now, any amount', link: '/donate' },
              { icon: '🙋', title: 'Volunteer', sub: 'Come and be present', link: '/get-involved' },
              { icon: '❓', title: 'FAQ', sub: 'Common questions answered', link: '/faq' },
              { icon: '📰', title: 'News', sub: 'Updates from the home', link: '/news' },
            ].map(q => (
              <Link key={q.title} to={q.link} className="bg-white rounded-3xl p-7 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-[#c4622d]/8 hover:border-[#c4622d]/25">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf6ee] flex items-center justify-center text-3xl mb-4 mx-auto group-hover:bg-[#c4622d] group-hover:text-white transition-colors shadow-inner">
                  {q.icon}
                </div>
                <div className="font-extrabold text-[#1e1610] text-lg group-hover:text-[#c4622d] transition-colors">{q.title}</div>
                <div className="text-[#8a7968] text-xs mt-2 font-light">{q.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
