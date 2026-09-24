import { Link } from 'react-router'
import { useSEO } from '../hooks/useSEO'

export default function Impact() {
  useSEO({
    title: 'Our Impact – Transforming Lives in Kenya Since 2006',
    description:
      'See the measurable impact of Rafikidz Haven: 50+ children sheltered, 18+ years of service, 100% donation transparency, and alumni thriving in work and higher education in Kenya.',
    path: '/impact',
    keywords:
      'Rafikidz Haven impact, charity results Kenya, children home impact Kenya, transparent donations Kenya, orphanage outcomes Kenya',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rafikidzhaven.org/' },
          { '@type': 'ListItem', position: 2, name: 'Impact', item: 'https://rafikidzhaven.org/impact' },
        ],
      },
    ],
  })
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1554652532-bc503a3072cb?w=1600&h=700&fit=crop&auto=format" alt="Children playing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-24">
          <span className="inline-block text-[#f0c94a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Our Impact</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight mb-5" style={{ fontFamily: 'Fraunces, serif' }}>18 Years of Measurable Change</h1>
          <p className="text-white/65 text-lg max-w-xl">From 4 children in a single pastor's home to a certified community organization changing futures.</p>
        </div>
      </section>

      <KeyMetrics />
      <OutcomeStories />
      <ContextSection />
      <Accountability />
      <AnnualHighlights />
      <CTASection />
    </div>
  )
}

