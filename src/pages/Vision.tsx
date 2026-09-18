import { Link } from 'react-router'

export default function Vision() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1669196741160-8fc1c0ca925b?w=1600&h=700&fit=crop&auto=format" alt="Kenyan landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-24">
          <span className="inline-block text-[#f0c94a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Vision & Goals</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight mb-5" style={{ fontFamily: 'Fraunces, serif' }}>Building the Future We Believe In</h1>
          <p className="text-white/65 text-lg max-w-xl">From a children's home to a school, to a polytechnic, to branches across Kenya — this is where we are headed.</p>
        </div>
      </section>

      <MissionStatement />
      <RoadmapSection />
      <ObjectivesSection />
      <FundingGoals />
      <SustainabilitySection />
      <CallToAction />
    </div>
  )
}

function MissionStatement() {
  return (
    <section className="py-20 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">Our North Star</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1610] mt-3 mb-8 leading-tight" style={{ fontFamily: 'Fraunces, serif' }}>
            To see every child grow into a responsible, disciplined, and confident adult — equipped to build a life anywhere in the world.
          </h2>
          <p className="text-[#6b5c4a] text-lg leading-relaxed">
            We place the highest values on discipline, education, and spiritual grounding. Our joy will be complete when every child we have cared for is living with dignity, serving their community, and raising families of their own.
          </p>
        </div>
      </div>
    </section>
  )
}

