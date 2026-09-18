import { Link } from 'react-router'

export default function About() {
  return (
    <div>
      <PageHero
        tag="About Us"
        title="Born from a Single Act of Compassion"
        sub="Lemalah Children's Home began with four children, one pastor, and an unshakeable belief that every child deserves a future."
        img="https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?w=1600&h=700&fit=crop&auto=format"
      />
      <OriginStory />
      <Timeline />
      <MissionValues />
      <BoardSection />
      <LocationSection />
      <CalloutBanner />
    </div>
  )
}

function PageHero({ tag, title, sub, img }: { tag: string; title: string; sub: string; img: string }) {
  return (
    <section className="relative min-h-[65vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={img} alt={title} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610] via-[#1e1610]/60 to-[#1e1610]/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
        <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f0c94a]" />
          <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">{tag}</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight mb-6">
          {title}
        </h1>
        <p className="text-white/70 text-xl max-w-xl leading-relaxed font-light">{sub}</p>
      </div>
    </section>
  )
}

function OriginStory() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fefce8]/50 blur-3xl -z-0 rounded-l-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-block bg-[#fefce8] text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Our Beginning</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-8 leading-tight">
              How It All <span className="text-[#eab308]">Started</span>
            </h2>
            <div className="space-y-5 text-[#6b5c4a] leading-relaxed text-lg font-light">
              <p>
                In 2006, Pastor Peter Warari was approached by a desperate family member who begged him to rescue two young street boys — Wilson Muga and James Gitonga — who had run away from violence and sexual abuse in Githurai, Nairobi.
              </p>
              <p>
                Pastor Warari took them in. Later, their mother was found murdered in coffee bushes near Juja. Their two sisters had nowhere to go, so they joined the boys. Four children. One household. A calling had begun.
              </p>
              <p>
                When people found out what Pastor Warari was doing, they started bringing other children — destitute, abandoned, orphaned. The numbers grew until his home could no longer hold them all.
              </p>
              <p>
                He reached out to Mrs. Theresiah W. Njogu, a church elder, for support. Together they built a semi-permanent structure on church land in Ndeiya, Limuru. Soon that too was overwhelmed. They sold a plot of land, purchased 5 acres in Mai-Mahiu, Nakuru County, and with the help of well-wishers and the community, built a new home for the growing family.
              </p>
              <p>
                Today, Lemalah Children's Home operates on those 5 acres with 52 children and a long waiting list of children who need us — and whom we cannot yet reach.
              </p>
            </div>
          </div>
          <div className="space-y-6 lg:pt-8">
            <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl shadow-[#eab308]/10 group">
              <img
                src="https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?w=700&h=400&fit=crop&auto=format"
                alt="Children in school uniforms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="bg-[#2d5a3d] rounded-3xl p-8 text-white">
              <p className="text-xl leading-relaxed font-medium mb-6">
                "We have never had to look for children that need our help. The children found us through concerned relatives and neighbors — and they have come to us from all over the country."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-base font-bold">TN</div>
                <div>
                  <div className="font-bold">Mrs. Theresiah W. Njogu</div>
                  <div className="text-white/60 text-sm">Chair, Board of Directors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const events = [
    { year: '2006', title: 'The First Four', desc: 'Pastor Warari takes in two street boys and their two sisters in Kahawa West, Nairobi.' },
    { year: '2008', title: 'Moving to Limuru', desc: 'A structure is built on church land in Ndeiya, Limuru to house the growing number of children.' },
    { year: '2011', title: '5 Acres in Mai-Mahiu', desc: 'Land purchased in Nakuru County using proceeds from a sold plot. Two structures built with community support.' },
    { year: '2015', title: 'Registered CBO', desc: "Lemalah Children's Home registers as a Community Based Organization with the Ministry of Culture and Social Services." },
    { year: '2019', title: 'Growing the Farm', desc: 'The home expands its food production — vegetables, corn, beans, chickens for eggs, and one dairy cow.' },
    { year: '2024', title: '52 Children & Counting', desc: 'The home reaches 52 children in care with a growing waiting list. Expansion plans underway.' },
    { year: '2030+', title: 'The Vision', desc: 'A full private school and polytechnic serving children at the home and in surrounding communities.' },
  ]
  return (
    <section className="py-32 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-[#eab308]/10 text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610]">18 Years of Faithful Service</h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#eab308] via-[#eab308]/30 to-transparent md:-translate-x-px" />
          <div className="space-y-10">
            {events.map((e, i) => (
              <div key={e.year} className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:flex flex-col md:w-1/2 ${i % 2 === 0 ? 'pr-12 items-end text-right' : 'pl-12 items-start text-left'}`}>
                  <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(196,98,45,0.1)] transition-shadow max-w-xs border border-[#eab308]/8">
                    <span className="text-[#eab308] font-extrabold text-2xl">{e.year}</span>
                    <h3 className="font-bold text-[#1e1610] text-lg mt-1 mb-2">{e.title}</h3>
                    <p className="text-[#6b5c4a] text-sm leading-relaxed font-light">{e.desc}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center z-10 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#eab308] to-[#fde047] shadow-lg shadow-[#eab308]/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>
                <div className="md:hidden flex-1 bg-white rounded-2xl p-5 shadow-sm border border-[#eab308]/8">
                  <span className="text-[#eab308] font-extrabold">{e.year}</span>
                  <h3 className="font-bold text-[#1e1610] mt-1 mb-2">{e.title}</h3>
                  <p className="text-[#6b5c4a] text-sm leading-relaxed font-light">{e.desc}</p>
                </div>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'pl-12' : 'pr-12'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionValues() {
  const values = [
    { icon: '🤲', title: 'Compassion First', desc: 'Every decision we make starts with asking: what does this child need? Not what is convenient, but what is right.' },
    { icon: '📖', title: 'Discipline & Education', desc: 'We believe a disciplined mind and a good education are the two most powerful tools we can give a child.' },
    { icon: '🌍', title: 'Community Rooted', desc: 'We are not imported charity. We are part of this community — sustained by local churches, neighbors, and the Kenyan diaspora.' },
    { icon: '🔭', title: 'Long-Term Thinking', desc: 'We are not in the business of temporary fixes. We plan for children to grow up, graduate, work, and build families of their own.' },
    { icon: '🔍', title: 'Transparency', desc: 'Every donation is tracked and reported. The Project Advisory Committee reviews accounts quarterly.' },
    { icon: '✨', title: 'Spiritual Foundation', desc: 'Our deepest aspiration is to see each child grow into a God-fearing, responsible adult who gives back to the world.' },
  ]
  return (
    <section className="py-32 bg-[#1e1610] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1547496614-d145e2fa88ed?w=1600&h=800&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block bg-white/10 text-[#f0c94a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-white/15">What We Stand For</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(v => (
            <div key={v.title} className="glass rounded-3xl p-8 hover:bg-white/15 transition-all hover:-translate-y-1 group">
              <div className="text-4xl mb-5">{v.icon}</div>
              <h3 className="font-extrabold text-white text-xl mb-3 group-hover:text-[#f0c94a] transition-colors">{v.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BoardSection() {
  const board = [
    { name: 'Mrs. Theresiah W. Njogu', role: 'Chair, Board of Directors', bio: "A church elder who co-founded the home with Pastor Warari. Her family in the USA became early supporters, funding construction and school fees." },
    { name: 'Ms. Lucy M. Njogu', role: 'Chief Executive Officer', bio: "Leads day-to-day operations, donor relations, and strategic planning for the home's growth and sustainability." },
    { name: 'Pastor Peter Warari', role: 'Director of Operations & Co-Founder', bio: 'The man who took in the first two street boys in 2006, sparking a movement of compassion that has never stopped growing.' },
    { name: 'Dr. Sophie N. Harris', role: 'Director of Finance', bio: 'Manages financial planning, donor reporting, and ensures every shilling is accounted for and directed to the children.' },
    { name: 'Pastor John K. Njogu', role: 'Director of Human Resources', bio: 'Oversees staff welfare, recruitment, and the spiritual and relational health of the Lemalah community.' },
    { name: 'Sharon W. Kinyanjui', role: 'IT Manager', bio: 'Manages digital communications, technology infrastructure, and donor outreach platforms for the organization.' },
  ]
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-[#fefce8] text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610]">Board of Directors</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {board.map(b => (
            <div key={b.name} className="bg-[#fefce8] border border-[#eab308]/8 rounded-3xl p-8 hover:border-[#eab308]/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eab308] to-[#fde047] flex items-center justify-center text-white font-extrabold text-xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#eab308]/25">
                {b.name.split(' ').map((w: string) => w[0]).slice(0, 2).join('')}
              </div>
              <div className="font-extrabold text-[#1e1610] text-lg mb-1">{b.name}</div>
              <div className="text-[#eab308] text-xs font-bold uppercase tracking-widest mb-4">{b.role}</div>
              <p className="text-[#6b5c4a] text-sm leading-relaxed font-light">{b.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="py-32 bg-[#fefce8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-white text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">Where We Are</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1610] mb-8 leading-tight">
              Mai-Mahiu,<br /><span className="text-[#eab308]">Nakuru County</span>
            </h2>
            <p className="text-[#6b5c4a] leading-relaxed mb-5 text-lg font-light">
              We are located in Mai-Mahiu — a village approximately 33 miles northwest of Nairobi, in Nakuru County along the Great Rift Valley escarpment. The land is fertile, the air is cool, and the community is tight-knit.
            </p>
            <p className="text-[#6b5c4a] leading-relaxed mb-10 text-lg font-light">
              Our 5-acre plot hosts the main dormitories, a kitchen, a borehole for clean water, vegetable gardens, chicken coops, and land earmarked for the future school.
            </p>
            <div className="space-y-4">
              {[
                ['📍', 'Mai-Mahiu, Nakuru County, Kenya'],
                ['🗺️', '~33 miles northwest of Nairobi City Center'],
                ['🌿', '5 acres — farming, housing & future school land'],
                ['💧', 'On-site borehole for clean drinking water'],
              ].map(([icon, text]) => (
                <div key={text as string} className="flex gap-4 items-center bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#eab308]/6">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-[#6b5c4a] font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl shadow-[#eab308]/15 group">
            <img
              src="https://images.unsplash.com/photo-1669196741160-8fc1c0ca925b?w=800&h=500&fit=crop&auto=format"
              alt="Kenyan landscape near Nakuru"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CalloutBanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#2d5a3d] to-[#1a3825] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1547496614-d145e2fa88ed?w=1600&h=600&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Help Us Write the Next Chapter</h2>
        <p className="text-white/70 mb-12 max-w-xl mx-auto text-xl font-light">52 children need us. Dozens more are waiting. Your support makes the difference.</p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link to="/donate" className="bg-[#f0c94a] text-[#1e1610] hover:bg-white px-10 py-4 rounded-full font-extrabold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20">
            Donate Now
          </Link>
          <Link to="/contact" className="glass hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
