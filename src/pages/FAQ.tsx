import { useState } from 'react'
import { Link } from 'react-router'
import { useSEO } from '../hooks/useSEO'

const FAQS = [
  {
    category: 'About the Organization',
    items: [
      { q: 'What is Rafikidz Haven / Lemalah Children\'s Home?', a: 'Rafikidz Haven is the organizational identity for Lemalah Children\'s Home — a registered Community Based Organization (CBO) in Kenya, established in 2006. We provide shelter, food, education, healthcare, and emotional care for 52 orphaned and vulnerable children in Mai-Mahiu, Nakuru County.' },
      { q: 'When was the home founded?', a: 'The home was founded in 2006, when Pastor Peter Warari took in the first two children — street boys from Githurai, Nairobi — followed by their two sisters after their mother was tragically murdered. Today the home has grown to 52 children with a long waiting list.' },
      { q: 'Are you a registered organization?', a: 'Yes. Lemalah Children\'s Home is a registered Community Based Organization (CBO) with the Kenya Ministry of Culture and Social Services. All accounts are audited regularly and reviewed by a Project Advisory Committee (PAC) quarterly.' },
      { q: 'Where are you located?', a: 'We are located in Mai-Mahiu, Nakuru County, Kenya — approximately 33 miles northwest of Nairobi, along the Great Rift Valley escarpment. We are based on a 5-acre piece of land that includes dormitories, gardens, chicken coops, and a borehole.' },
    ],
  },
  {
    category: 'Donating',
    items: [
      { q: 'How do I make a donation?', a: 'You can donate through our Donate page on this website. We accept one-time and recurring monthly gifts. You can also contact us for bank transfer details or to arrange an in-kind donation.' },
      { q: 'How much should I give?', a: '$15/month covers toiletries and hygiene for one child. $35/month feeds one child for a full month. $75/month covers school fees and supplies. $150/month is a complete child sponsorship covering all their monthly needs.' },
      { q: 'Is my donation tax-deductible?', a: 'This depends on your country of residence. Please consult a local tax adviser. We can provide donation receipts and confirmation letters upon request.' },
      { q: 'Where does my money go?', a: 'Every donation goes directly to the children — food (40%), education (30%), healthcare and hygiene (20%), and shelter and utilities (10%). We operate with minimal overhead. Our board members are committed volunteers.' },
      { q: 'Can I make a one-time donation rather than monthly?', a: 'Absolutely. One-time donations of any size are deeply appreciated and make a real difference. However, monthly giving creates more stability for the children, so we gently encourage recurring gifts when possible.' },
    ],
  },
  {
    category: 'Sponsoring a Child',
    items: [
      { q: 'What does child sponsorship mean?', a: 'At $150/month, a child sponsor covers all of a specific child\'s monthly needs — food, school fees, clothing, healthcare, hygiene, and shelter. Sponsors receive photo updates and letters from the home, and an annual impact report.' },
      { q: 'Will I be matched with a specific child?', a: 'Yes. Full child sponsors ($150/month) are matched with a specific child at the home. We will share their story, their age, and their progress. You will receive updates on their development.' },
      { q: 'Can I correspond with the child I sponsor?', a: 'We facilitate communication between sponsors and their sponsored children, with appropriate safeguarding measures in place. Letters and occasional photos can be exchanged through the home administration.' },
    ],
  },
  {
    category: 'Volunteering',
    items: [
      { q: 'Can I visit the home as a volunteer?', a: 'Yes. We welcome individual and group volunteers. You can assist with teaching, construction, healthcare, farming, cooking, or simply spending time with the children. Please contact us in advance to plan your visit.' },
      { q: 'What skills are needed?', a: 'All skills are welcome — teachers, healthcare workers, builders, IT professionals, creative communicators, farmers, and people with no special skills but a heart to serve. If you can show up, you are welcome.' },
      { q: 'How long is a typical volunteer stay?', a: 'There is no minimum requirement. Some volunteers come for a day. Others stay for weeks or months. We recommend at least a weekend to allow you to connect meaningfully with the children and contribute effectively.' },
      { q: 'Do I need to speak Swahili or Kikuyu?', a: 'Many of the children speak English, especially those in secondary school. Swahili is helpful but not required. A translator can be arranged for longer volunteer placements.' },
    ],
  },
  {
    category: 'The Children',
    items: [
      { q: 'How many children are at the home?', a: 'We currently care for 52 children, from toddlers to young adults in their late teens. There is also a growing waiting list of children we have not yet been able to accept due to limited resources.' },
      { q: 'How do children end up at Lemalah?', a: 'Children come through referrals from concerned relatives, neighbors, churches, and social workers. Some are orphans. Some have been abandoned or abused. Some were street children. None have ever had to "find" us — they have always been brought by people who cared enough to seek us out.' },
      { q: 'What happens when children grow up and leave?', a: 'We do not simply discharge children when they turn 18. We support them through college, vocational training, and the early stages of independent life. Alumni remain part of the Lemalah community and serve as mentors for younger children.' },
    ],
  },
]

export default function FAQ() {
  useSEO({
    title: 'FAQ – Frequently Asked Questions',
    description:
      'Answers to the most common questions about Rafikidz Haven: how donations are used, how to volunteer, how to sponsor a child, and how the home is registered in Kenya.',
    path: '/faq',
    keywords:
      'Rafikidz Haven FAQ, Kenya orphanage questions, how to donate Kenya, sponsor child FAQ, children home Kenya questions',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.flatMap(cat =>
          cat.items.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          }))
        ),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rafikidzhaven.org/' },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://rafikidzhaven.org/faq' },
        ],
      },
    ],
  })
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1520542764791-6f45f69be58d?w=1600&h=600&fit=crop&auto=format" alt="FAQ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 pt-24">
          <span className="inline-block text-[#f0c94a] text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Frequently Asked Questions</h1>
          <p className="text-white/60 max-w-lg">Everything you need to know about Rafikidz Haven, donating, volunteering, and supporting our children.</p>
        </div>
      </section>

      <section className="py-16 bg-[#fefce8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {FAQS.map(group => (
              <div key={group.category}>
                <h2 className="text-2xl font-bold text-[#eab308] mb-5" style={{ fontFamily: 'Fraunces, serif' }}>{group.category}</h2>
                <div className="space-y-2">
                  {group.items.map(item => {
                    const key = `${group.category}-${item.q}`
                    const isOpen = open === key
                    return (
                      <div key={key} className={`bg-white border rounded-2xl overflow-hidden transition-all ${isOpen ? 'border-[#eab30844]' : 'border-[#eab3080d] hover:border-[#eab30822]'}`}>
                        <button
                          className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                          onClick={() => setOpen(isOpen ? null : key)}
                        >
                          <span className="font-semibold text-[#1e1610] text-sm leading-snug" style={{ fontFamily: 'Fraunces, serif' }}>{item.q}</span>
                          <span className={`text-[#eab308] text-lg shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 border-t border-[#eab3080d]">
                            <p className="text-[#6b5c4a] text-sm leading-relaxed pt-4">{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#eab308]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Didn't Find Your Answer?</h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">Our team is happy to answer any questions not covered here. Reach out directly.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-[#eab308] hover:bg-[#fefce8] px-8 py-3 rounded-full font-bold transition-colors">Contact Us</Link>
            <Link to="/donate" className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-colors">Donate Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
