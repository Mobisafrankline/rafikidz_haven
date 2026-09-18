import { useState } from 'react'
import { Link } from 'react-router'

export default function GetInvolved() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?w=1600&h=700&fit=crop&auto=format" alt="Community volunteers" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610] via-[#1e1610]/60 to-[#1e1610]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c94a] animate-pulse" />
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">Get Involved</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight mb-6">
            You Can Change a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c94a] to-[#eab308]">Child's Life</span>
          </h1>
          <p className="text-white/70 text-xl font-light max-w-xl">There are many ways to stand with us — from a monthly gift to showing up in person.</p>
        </div>
      </section>

      <WaysToHelp />
      <SponsorSection />
      <VolunteerSection />
      <FundraisingSection />
      <PartnershipSection />
      <InKindDonations />
    </div>
  )
}

function WaysToHelp() {
  const ways = [
    { icon: '💝', title: 'Sponsor a Child', desc: "A monthly gift of $150 covers a child's complete needs — food, shelter, education, healthcare, and clothing.", cta: 'Sponsor Now', link: '/donate', hot: true },
    { icon: '💰', title: 'Make a Donation', desc: 'One-time or recurring gifts of any size. $15, $35, $75 — every amount has a direct, tangible impact.', cta: 'Donate', link: '/donate', hot: false },
    { icon: '🙋', title: 'Volunteer', desc: 'Come to Mai-Mahiu. Teach, build, counsel, cook, or simply spend time with the children. Skills and hearts welcome.', cta: 'Apply to Volunteer', link: '#volunteer', hot: false },
    { icon: '🤝', title: 'Partner With Us', desc: 'Businesses, churches, schools, and NGOs — formal partnership agreements are available. Help us scale.', cta: 'Become a Partner', link: '#partner', hot: false },
    { icon: '📢', title: 'Fundraise for Us', desc: 'Run a birthday campaign, organize an event, or challenge your community. We provide all the tools you need.', cta: 'Start Fundraising', link: '#fundraise', hot: false },
    { icon: '📦', title: 'In-Kind Donations', desc: 'Bedding, clothing, school supplies, food, medical supplies — physical donations are always needed.', cta: 'See the List', link: '#in-kind', hot: false },
  ]
  return (
    <section className="py-32 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-[#eab308]/10 text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">Ways to Help</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-5">Choose Your Path</h2>
          <p className="text-[#6b5c4a] text-lg max-w-md mx-auto font-light">Whether you give time, money, or resources — there is a way for you to be part of this story.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map(w => (
            <div key={w.title} className={`rounded-3xl p-8 transition-all hover:-translate-y-1 duration-300 group ${w.hot ? 'bg-gradient-to-br from-[#eab308] to-[#ca8a04] shadow-2xl shadow-[#eab308]/30' : 'bg-white border border-[#eab308]/8 hover:border-[#eab308]/25 hover:shadow-xl'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 ${w.hot ? 'bg-white/15' : 'bg-[#fefce8] group-hover:bg-[#eab308] group-hover:text-white transition-colors shadow-inner'}`}>
                {w.icon}
              </div>
              <h3 className={`font-extrabold text-xl mb-3 ${w.hot ? 'text-white' : 'text-[#1e1610] group-hover:text-[#eab308] transition-colors'}`}>{w.title}</h3>
              <p className={`text-sm leading-relaxed mb-8 font-light ${w.hot ? 'text-white/80' : 'text-[#6b5c4a]'}`}>{w.desc}</p>
              <Link to={w.link} className={`inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 ${w.hot ? 'bg-white text-[#eab308] hover:bg-[#fefce8] shadow-lg' : 'bg-[#eab308]/10 text-[#eab308] hover:bg-[#eab308]/20'}`}>
                {w.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SponsorSection() {
  const tiers = [
    { name: 'Friend', amount: '$15/mo', color: 'border-[#4a8c60]/30', accent: 'text-[#2d5a3d]', bg: 'bg-white', perks: ['Monthly newsletter', 'Named in annual report', 'Know you are making a difference'] },
    { name: 'Supporter', amount: '$35/mo', color: 'border-[#eab308]/30', accent: 'text-[#eab308]', bg: 'bg-white', perks: ['All Friend benefits', 'Feeds one child for a month', 'Personalized thank-you letter'] },
    { name: 'Champion', amount: '$75/mo', color: 'border-[#d4a017]/30', accent: 'text-[#8c6500]', bg: 'bg-white', perks: ["All Supporter benefits", 'School fee contribution', "Quarterly impact update"] },
    { name: 'Sponsor', amount: '$150/mo', color: 'border-[#1e1610]', accent: 'text-[#f0c94a]', bg: 'bg-[#1e1610]', popular: true, perks: ['Complete child sponsorship', 'Named sponsor of a child', 'Photo updates & letters', 'Annual impact report'] },
  ]
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-[#fefce8] text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">Child Sponsorship</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-5">Sponsor a Child Monthly</h2>
          <p className="text-[#6b5c4a] text-lg max-w-md mx-auto font-light">Monthly giving creates the stability these children need. Choose a level that works for you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-3xl border-2 p-8 relative ${t.color} ${t.bg} hover:-translate-y-1 transition-all duration-300`}>
              {t.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#eab308] to-[#fde047] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg">Most Impactful</span>}
              <div className={`font-extrabold text-xs uppercase tracking-widest mb-2 ${t.accent}`}>{t.name}</div>
              <div className={`text-4xl font-extrabold mb-6 ${t.popular ? 'text-white' : 'text-[#1e1610]'}`}>{t.amount}</div>
              <ul className="space-y-3 mb-8">
                {t.perks.map(p => (
                  <li key={p} className={`text-sm flex gap-2 font-light ${t.popular ? 'text-white/70' : 'text-[#6b5c4a]'}`}>
                    <span className={`font-extrabold ${t.accent}`}>✓</span> {p}
                  </li>
                ))}
              </ul>
              <Link to="/donate" className={`block text-center text-sm font-extrabold py-3.5 rounded-2xl transition-all hover:scale-105 ${t.popular ? 'bg-gradient-to-r from-[#eab308] to-[#fde047] text-white shadow-lg shadow-[#eab308]/30' : 'bg-[#fefce8] text-[#1e1610] hover:bg-[#eab308]/10 hover:text-[#eab308]'}`}>
                Start Sponsoring
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VolunteerSection() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="volunteer" className="py-32 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block bg-white text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">Volunteer</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-6 leading-tight">Come and <span className="text-[#eab308]">Be Present</span></h2>
            <p className="text-[#6b5c4a] leading-relaxed mb-10 text-lg font-light">
              Local youth groups already visit monthly to wash clothes, play with the children, and bring food. We welcome individuals, groups, churches, schools, and professionals.
            </p>
            <div className="space-y-4">
              {[
                { icon: '👩‍🏫', label: 'Teachers & Tutors', desc: 'Help with homework, teach skills, run workshops' },
                { icon: '🏗️', label: 'Builders & Tradespeople', desc: 'Construction, plumbing, carpentry, electrical' },
                { icon: '🩺', label: 'Medical Professionals', desc: 'Health screenings, first aid training, wellness' },
                { icon: '📸', label: 'Creatives & Communicators', desc: 'Photography, storytelling, digital outreach' },
                { icon: '💼', label: 'Professionals & Mentors', desc: 'Career guidance, life skills, financial literacy' },
                { icon: '❤️', label: 'Just Show Up', desc: 'Play, listen, encourage — presence is powerful' },
              ].map(v => (
                <div key={v.label} className="flex gap-5 items-center bg-white rounded-2xl px-6 py-4 border border-[#eab308]/8 hover:border-[#eab308]/25 hover:shadow-sm transition-all group">
                  <span className="text-2xl">{v.icon}</span>
                  <div>
                    <div className="font-bold text-[#1e1610] text-sm group-hover:text-[#eab308] transition-colors">{v.label}</div>
                    <div className="text-[#8a7968] text-xs mt-0.5 font-light">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-[#eab308]/8 rounded-[2.5rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <h3 className="font-extrabold text-[#1e1610] text-2xl mb-8">Volunteer Interest Form</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-5">🙌</div>
                <h4 className="font-extrabold text-[#1e1610] text-xl mb-3">Thank You!</h4>
                <p className="text-[#6b5c4a] font-light">We've received your interest. Our team will reach out within 3–5 days with next steps.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                  <input type="text" placeholder="Last name" className="border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                </div>
                <input type="email" placeholder="Email address" className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                <input type="text" placeholder="Country / City" className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                <select className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] text-[#6b5c4a] font-medium">
                  <option>My skills / area of contribution</option>
                  <option>Teaching & Tutoring</option>
                  <option>Building & Construction</option>
                  <option>Medical & Health</option>
                  <option>Creative & Communications</option>
                  <option>Professional Mentoring</option>
                  <option>General Volunteering</option>
                </select>
                <textarea rows={3} placeholder="Tell us about yourself and your availability..." className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] resize-none font-medium" />
                <button type="submit" className="w-full bg-gradient-to-r from-[#eab308] to-[#fde047] hover:from-[#ca8a04] hover:to-[#eab308] text-white font-extrabold py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl shadow-[#eab308]/25">
                  Submit Interest →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FundraisingSection() {
  return (
    <section id="fundraise" className="py-32 bg-[#2d5a3d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a3d] to-[#1a3825]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="inline-block glass text-[#f0c94a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Fundraise</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-8 leading-tight">Run a Campaign<br />for the Children</h2>
            <p className="text-white/70 leading-relaxed mb-10 text-lg font-light">
              You have networks we don't. Birthday fundraisers, church collections, school drives, workplace giving — every campaign you run multiplies our reach.
            </p>
            <div className="space-y-5">
              {[
                { title: 'Birthday Campaign', desc: 'Ask for donations instead of gifts. $35 per person feeds a child for a month.' },
                { title: 'Community Event', desc: 'Organize a run, dinner, auction, or concert in your city with proceeds going to Lemalah.' },
                { title: 'Workplace Giving', desc: 'Ask your employer to match donations or participate in a giving campaign.' },
                { title: 'Church or Faith Community', desc: 'A single Sunday collection can change multiple lives at the home.' },
              ].map(f => (
                <div key={f.title} className="flex gap-5 glass rounded-2xl px-6 py-5">
                  <span className="w-2 h-2 rounded-full bg-[#f0c94a] mt-2 shrink-0" />
                  <div>
                    <div className="font-bold text-white">{f.title}</div>
                    <div className="text-white/60 text-sm mt-1 font-light">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-10 text-white">
            <h3 className="font-extrabold text-2xl mb-8">Start Your Fundraiser</h3>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full bg-white/10 border-2 border-white/20 text-white placeholder-white/40 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-white/60 font-medium" />
              <input type="email" placeholder="Email address" className="w-full bg-white/10 border-2 border-white/20 text-white placeholder-white/40 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-white/60 font-medium" />
              <select className="w-full bg-white/10 border-2 border-white/20 text-white/80 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-white/60 font-medium">
                <option className="text-black">Type of fundraiser</option>
                <option className="text-black">Birthday Campaign</option>
                <option className="text-black">Community Event</option>
                <option className="text-black">Workplace Giving</option>
                <option className="text-black">Faith Community</option>
                <option className="text-black">Other</option>
              </select>
              <input type="text" placeholder="Fundraising goal (USD)" className="w-full bg-white/10 border-2 border-white/20 text-white placeholder-white/40 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-white/60 font-medium" />
              <button type="submit" className="w-full bg-[#f0c94a] text-[#1e1610] hover:bg-white font-extrabold py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl shadow-black/20">
                Let's Do This →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnershipSection() {
  return (
    <section id="partner" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-[#fefce8] text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">Partnerships</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-5">Formal Partnership Opportunities</h2>
          <p className="text-[#6b5c4a] text-lg max-w-lg mx-auto font-light">We are open to partnerships with NGOs, corporations, faith organizations, schools, and government bodies.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { type: 'Corporate', icon: '🏢', desc: 'CSR partnerships, employee giving programs, and co-branded campaigns.' },
            { type: 'Faith Organizations', icon: '⛪', desc: 'Churches, mosques, and faith groups — long-term giving relationships and volunteer missions.' },
            { type: 'NGO Collaboration', icon: '🌐', desc: 'Joint programming, shared resources, and referral partnerships with other Kenya-based organizations.' },
            { type: 'Educational Institutions', icon: '🎓', desc: 'Schools and universities can partner for service learning, exchanges, and scholarship funding.' },
          ].map(p => (
            <div key={p.type} className="bg-[#fefce8] rounded-3xl p-8 border border-[#eab308]/8 hover:border-[#eab308]/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-[#eab308] group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <h3 className="font-extrabold text-[#1e1610] text-lg mb-3 group-hover:text-[#eab308] transition-colors">{p.type}</h3>
              <p className="text-[#6b5c4a] text-sm leading-relaxed font-light mb-6 flex-grow">{p.desc}</p>
              <Link to="/contact" className="text-[#eab308] text-sm font-bold hover:text-[#ca8a04] transition-colors flex items-center gap-1">Enquire <span className="group-hover:translate-x-1 transition-transform">→</span></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InKindDonations() {
  const items = [
    "Bedding (sheets, blankets, pillows)",
    "Children's clothing (all ages and sizes)",
    'School supplies (books, pens, bags)',
    'Feminine hygiene products',
    'Bathing soap, toothpaste, toothbrushes',
    'Non-perishable food items',
    'Medical supplies and first-aid items',
    'Sports and recreational equipment',
    'Computers and educational tech',
    'Cooking equipment and utensils',
  ]
  return (
    <section id="in-kind" className="py-32 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block bg-white text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">In-Kind Donations</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-8 leading-tight">Send Physical <span className="text-[#eab308]">Supplies</span></h2>
            <p className="text-[#6b5c4a] leading-relaxed mb-8 text-lg font-light">
              Physical goods can be arranged to be shipped or delivered to the home in Mai-Mahiu. If you are in Kenya or traveling to Nairobi, coordinating a drop-off is simple. Contact us to arrange logistics.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eab308] to-[#fde047] text-white px-8 py-4 rounded-full font-extrabold hover:scale-105 transition-transform shadow-xl shadow-[#eab308]/25">
              Contact to Arrange →
            </Link>
          </div>
          <div>
            <h3 className="font-extrabold text-[#1e1610] text-xl mb-8">Currently Most Needed</h3>
            <div className="grid grid-cols-2 gap-3">
              {items.map(item => (
                <div key={item} className="flex gap-3 items-center bg-white rounded-2xl px-5 py-4 border border-[#eab308]/8 hover:border-[#eab308]/20 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#eab308] shrink-0" />
                  <span className="text-[#6b5c4a] text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
