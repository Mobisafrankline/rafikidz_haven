import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <StatsBar />
      <MissionStrip />
      <StoriesPreview />
      <ProgramsGrid />
      <UrgentNeeds />
      <DonateCallout />
      <NewsPreview />
      <PartnerLogos />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1547496614-d145e2fa88ed?w=1800&h=1000&fit=crop&auto=format"
          alt="Three boys smiling in Kenya"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] origin-center transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1e1610]/95 via-[#1e1610]/70 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 mt-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8 glass-dark px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#f0c94a] animate-pulse" />
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">Mai-Mahiu, Nakuru County · Kenya</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-8">
            Every Child<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c94a] to-[#c4622d]">Deserves</span> a Safe Home.
          </h1>
          <p className="text-white/80 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl font-light">
            Rafikidz Haven shelters, educates, and nurtures 52 orphaned and vulnerable children in Kenya — transforming survival into thriving.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/donate" className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#c4622d] to-[#e8855a] text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(196,98,45,0.4)]">
              <span className="relative z-10 flex items-center gap-2">Support a Child Today <span className="group-hover:translate-x-1 transition-transform">→</span></span>
            </Link>
            <Link to="/about" className="group inline-flex items-center justify-center glass-dark hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { n: '52', label: 'Children in Care', sub: 'plus a growing waiting list' },
    { n: '18+', label: 'Years of Service', sub: 'since 2006, Mai-Mahiu' },
    { n: '5', label: 'Acres of Land', sub: 'home, garden & future school' },
    { n: '100%', label: 'Directly to Children', sub: 'every single donation' },
  ]
  return (
    <div className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto">
      <div className="glass-dark bg-[#1e1610]/80 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i === 0 || i === 2 ? 'border-none md:border-solid' : 'border-none'}`}>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">{s.n}</div>
              <div className="text-[#f0c94a] font-bold text-sm tracking-wide mt-2 uppercase">{s.label}</div>
              <div className="text-white/50 text-xs mt-1 font-light">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MissionStrip() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdf6ee] rounded-l-full opacity-50 blur-3xl -z-10 transform translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-[#fdf6ee] text-[#c4622d] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Our Mission</div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1e1610] mb-8 leading-[1.1]">
              Turning Hardship Into <span className="text-[#c4622d]">Hope</span>
            </h2>
            <p className="text-[#6b5c4a] leading-relaxed mb-6 text-lg md:text-xl font-light">
              Lemalah Children's Home — the heart of Rafikidz Haven — started in 2006 when Pastor Peter Warari took in two street boys with nowhere else to go. What began as a family act of faith has grown into a certified community organization caring for 52 children.
            </p>
            <p className="text-[#6b5c4a] leading-relaxed mb-10 text-lg md:text-xl font-light">
              We provide food, shelter, clothing, education, and emotional safety. We don't just keep children alive — we help them become architects of their own futures.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-3 text-[#c4622d] font-bold text-lg hover:text-[#8c3d14] transition-colors">
              <span className="border-b-2 border-[#c4622d] pb-1">Read our full story</span> 
              <span className="group-hover:translate-x-1 transition-transform bg-[#fdf6ee] p-2 rounded-full">→</span>
            </Link>
          </div>
          <div className="relative group">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-[#c4622d]/20 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576685894355-2437748baa08?w=700&h=900&fit=crop&auto=format"
                alt="Child at the doorway of the home"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#2d5a3d] text-white rounded-3xl p-8 shadow-2xl max-w-[320px] z-20 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-lg font-medium leading-relaxed mb-4">
                "The children found us. We have never had to go looking."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">TN</div>
                <div>
                  <p className="font-bold text-sm">Mrs. Theresiah W. Njogu</p>
                  <p className="text-white/60 text-xs">Chairperson</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 border-2 border-[#fdf6ee] rounded-[3rem] -z-0 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StoriesPreview() {
  const stories = [
    {
      name: 'Hannah Njoki',
      age: 'Form 3, High School',
      story: 'Arrived as a little girl with her siblings after their ailing grandmother could no longer care for them. Today she is a confident young woman with university ambitions.',
      img: 'https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=600&h=700&fit=crop&auto=format',
    },
    {
      name: 'James Wamalwa',
      age: 'Vocational College',
      story: 'His pastor father disappeared without a trace. James came from western Kenya, finished high school, and is now studying a vocational trade — building toward self-sufficiency.',
      img: 'https://images.unsplash.com/photo-1520542764791-6f45f69be58d?w=600&h=700&fit=crop&auto=format',
    },
    {
      name: 'Wilson & The First Four',
      age: 'The Founding Children',
      story: 'Wilson Muga and James Gitonga — the first two street boys who arrived in 2006 — started everything. Their sisters followed. They are now adults carrying Lemalah\'s legacy forward.',
      img: 'https://images.unsplash.com/photo-1664990594674-418f27010fee?w=600&h=700&fit=crop&auto=format',
    },
  ]

  return (
    <section className="py-32 bg-[#1e1610] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest mb-4 block">Their Stories</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">52 Lives,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c94a] to-white">52 Futures</span></h2>
          </div>
          <Link to="/children" className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-bold transition-colors">
            Meet all our children <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map(s => (
            <div key={s.name} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#2d5a3d]">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610] via-[#1e1610]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block bg-[#f0c94a] text-[#1e1610] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-max">{s.age}</span>
                <h3 className="text-white font-extrabold text-3xl mb-3">{s.name}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{s.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramsGrid() {
  const programs = [
    { icon: '🏠', title: 'Safe Shelter', desc: 'Dormitories and a secure home on 5 acres in Mai-Mahiu, Nakuru County.', link: '/programs' },
    { icon: '📚', title: 'Education', desc: 'School fees from primary through university and vocational training.', link: '/programs' },
    { icon: '🥗', title: 'Food & Nutrition', desc: 'Three meals a day, grown partly on our own farm.', link: '/programs' },
    { icon: '🩺', title: 'Healthcare', desc: 'Primary health services, clean water, and personal wellness.', link: '/programs' },
    { icon: '🛠️', title: 'Vocational Skills', desc: 'Future polytechnic for trades, tech, and employment readiness.', link: '/programs' },
    { icon: '❤️', title: 'Emotional Care', desc: 'Counseling, community bonds, and a loving, accepting environment.', link: '/programs' },
  ]
  return (
    <section className="py-32 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-[#c4622d]/10 text-[#c4622d] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">What We Provide</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-6">Holistic Care, Root to Branch</h2>
          <p className="text-[#6b5c4a] text-lg font-light">We believe in treating every aspect of a child's life to ensure they grow up healthy, educated, and ready for the world.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(p => (
            <Link key={p.title} to={p.link} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(196,98,45,0.1)] hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-[#c4622d]/20">
              <div className="w-16 h-16 rounded-2xl bg-[#fdf6ee] flex items-center justify-center text-3xl mb-6 group-hover:bg-[#c4622d] group-hover:text-white transition-colors duration-300 shadow-inner">
                {p.icon}
              </div>
              <h3 className="font-bold text-[#1e1610] text-2xl mb-3">{p.title}</h3>
              <p className="text-[#6b5c4a] leading-relaxed font-light mb-6">{p.desc}</p>
              <div className="text-[#c4622d] font-bold text-sm flex items-center gap-2">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function UrgentNeeds() {
  const needs = [
    { label: 'Food for 52 children (3 meals/day)', amount: '$1,200/mo', hot: true },
    { label: 'School fees & learning supplies', amount: '$900/mo', hot: true },
    { label: 'Toiletries, clothing & hygiene', amount: '$350/mo', hot: false },
    { label: 'Water pump & piped water', amount: '$2,500 once', hot: false },
    { label: 'Perimeter fence & night security', amount: '$4,000 once', hot: false },
    { label: 'New dormitory construction', amount: '$15,000 once', hot: false },
  ]
  return (
    <section className="py-32 bg-[#2d5a3d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554652532-bc503a3072cb?w=1600&h=800&fit=crop&auto=format')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a3d] to-[#1a3825]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-white/10 text-[#f0c94a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">Immediate Needs</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Where Your Gift Goes</h2>
          <p className="text-white/80 text-lg font-light">Transparent and direct — every donation reaches the children on our doorstep and waiting list.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {needs.map(n => (
            <div key={n.label} className="flex items-center justify-between glass hover:bg-white/20 rounded-2xl px-6 py-5 transition-all hover:scale-[1.02] cursor-default">
              <div className="flex items-center gap-4">
                <span className={`w-3 h-3 rounded-full shrink-0 shadow-lg ${n.hot ? 'bg-[#c4622d] shadow-[#c4622d]/50 animate-pulse' : 'bg-white/30'}`} />
                <span className="text-white font-medium">{n.label}</span>
              </div>
              <span className="text-[#f0c94a] font-bold shrink-0 ml-4 bg-[#1a3825]/50 px-3 py-1 rounded-full text-sm">{n.amount}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/donate" className="group inline-flex items-center gap-3 bg-[#f0c94a] hover:bg-white text-[#1e1610] px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(240,201,74,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105">
            Make a Donation <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function DonateCallout() {
  return (
    <section className="py-0 relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#c4622d] to-[#8c3d14] rounded-[3rem] overflow-hidden shadow-2xl p-10 md:p-16 lg:p-20 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 blur-[100px] rounded-full"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                $35 Feeds One Child for a Month.
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
                A monthly gift — no matter the size — provides stability that these children have never known. Your donation is the difference between hunger and hope.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate" className="bg-white text-[#c4622d] hover:bg-[#fdf6ee] px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl">
                  Donate Monthly
                </Link>
                <Link to="/get-involved" className="glass hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all">
                  Other Ways to Help
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { amount: '$15', desc: 'Personal hygiene & toiletries for one child/month' },
                { amount: '$35', desc: 'Feeds one child three meals a day for 30 days' },
                { amount: '$75', desc: 'School fees and supplies for one child per term' },
                { amount: '$150', desc: 'Complete monthly sponsorship for one child' },
              ].map(d => (
                <div key={d.amount} className="glass rounded-3xl p-6 text-white hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">{d.amount}</div>
                  <div className="text-white/80 text-sm leading-relaxed font-light">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsPreview() {
  const articles = [
    { date: 'August 2025', tag: 'Update', title: '52 Children, Zero Beds to Spare: Our Urgent Call for Expansion', excerpt: 'Our dormitories are beyond capacity. Boys and girls share overcrowded rooms. We are calling on donors to help us build two new housing blocks before the rainy season.' },
    { date: 'June 2025', tag: 'Success Story', title: 'James and David Graduate Vocational College', excerpt: 'Two brothers who arrived at Lemalah as destitute children have now completed their vocational training and are entering the workforce with skills and confidence.' },
    { date: 'April 2025', tag: 'Community', title: 'Youth Groups Organize Volunteer Day at the Home', excerpt: 'Over 40 young volunteers from nearby towns came to wash clothes, counsel children, and bring food — a testament to growing community support.' },
  ]
  return (
    <section className="py-32 bg-white pt-48 -mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#c4622d] text-xs font-bold uppercase tracking-widest mb-4 block">Latest Updates</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610]">News from the Home</h2>
          </div>
          <Link to="/news" className="group inline-flex items-center gap-2 text-[#c4622d] font-bold hover:text-[#8c3d14] transition-colors">
            All news <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map(a => (
            <Link key={a.title} to="/news" className="group bg-[#fdf6ee] rounded-3xl p-8 h-full border border-transparent hover:border-[#c4622d]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white text-[#c4622d] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">{a.tag}</span>
                <span className="text-[#8a7968] text-sm font-medium">{a.date}</span>
              </div>
              <h3 className="font-extrabold text-[#1e1610] text-xl mb-4 group-hover:text-[#c4622d] transition-colors leading-snug">{a.title}</h3>
              <p className="text-[#6b5c4a] text-sm leading-relaxed font-light flex-grow">{a.excerpt}</p>
              <div className="mt-6 text-[#c4622d] font-bold text-sm flex items-center gap-2">
                Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnerLogos() {
  const partners = ['UNICEF', 'PEPFAR', 'CDC Kenya', 'Together for Girls', 'Local Church Network', 'USA Diaspora Support']
  return (
    <section className="py-16 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[#8a7968] text-xs font-bold uppercase tracking-widest mb-10">Supported by & Working Alongside</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map(p => (
            <span key={p} className="text-[#8a7968]/40 font-extrabold text-lg md:text-xl uppercase tracking-wider hover:text-[#c4622d] transition-colors cursor-default grayscale hover:grayscale-0">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