function RoadmapSection() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Immediate Priorities',
      timeline: 'Now — 2026',
      color: 'bg-[#eab308]',
      textColor: 'text-[#eab308]',
      borderColor: 'border-[#eab308]',
      goals: [
        { goal: 'Install water pump and piped running water', cost: '$2,500', status: 'Unfunded' },
        { goal: 'Build perimeter fence and install security gate', cost: '$4,000', status: 'Unfunded' },
        { goal: 'Hire a trained night security guard', cost: '$200/mo', status: 'Unfunded' },
        { goal: 'Construct new boys\' dormitory block', cost: '$8,000', status: 'Unfunded' },
        { goal: 'Construct new girls\' dormitory block', cost: '$7,000', status: 'Unfunded' },
        { goal: 'Build a modern kitchen with proper equipment', cost: '$3,500', status: 'Unfunded' },
        { goal: 'Expand chicken flock (60 → 150 birds)', cost: '$600', status: 'Unfunded' },
        { goal: 'Purchase two additional dairy cows', cost: '$1,200', status: 'Unfunded' },
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Near-Future Growth',
      timeline: '2027 — 2030',
      color: 'bg-[#2d5a3d]',
      textColor: 'text-[#2d5a3d]',
      borderColor: 'border-[#2d5a3d]',
      goals: [
        { goal: 'Build 4–6 classrooms on the 5-acre compound', cost: '$20,000', status: 'Planning' },
        { goal: 'Hire 4–6 qualified primary school teachers', cost: '$3,000/mo', status: 'Planning' },
        { goal: 'Launch Lemalah Community Primary School', cost: 'Ongoing', status: 'Planning' },
        { goal: 'Accept 20+ additional children from waiting list', cost: '$1,800/mo', status: 'Planning' },
        { goal: 'Develop computer lab for children and community', cost: '$8,000', status: 'Planning' },
        { goal: 'Formalize alumni mentorship network', cost: '$500/mo', status: 'Planning' },
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Long-Term Vision',
      timeline: '2030 — 2035+',
      color: 'bg-[#d4a017]',
      textColor: 'text-[#8c6500]',
      borderColor: 'border-[#d4a017]',
      goals: [
        { goal: 'Complete secondary school (Form 1–4) on-site', cost: '$50,000+', status: 'Vision' },
        { goal: 'Build vocational polytechnic on purchased adjacent land', cost: '$80,000+', status: 'Vision' },
        { goal: 'Launch ICT, trades, and agricultural courses', cost: 'Ongoing', status: 'Vision' },
        { goal: 'Open first branch home in another Kenyan county', cost: '$30,000', status: 'Vision' },
        { goal: 'Establish self-sustaining income through the school', cost: 'Revenue', status: 'Vision' },
        { goal: 'Expand to branches in other African countries', cost: 'TBD', status: 'Vision' },
      ],
    },
  ]

  const STATUS_COLORS: Record<string, string> = {
    Unfunded: 'bg-red-50 text-red-600',
    Planning: 'bg-[#f0c94a22] text-[#8c6500]',
    Vision: 'bg-[#4a8c6022] text-[#2d5a3d]',
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">The Roadmap</span>
          <h2 className="text-4xl font-bold text-[#1e1610] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>Three Phases, One Direction</h2>
        </div>
        <div className="space-y-8">
          {phases.map(p => (
            <div key={p.phase} className={`border-2 ${p.borderColor} rounded-3xl overflow-hidden`}>
              <div className={`${p.color} px-8 py-5 flex flex-col md:flex-row md:items-center justify-between gap-2`}>
                <div>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{p.phase}</span>
                  <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Fraunces, serif' }}>{p.title}</h3>
                </div>
                <span className="text-white/70 text-sm font-semibold">{p.timeline}</span>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {p.goals.map(g => (
                    <div key={g.goal} className="flex items-start justify-between gap-4 bg-[#fefce8] rounded-xl px-5 py-3">
                      <span className="text-[#6b5c4a] text-sm">{g.goal}</span>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${STATUS_COLORS[g.status]}`}>{g.status}</span>
                        <span className={`text-xs font-bold ${p.textColor}`}>{g.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ObjectivesSection() {
  const objectives = [
    'Provide orphans, semi-orphans, and destitute children with the foundation to become useful members of society.',
    'Rekindle children\'s potential by offering creative opportunities in a loving, empathetic, and accepting environment.',
    'Create a secure space where children can play, learn, and enjoy a full childhood.',
    'Provide quality basic, secondary, and higher education to all children in our care.',
    'Deliver welfare services including lodging, nutrition, health, and recreation.',
    'Support children who wish to pursue further study, vocational training, or skilled trades.',
    'Facilitate the full physical, intellectual, and mental development of every child.',
    'Prepare young adults for employment and self-sufficiency through life skills and vocational training.',
  ]
  return (
    <section className="py-20 bg-[#2d5a3d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">Our Objectives</span>
          <h2 className="text-4xl font-bold text-white mt-2" style={{ fontFamily: 'Fraunces, serif' }}>What We Are Working Toward</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {objectives.map((o, i) => (
            <div key={i} className="bg-white/8 rounded-2xl p-6 text-white">
              <div className="text-[#f0c94a] text-2xl font-bold mb-3" style={{ fontFamily: 'Fraunces, serif' }}>0{i + 1}</div>
              <p className="text-white/65 text-sm leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FundingGoals() {
  const goals = [
    { label: 'Phase 1: Immediate Infrastructure', target: '$26,800', raised: 15, description: 'Water pump, fence, dormitories, kitchen, livestock' },
    { label: 'Phase 2: School Construction', target: '$35,000', raised: 5, description: 'Classrooms, furniture, teachers, lab' },
    { label: 'Phase 3: Polytechnic & Expansion', target: '$130,000+', raised: 2, description: 'Vocational college and branch homes' },
  ]
  return (
    <section className="py-20 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">Funding Progress</span>
          <h2 className="text-4xl font-bold text-[#1e1610] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>Where We Stand</h2>
          <p className="text-[#6b5c4a] mt-2 max-w-lg">Our capital goals by phase. Monthly operational costs are separate and ongoing.</p>
        </div>
        <div className="space-y-6 max-w-3xl">
          {goals.map(g => (
            <div key={g.label} className="bg-white border border-[#eab3080d] rounded-2xl p-7">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-bold text-[#1e1610]" style={{ fontFamily: 'Fraunces, serif' }}>{g.label}</h3>
                  <p className="text-[#8a7968] text-sm mt-0.5">{g.description}</p>
                </div>
                <span className="text-[#eab308] font-bold text-xl shrink-0" style={{ fontFamily: 'Fraunces, serif' }}>{g.target}</span>
              </div>
              <div className="h-3 bg-[#eab3080d] rounded-full overflow-hidden">
                <div className="h-full bg-[#eab308] rounded-full transition-all" style={{ width: `${g.raised}%` }} />
              </div>
              <div className="flex justify-between text-xs text-[#8a7968] mt-2">
                <span>{g.raised}% funded</span>
                <span>{100 - g.raised}% remaining</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SustainabilitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden aspect-video bg-[#eab30811]">
            <img
              src="https://images.unsplash.com/photo-1746401809231-4c1ad2c1e161?w=700&h=500&fit=crop&auto=format"
              alt="Sustainable farming"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[#eab308] text-xs font-bold uppercase tracking-widest">Sustainability</span>
            <h2 className="text-4xl font-bold text-[#1e1610] mt-3 mb-6" style={{ fontFamily: 'Fraunces, serif' }}>Building Self-Sufficiency</h2>
            <p className="text-[#6b5c4a] leading-relaxed mb-5">
              Lemalah is not designed to be permanently dependent on donations. Our long-term sustainability strategy involves becoming partially self-funding through:
            </p>
            <div className="space-y-4">
              {[
                { icon: '🌿', title: 'Agricultural Production', desc: 'Growing food on our 5 acres reduces costs. We plan to sell surplus crops to the local market.' },
                { icon: '🐄', title: 'Dairy and Poultry', desc: 'Expanding our herd and flock will produce income from milk and eggs beyond our own consumption.' },
                { icon: '🏫', title: 'Tuition Revenue', desc: 'When the school is built, fee-paying community children will help subsidize the home\'s children.' },
                { icon: '💼', title: 'Alumni Employment', desc: 'As more children graduate and work, our alumni network will contribute back to the institution that raised them.' },
              ].map(s => (
                <div key={s.title} className="flex gap-4">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-[#1e1610] text-sm">{s.title}</div>
                    <div className="text-[#6b5c4a] text-sm mt-0.5 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20 bg-[#eab308]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Fraunces, serif' }}>
          This Vision Needs Your Partnership
        </h2>
        <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          We are not asking for charity. We are inviting you into a long-term investment in children who will go on to change Kenya — and possibly the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="bg-white text-[#eab308] hover:bg-[#fefce8] px-10 py-4 rounded-full font-bold text-base transition-colors">Fund a Phase →</Link>
          <Link to="/contact" className="border-2 border-white/60 text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-base transition-colors">Discuss Partnership</Link>
        </div>
      </div>
    </section>
  )
}
