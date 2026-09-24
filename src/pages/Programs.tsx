import { Link } from 'react-router'
import { useSEO } from '../hooks/useSEO'

export default function Programs() {
  useSEO({
    title: 'Our Programs – Holistic Care for Every Child',
    description:
      'Discover the six pillars of care at Rafikidz Haven: safe shelter, education, nutrition, healthcare, vocational skills, and emotional support for 50+ orphaned children in Kenya.',
    path: '/programs',
    keywords:
      'Kenya orphanage programs, children education Kenya, holistic child care Kenya, vocational training Kenya children, Rafikidz Haven programs',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rafikidzhaven.org/' },
          { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://rafikidzhaven.org/programs' },
        ],
      },
    ],
  })
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=1600&h=700&fit=crop&auto=format" alt="Teacher with children" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610] via-[#1e1610]/60 to-[#1e1610]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c94a]" />
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">Programs & Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight mb-6">
            Holistic Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c94a] to-[#eab308]">Whole Lives</span>
          </h1>
          <p className="text-white/70 text-xl font-light max-w-xl">We don't just keep children alive. We equip them to thrive.</p>
        </div>
      </section>

      <ShelterProgram />
      <EducationProgram />
      <FoodFarmingProgram />
      <HealthProgram />
      <VocationalProgram />
      <CommunityProgram />
      <FuturePrograms />
      <CTA />
    </div>
  )
}

