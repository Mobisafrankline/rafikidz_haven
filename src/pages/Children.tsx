import { useState } from 'react'
import { Link } from 'react-router'

const ALL_CHILDREN = [
  { name: 'Wilson Muga', status: 'Adult — Working', level: 'Alumni', story: 'One of the very first two children, rescued as a street boy from Githurai in 2006. His arrival sparked the entire movement that became Lemalah.', img: 'https://images.unsplash.com/photo-1547496613-4e19af6736dc?w=400&h=300&fit=crop&auto=format' },
  { name: 'James Gitonga', status: 'Adult — Working', level: 'Alumni', story: 'Wilson\'s brother and the second of the founding children. Together they started everything. Now adults living independently.', img: 'https://images.unsplash.com/photo-1664990594674-418f27010fee?w=400&h=300&fit=crop&auto=format' },
  { name: 'Hannah Njoki', status: 'Form 3, High School', level: 'Secondary', story: 'Came with her siblings when their ailing diabetic grandmother from Kipipiri could no longer care for them. Bright, ambitious, and aspiring to university.', img: 'https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=400&h=300&fit=crop&auto=format' },
  { name: 'John Cena Mburu', status: 'Form 2, High School', level: 'Secondary', story: 'Younger brother of Hannah. His grandmother\'s condition improved markedly after Lemalah lifted the burden of care.', img: 'https://images.unsplash.com/photo-1760808574067-27ce83df8ed6?w=400&h=300&fit=crop&auto=format' },
  { name: 'Jackie Wairimu', status: 'Primary School', level: 'Primary', story: 'One of four siblings brought by their grandmother from Nyandarua. She has blossomed in the safe and loving environment at Lemalah.', img: 'https://images.unsplash.com/photo-1770842655322-bcfd1c4be229?w=400&h=300&fit=crop&auto=format' },
  { name: 'Karuga Lucas', status: 'Junior Secondary', level: 'Secondary', story: 'The youngest of the siblings from Kipipiri. He arrived as a small child and is growing into a confident young person.', img: 'https://images.unsplash.com/photo-1761342608658-6b13accf86c6?w=400&h=300&fit=crop&auto=format' },
  { name: 'James Wamalwa', status: 'Vocational College', level: 'Tertiary', story: 'His father, a pastor, disappeared and never returned. James came from western Kenya, completed high school, and is building a vocation.', img: 'https://images.unsplash.com/photo-1520542764791-6f45f69be58d?w=400&h=300&fit=crop&auto=format' },
  { name: 'David Wasike', status: 'Vocational College', level: 'Tertiary', story: 'James Wamalwa\'s brother. Both arrived together and both completed high school. Now in vocational training side by side.', img: 'https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=400&h=300&fit=crop&auto=format' },
  { name: 'James Mucheke', status: 'Secondary School', level: 'Secondary', story: 'Brought in by his grandmother after another grandmother heard about Lemalah and personally came to request help for him.', img: 'https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?w=400&h=300&fit=crop&auto=format' },
  { name: 'Elijah Gitau', status: 'Secondary School', level: 'Secondary', story: 'James Mucheke\'s brother. Both arrived after their grandmother made the journey to Mai-Mahiu to plead their case.', img: 'https://images.unsplash.com/photo-1547496614-d145e2fa88ed?w=400&h=300&fit=crop&auto=format' },
  { name: '42 More Children', status: 'Various Levels', level: 'Various', story: 'From toddlers to teenagers — children orphaned, abandoned, abused, or left by single parents who passed away. Each with a name, a story, and now a home.', img: 'https://images.unsplash.com/photo-1637148734636-906c24feeb55?w=400&h=300&fit=crop&auto=format' },
  { name: 'The Waiting List', status: 'Awaiting Placement', level: 'Waiting', story: 'Siblings of current children, village children in crisis, referred cases from across Kenya. They need us. Our resources must grow to reach them.', img: 'https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=400&h=300&fit=crop&auto=format' },
]

const LEVELS = ['All', 'Primary', 'Secondary', 'Tertiary', 'Alumni', 'Waiting']

const LEVEL_COLORS: Record<string, string> = {
  Primary: 'bg-[#4a8c6022] text-[#2d5a3d]',
  Secondary: 'bg-[#c4622d11] text-[#c4622d]',
  Tertiary: 'bg-[#d4a01711] text-[#8c6500]',
  Alumni: 'bg-[#1e161011] text-[#6b5c4a]',
  Waiting: 'bg-red-50 text-red-600',
  Various: 'bg-gray-100 text-gray-600',
}

export default function Children() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? ALL_CHILDREN : ALL_CHILDREN.filter(c => c.level === filter)

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1637148734636-906c24feeb55?w=1600&h=700&fit=crop&auto=format" alt="Children at Lemalah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-24">
          <span className="inline-block text-[#f0c94a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Our Children</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight mb-5" style={{ fontFamily: 'Fraunces, serif' }}>52 Children. 52 Stories.</h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">Each child arrived carrying a different burden. Each is now building a different future.</p>
        </div>
      </section>

      <section className="py-6 bg-[#fdf6ee] border-b border-[#c4622d11] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {LEVELS.map(l => (
              <button
                key={l}
                onClick={() => setFilter(l)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${filter === l ? 'bg-[#c4622d] text-white' : 'bg-white border border-[#c4622d22] text-[#6b5c4a] hover:border-[#c4622d]'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(c => (
              <div key={c.name} className="bg-white rounded-2xl overflow-hidden border border-[#c4622d0d] hover:shadow-lg transition-all group">
                <div className="aspect-video overflow-hidden bg-[#c4622d11]">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${LEVEL_COLORS[c.level] || 'bg-gray-100 text-gray-600'}`}>{c.level}</span>
                    <span className="text-[#8a7968] text-xs">{c.status}</span>
                  </div>
                  <h3 className="font-bold text-[#1e1610] text-lg mb-2" style={{ fontFamily: 'Fraunces, serif' }}>{c.name}</h3>
                  <p className="text-[#6b5c4a] text-sm leading-relaxed">{c.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#c4622d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'Fraunces, serif' }}>There Are Dozens More Who Need Us</h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">
            Siblings of current children are suffering. Neighboring villages have desperate cases. Our waiting list grows every month. Your donation expands our capacity to say "yes."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="bg-white text-[#c4622d] hover:bg-[#fdf6ee] px-8 py-3 rounded-full font-bold transition-colors">Sponsor a Child</Link>
            <Link to="/get-involved" className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-colors">Other Ways to Help</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
