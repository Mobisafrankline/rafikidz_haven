import { useState } from 'react'
import { Link } from 'react-router'
import { useSEO } from '../hooks/useSEO'

const ARTICLES = [
  {
    id: 1,
    tag: 'Urgent Appeal',
    date: 'September 2025',
    title: '52 Children, Zero Beds to Spare: We Need Your Help to Expand',
    excerpt: 'Our dormitories are beyond capacity. Boys and girls share crowded rooms. We are calling on donors worldwide to help fund two new housing blocks before the rainy season begins in October.',
    body: 'The situation at Lemalah Children\'s Home has reached a critical threshold. With 52 children currently in our care — and a long waiting list of siblings and community children we cannot yet accept — our dormitory facilities are severely overcrowded. Children are sharing beds. Personal space is nearly nonexistent. We need to build two new housing structures: one for boys, one for girls, each with adequate beds, lockers, and ventilation. The cost is estimated at $15,000 for both blocks. If you can help, please donate today.',
    img: 'https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 2,
    tag: 'Success Story',
    date: 'August 2025',
    title: 'James Wamalwa and David Wasike Complete Vocational College',
    excerpt: 'Two brothers who arrived at Lemalah as destitute children have now completed their vocational training. They are the first in their family to earn professional qualifications.',
    body: 'James and David came to us from western Kenya after their father — a pastor — disappeared without explanation and never returned. They had no one to care for them. Today, both have graduated from vocational college and are entering the workforce with skills that will sustain them for life. Their success is proof that with the right support, children from the hardest backgrounds can build extraordinary futures. We are deeply proud of James and David, and we celebrate them as testament to what Lemalah stands for.',
    img: 'https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    tag: 'Community',
    date: 'July 2025',
    title: 'Local Youth Groups Host Monthly Volunteer Day at the Home',
    excerpt: 'Over 40 volunteers from surrounding towns descended on Mai-Mahiu to wash clothes, organize games, counsel the children, and bring donated food. Community support is growing.',
    body: 'The monthly volunteer days have become one of the most anticipated events in the children\'s calendar. Youth groups from nearby towns arrive early, divide into teams, and spend the day doing laundry, leading games, helping with cooking, and simply being present for children who need to see that the wider community cares. This month\'s event was the largest yet, with 40+ volunteers and enough donated food to supplement meals for an entire week. We are deeply grateful to every young person who gives their Saturday to come and be with our children.',
    img: 'https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 4,
    tag: 'Farm Update',
    date: 'June 2025',
    title: 'Harvest Season at Lemalah: Tomatoes, Corn, and New Crops',
    excerpt: 'Our farm had an excellent season this year. Tomatoes, corn, and beans are providing nutritional variety and reducing monthly food costs. Plans to expand the chicken flock are underway.',
    body: 'Farming has always been central to Lemalah\'s sustainability strategy. This season, we harvested a strong yield of tomatoes, corn, beans, and peas. The children participate in farm activities, learning about agriculture and food security as they grow. Our 60 chickens continue to produce eggs daily. We are now planning to double the flock and purchase a second dairy cow to increase the home\'s self-sufficiency. A local seed company has offered to donate vegetable seeds for the next planting season — a wonderful act of community generosity.',
    img: 'https://images.unsplash.com/photo-1764001032216-360a43576788?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 5,
    tag: 'Education',
    date: 'May 2025',
    title: 'Hannah Njoki Achieves Top Scores in Form 3 Exams',
    excerpt: 'Hannah, who arrived at Lemalah as a young girl with her siblings, has achieved top marks in her Form 3 examinations and is now setting her sights on university.',
    body: 'When Hannah arrived at Lemalah, her diabetic grandmother could no longer provide for her or her siblings. She had experienced uncertainty and instability for much of her young life. Today, she is one of our brightest students — achieving top marks in her Form 3 national examinations and expressing interest in pursuing a career in medicine. Her success is a direct result of the stability, encouragement, and educational support that Lemalah provides. We are so proud of Hannah and committed to helping her achieve her university ambitions.',
    img: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 6,
    tag: 'Partnership',
    date: 'April 2025',
    title: 'South African Supporter Marks 18 Years of Monthly Giving',
    excerpt: 'A loyal friend in South Africa has been sending approximately Kshs 40,000 (~$330) every month since 2007. This April marks 18 years of faithful, uninterrupted support.',
    body: 'Some supporters stay. Since 2007, one remarkable individual in South Africa has sent approximately Kshs 40,000 (around $330 USD) every single month without interruption. Over 18 years, this amounts to nearly $72,000 in cumulative support — an extraordinary act of sustained generosity that has fed children, paid school fees, and kept the lights on in countless difficult months. We do not name donors without their permission, but we want to publicly honor this person\'s commitment. They have made an immeasurable difference. If you are reading this: thank you, from all 52 of our children.',
    img: 'https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?w=800&h=500&fit=crop&auto=format',
  },
]

const TAGS = ['All', 'Urgent Appeal', 'Success Story', 'Community', 'Farm Update', 'Education', 'Partnership']

export default function News() {
  useSEO({
    title: 'News & Updates – From the Home in Kenya',
    description:
      'Read the latest updates from Rafikidz Haven: urgent appeals, alumni success stories, community volunteer days, and milestones from Lemalah Children\'s Home in Kenya.',
    path: '/news',
    keywords:
      'Rafikidz Haven news, Kenya orphanage updates, children home Kenya news, Lemalah updates, Kenya charity news',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rafikidzhaven.org/' },
          { '@type': 'ListItem', position: 2, name: 'News', item: 'https://rafikidzhaven.org/news' },
        ],
      },
    ],
  })
  const [activeTag, setActiveTag] = useState('All')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = activeTag === 'All' ? ARTICLES : ARTICLES.filter(a => a.tag === activeTag)

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?w=1600&h=600&fit=crop&auto=format" alt="News" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 pt-24">
          <span className="inline-block text-[#f0c94a] text-xs font-bold uppercase tracking-[0.2em] mb-4">News & Updates</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Stories from the Home</h1>
          <p className="text-white/60 max-w-lg">Updates, success stories, urgent needs, and community moments from Lemalah Children's Home.</p>
        </div>
      </section>

      <section className="py-6 bg-[#fefce8] border-b border-[#eab30811] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {TAGS.map(t => (
              <button key={t} onClick={() => setActiveTag(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTag === t ? 'bg-[#eab308] text-white' : 'bg-white border border-[#eab30822] text-[#6b5c4a] hover:border-[#eab308]'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fefce8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(a => (
              <div key={a.id} className="bg-white border border-[#eab3080d] rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-video overflow-hidden bg-[#eab30811]">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#eab30811] text-[#eab308] text-xs font-bold px-2.5 py-1 rounded-full">{a.tag}</span>
                    <span className="text-[#8a7968] text-xs">{a.date}</span>
                  </div>
                  <h3 className="font-bold text-[#1e1610] text-base mb-3 leading-snug" style={{ fontFamily: 'Fraunces, serif' }}>{a.title}</h3>
                  <p className="text-[#6b5c4a] text-sm leading-relaxed mb-4">
                    {expanded === a.id ? a.body : a.excerpt}
                  </p>
                  <button onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                    className="text-[#eab308] text-sm font-semibold hover:underline">
                    {expanded === a.id ? '← Show less' : 'Read full story →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#eab308]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Stay Connected</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">Get news and updates from the home delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 rounded-full text-[#1e1610] focus:outline-none text-sm" />
            <button type="submit" className="bg-[#1e1610] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#3d2b1a] transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