function ProgramSection({ id, tag, title, desc, details, img, reverse = false, dark = false }: {
  id: string; tag: string; title: string; desc: string; details: string[]; img: string; reverse?: boolean; dark?: boolean
}) {
  return (
    <section id={id} className={`py-32 ${dark ? 'bg-[#1e1610]' : 'bg-white'} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div>
            <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${dark ? 'bg-white/10 text-[#f0c94a] border border-white/15' : 'bg-[#fefce8] text-[#eab308]'}`}>{tag}</div>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 leading-tight ${dark ? 'text-white' : 'text-[#1e1610]'}`}>{title}</h2>
            <p className={`leading-relaxed mb-8 text-lg font-light ${dark ? 'text-white/70' : 'text-[#6b5c4a]'}`}>{desc}</p>
            <ul className="space-y-4">
              {details.map(d => (
                <li key={d} className={`flex gap-4 items-start ${dark ? 'text-white/70' : 'text-[#6b5c4a]'}`}>
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#eab308] to-[#fde047] flex items-center justify-center text-white text-xs shrink-0 mt-0.5 shadow-md">→</span>
                  <span className="text-sm leading-relaxed font-light">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-black/20 group">
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ShelterProgram() {
  return (
    <ProgramSection
      id="shelter"
      tag="Program 1 · Safe Shelter"
      title="A Home That Belongs to Them"
      desc="Every child at Lemalah has a bed, a roof, and the security of knowing they will not be turned away. Our 5-acre compound in Mai-Mahiu houses dormitories for boys and girls, a kitchen, bathrooms, and open grounds for play."
      details={[
        'Separate dormitories for boys and girls (expansion underway)',
        '5-acre compound with secure grounds in Mai-Mahiu, Nakuru County',
        'On-site borehole providing clean drinking water',
        'Perimeter fence and security planned for 2025',
        'New dormitory construction in the funding pipeline',
      ]}
      img="https://images.unsplash.com/photo-1560603248-7a0649f99bed?w=700&h=500&fit=crop&auto=format"
    />
  )
}

function EducationProgram() {
  return (
    <ProgramSection
      id="education"
      tag="Program 2 · Education"
      title="From Primary School to University"
      desc="We believe education is the single most powerful tool we can give a child. We pay school fees, buy uniforms, provide books and supplies, and support children through primary, secondary, university, and vocational training."
      details={[
        'Full school fees coverage from Grade 1 through Form 4 (secondary)',
        'University and college sponsorship for qualifying graduates',
        'School supplies, uniforms, and textbooks provided',
        'Homework support and academic mentorship within the home',
        'Future vision: build our own school on-site within 3–7 years',
      ]}
      img="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&h=500&fit=crop&auto=format"
      reverse
      dark
    />
  )
}

function FoodFarmingProgram() {
  return (
    <ProgramSection
      id="food"
      tag="Program 3 · Food & Farming"
      title="Three Meals a Day, Every Day"
      desc="Three meals a day for 52 children. We grow a significant portion of our own food on-site, reducing costs and teaching children about sustainable agriculture and self-sufficiency."
      details={[
        'Three nutritious meals provided to all children every day',
        'On-site garden: vegetables, tomatoes, onions, corn, beans, peas, and fruits',
        '60 chickens for eggs as a daily protein source',
        'One dairy cow (with plans to expand the herd)',
        'Local community groups regularly donate food and supplies',
      ]}
      img="https://images.unsplash.com/photo-1764001032216-360a43576788?w=700&h=500&fit=crop&auto=format"
    />
  )
}

function HealthProgram() {
  return (
    <ProgramSection
      id="health"
      tag="Program 4 · Healthcare"
      title="Health & Personal Wellbeing"
      desc="Physical health, hygiene, and emotional wellbeing are non-negotiable. We provide everything from toothpaste to sanitary products, medical care to counseling."
      details={[
        'Primary healthcare access for all children',
        'Clean borehole water on-site (water pump installation planned)',
        'Toiletries, bathing soap, and dental hygiene for every child',
        'Sanitary products and feminine hygiene for all girls',
        'Emotional support, counseling, and community bonding activities',
      ]}
      img="https://images.unsplash.com/photo-1553775927-a071d5a6a39a?w=700&h=500&fit=crop&auto=format"
      reverse
      dark
    />
  )
}

function VocationalProgram() {
  return (
    <ProgramSection
      id="vocational"
      tag="Program 5 · Vocational Skills"
      title="Trades, Tech & Life Skills"
      desc="For children who complete secondary school or are better suited to trades, we sponsor vocational college placements. Our long-term vision includes building a polytechnic on our own land."
      details={[
        'Vocational college sponsorship for eligible graduates',
        'Trades focus: construction, tailoring, ICT, mechanics, agriculture',
        'Life skills training: financial literacy, communication, self-reliance',
        'Computer technology training planned as part of the polytechnic vision',
        'Employment pathways and alumni mentorship network (in development)',
      ]}
      img="https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=700&h=500&fit=crop&auto=format"
    />
  )
}

function CommunityProgram() {
  return (
    <ProgramSection
      id="community"
      tag="Program 6 · Community"
      title="Integration, Recreation & Joy"
      desc="Children at Lemalah are not isolated. They are part of a living community — local youth groups visit regularly, church congregations support them, and recreational activities nurture joy and belonging."
      details={[
        'Regular visits from local youth groups who volunteer and socialize',
        'Church-based support networks providing food, counsel, and community',
        'Recreational facilities and outdoor play areas',
        'Annual events, celebrations, and milestone recognition',
        'Future plans to open community outreach programs for village children',
      ]}
      img="https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=700&h=500&fit=crop&auto=format"
      reverse
      dark
    />
  )
}

function FuturePrograms() {
  const future = [
    { icon: '🏫', title: 'On-Site Primary & Secondary School', timeline: 'Within 3–7 years', desc: 'Classrooms, qualified teachers, and a full school on our land — serving both our children and the wider community.' },
    { icon: '🔧', title: 'Vocational Polytechnic', timeline: '7–10 years', desc: 'A trades and technology college for young adults — ICT, construction, agriculture, and more.' },
    { icon: '🌍', title: 'Branch Homes Across Kenya', timeline: 'Long-term vision', desc: 'Replicating the Lemalah model in other regions to serve the most vulnerable children wherever they are.' },
  ]
  return (
    <section className="py-32 bg-[#2d5a3d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a3d] to-[#1a3825]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block glass text-[#f0c94a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Coming Soon</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Future Programs</h2>
          <p className="text-white/60 max-w-lg mx-auto text-lg font-light">With your support, these are the next chapters we are writing.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {future.map(f => (
            <div key={f.title} className="glass rounded-3xl p-10 text-white hover:bg-white/15 transition-all hover:-translate-y-1 group">
              <div className="text-5xl mb-6">{f.icon}</div>
              <span className="inline-block bg-[#f0c94a]/20 text-[#f0c94a] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">{f.timeline}</span>
              <h3 className="text-2xl font-extrabold mt-2 mb-4 group-hover:text-[#f0c94a] transition-colors">{f.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#eab308] to-[#ca8a04] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[80px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Your Gift Powers These Programs</h2>
        <p className="text-white/80 mb-12 max-w-xl mx-auto text-xl font-light">Food, school, shelter, healthcare — none of it happens without funding. Every dollar directly supports a child in our care.</p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link to="/donate" className="bg-white text-[#eab308] hover:bg-[#fefce8] px-10 py-4 rounded-full font-extrabold text-lg transition-all hover:scale-105 shadow-xl">Donate Now</Link>
          <Link to="/vision" className="glass hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">Our Vision →</Link>
        </div>
      </div>
    </section>
  )
}