function KeyMetrics() {
  const metrics = [
    { n: '52', label: 'Children Currently in Care', sub: 'plus a long waiting list' },
    { n: '4', label: 'Founded With', sub: 'four siblings in 2006' },
    { n: '18+', label: 'Years Running', sub: 'continuous since 2006' },
    { n: '100%', label: 'Direct Aid', sub: 'no overhead waste' },
    { n: '5 Acres', label: 'Land Owned', sub: 'in Mai-Mahiu, Nakuru' },
    { n: '60+', label: 'Chickens', sub: 'for daily egg nutrition' },
    { n: '$330/mo', label: 'From South Africa', sub: 'loyal supporter since 2007' },
    { n: '$700/mo', label: 'From USA Supporters', sub: 'two friends giving $350 each' },
  ]
  return (
    <section className="py-20 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">By the Numbers</span>
          <h2 className="text-4xl font-bold text-[#1e1610] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>The Story Behind the Statistics</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {metrics.map(m => (
            <div key={m.label} className="bg-white border border-[#eab3080d] rounded-2xl p-6 text-center hover:border-[#eab30833] transition-colors">
              <div className="text-3xl font-bold text-[#eab308]" style={{ fontFamily: 'Fraunces, serif' }}>{m.n}</div>
              <div className="font-semibold text-[#1e1610] text-sm mt-2">{m.label}</div>
              <div className="text-[#8a7968] text-xs mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutcomeStories() {
  const outcomes = [
    {
      title: 'Street Boys to Graduates',
      desc: 'Wilson Muga and James Gitonga — the first two children — arrived as street boys running from violence and abuse. They are now independent adults. Their sisters, who came after their mother was murdered, are also grown and living with dignity.',
      metric: '4 siblings, 1 family, 18 years of transformation',
      img: 'https://images.unsplash.com/photo-1664990594674-418f27010fee?w=600&h=400&fit=crop&auto=format',
    },
    {
      title: 'Vocational Graduates Entering the Workforce',
      desc: 'James Wamalwa and David Wasike — brothers from western Kenya whose pastor father abandoned them — both finished high school and are now completing vocational college. They are building careers and will soon support themselves entirely.',
      metric: 'First generation in their family to earn professional qualifications',
      img: 'https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=600&h=400&fit=crop&auto=format',
    },
    {
      title: "A Grandmother's Health Restored",
      desc: 'When we accepted Hannah, John, Jackie, and Lucas from their ailing diabetic grandmother in Kipipiri, she told us her condition improved significantly once the burden was lifted. Helping one child ripples through an entire family.',
      metric: 'Four children placed. One grandmother healed.',
      img: 'https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=600&h=400&fit=crop&auto=format',
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">Success Stories</span>
          <h2 className="text-4xl font-bold text-[#1e1610] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>Real Outcomes, Real Lives</h2>
        </div>
        <div className="space-y-8">
          {outcomes.map((o, i) => (
            <div key={o.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold text-[#1e1610] mb-4" style={{ fontFamily: 'Fraunces, serif' }}>{o.title}</h3>
                <p className="text-[#6b5c4a] leading-relaxed mb-5">{o.desc}</p>
                <div className="bg-[#eab3080d] border-l-4 border-[#eab308] rounded-r-xl px-5 py-3">
                  <p className="text-[#eab308] font-semibold text-sm">{o.metric}</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video bg-[#eab30811]">
                <img src={o.img} alt={o.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContextSection() {
  return (
    <section className="py-20 bg-[#2d5a3d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">The Context</span>
            <h2 className="text-4xl font-bold mt-3 mb-6" style={{ fontFamily: 'Fraunces, serif' }}>Why This Work Matters</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>Kenya has approximately 3.6 million orphaned or vulnerable children under 18. About 25% of the population lives below the poverty line, earning less than $3.20/day.</p>
              <p>A 2019 study by the CDC and UNICEF found that approximately 50% of all Kenyan children experience physical, emotional, or sexual violence. Tribal conflicts since 1992 have displaced thousands of families across the Rift Valley.</p>
              <p>Children from these circumstances face a single focus: where will their next meal come from? Education, shelter, clothing — these are luxuries they cannot imagine. Many end up as street children, begging or stealing to survive.</p>
              <p>Lemalah Children's Home is one response to this crisis. It is not enough — but it is real, it is local, and it is working.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '3.6M', label: 'Orphaned/vulnerable children in Kenya' },
              { n: '25%', label: 'Kenyans below $3.20/day poverty line' },
              { n: '50%', label: 'Kenyan children experience some form of violence' },
              { n: '8M+', label: 'Kenyans living in poverty (2024 estimate)' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold text-[#f0c94a]" style={{ fontFamily: 'Fraunces, serif' }}>{s.n}</div>
                <div className="text-white/60 text-xs mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Accountability() {
  return (
    <section className="py-20 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">Accountability</span>
          <h2 className="text-4xl font-bold text-[#1e1610] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>How We Stay Accountable</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: '🏛️', title: 'Registered CBO', desc: 'Officially registered with the Kenya Ministry of Culture and Social Services.' },
            { icon: '📋', title: 'Project Advisory Committee', desc: 'A PAC meets quarterly to review programs, accounts, and audited statements.' },
            { icon: '📊', title: 'Audited Accounts', desc: 'Financial records are audited and reviewed regularly by the Director of Finance.' },
            { icon: '📬', title: 'Donor Reporting', desc: 'Supporters receive regular updates on how their donations are being used.' },
          ].map(a => (
            <div key={a.title} className="bg-white border border-[#eab3080d] rounded-2xl p-6">
              <div className="text-3xl mb-3">{a.icon}</div>
              <h3 className="font-bold text-[#1e1610] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>{a.title}</h3>
              <p className="text-[#6b5c4a] text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnnualHighlights() {
  const years = [
    { year: '2024', highlights: ['52 children in care — highest ever', 'Long waiting list established', 'Expansion funding appeal launched', '60+ chickens producing daily eggs'] },
    { year: '2023', highlights: ['James Wamalwa & David Wasike graduated', 'South Africa donor continued 17th year', 'New vegetable crops planted', 'Youth volunteer days increased to monthly'] },
    { year: '2022', highlights: ['Borehole repaired and operational', 'Hannah Njoki enrolled in secondary school', 'Local community group food drives started', 'Board of Directors formalized'] },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">Annual Highlights</span>
          <h2 className="text-4xl font-bold text-[#1e1610] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>Recent Years in Review</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {years.map(y => (
            <div key={y.year} className="border border-[#eab30811] rounded-2xl p-7">
              <div className="text-4xl font-bold text-[#eab308] mb-5" style={{ fontFamily: 'Fraunces, serif' }}>{y.year}</div>
              <ul className="space-y-3">
                {y.highlights.map(h => (
                  <li key={h} className="flex gap-3 text-[#6b5c4a] text-sm">
                    <span className="text-[#eab308] font-bold shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 bg-[#eab308]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Be Part of the Next 18 Years</h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">The impact is real and growing. Your support accelerates everything.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="bg-white text-[#eab308] hover:bg-[#fefce8] px-8 py-3 rounded-full font-bold transition-colors">Make a Donation</Link>
          <Link to="/get-involved" className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-colors">Get Involved</Link>
        </div>
      </div>
    </section>
  )
}
