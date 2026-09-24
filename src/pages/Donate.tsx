import { useState } from 'react'
import { Link } from 'react-router'
import { useSEO } from '../hooks/useSEO'

const AMOUNTS = [15, 35, 75, 150, 300]

const AMOUNT_LABELS: Record<number, string> = {
  15: 'Covers toiletries & hygiene for 1 child/month',
  35: 'Feeds 1 child 3 meals a day for a full month',
  75: 'School fees & supplies for 1 child per term',
  150: 'Complete monthly sponsorship for 1 child',
  300: 'Sponsors 2 children for a full month',
}

export default function Donate() {
  useSEO({
    title: 'Donate – Give Directly to Children in Kenya',
    description:
      'Make a secure donation to Rafikidz Haven. $35/month feeds one child for 30 days. $150/month fully sponsors one child. 100% of every dollar goes directly to children in Kenya.',
    path: '/donate',
    keywords:
      'donate Kenya orphans, sponsor a child Kenya, give to children Kenya, Rafikidz Haven donate, children charity Kenya donation',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'DonateAction',
        agent: { '@type': 'NGO', name: 'Rafikidz Haven', url: 'https://rafikidzhaven.org' },
        recipient: { '@type': 'NGO', name: 'Rafikidz Haven' },
        description: 'Donate to Rafikidz Haven to support 50+ orphaned children in Kenya',
        url: 'https://rafikidzhaven.org/donate',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rafikidzhaven.org/' },
          { '@type': 'ListItem', position: 2, name: 'Donate', item: 'https://rafikidzhaven.org/donate' },
        ],
      },
    ],
  })
  const [selected, setSelected] = useState(35)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState<'monthly' | 'once'>('monthly')
  const [step, setStep] = useState<1 | 2>(1)
  const [submitted, setSubmitted] = useState(false)

  const amount = custom ? Number(custom) : selected

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590099543482-eba8c1aab773?w=1600&h=700&fit=crop&auto=format"
            alt="Donate"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610] via-[#1e1610]/60 to-[#1e1610]/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c94a] animate-pulse" />
            <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-widest">Make a Difference Today</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Your Gift Changes a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c94a] to-[#eab308]">Child's World</span>
          </h1>
          <p className="text-white/70 text-xl font-light max-w-xl">
            52 children rely on the generosity of people like you for food, shelter, and a future.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <div className="inline-block bg-[#fefce8] text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Transparent Impact</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1610] mb-6 leading-tight">
                Every Dollar Goes <span className="text-[#eab308]">Directly</span> to the Children
              </h2>
              <p className="text-[#6b5c4a] text-lg leading-relaxed mb-10 font-light">
                No wasteful overhead. 100% of your donation reaches the children on our doorstep and waiting list.
              </p>

              <div className="space-y-4 mb-12">
                {AMOUNTS.map(a => (
                  <div
                    key={a}
                    className={`flex gap-5 items-center p-6 rounded-3xl border-2 cursor-pointer transition-all hover:-translate-y-0.5 ${selected === a && !custom ? 'border-[#eab308] bg-[#eab308]/5 shadow-lg shadow-[#eab308]/10' : 'border-[#eab308]/10 bg-[#fefce8] hover:border-[#eab308]/30'}`}
                    onClick={() => { setSelected(a); setCustom('') }}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selected === a && !custom ? 'border-[#eab308] bg-[#eab308]' : 'border-[#eab308]/30'}`}>
                      {selected === a && !custom && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-extrabold text-[#1e1610] text-2xl">${a}</div>
                      <div className="text-[#6b5c4a] text-sm mt-0.5 font-light">{AMOUNT_LABELS[a]}</div>
                    </div>
                    {selected === a && !custom && (
                      <div className="w-8 h-8 rounded-full bg-[#eab308] flex items-center justify-center text-white text-sm">✓</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Fund breakdown */}
              <div className="bg-[#fefce8] rounded-3xl p-8 border border-[#eab308]/8">
                <h3 className="font-extrabold text-[#1e1610] text-xl mb-6">How Your Money is Used</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Food & Nutrition', pct: 40, color: 'from-[#eab308] to-[#fde047]' },
                    { label: 'Education & Fees', pct: 30, color: 'from-[#2d5a3d] to-[#4a8c60]' },
                    { label: 'Healthcare & Hygiene', pct: 20, color: 'from-[#d4a017] to-[#f0c94a]' },
                    { label: 'Shelter & Utilities', pct: 10, color: 'from-[#8a7968] to-[#b0a090]' },
                  ].map(b => (
                    <div key={b.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-[#6b5c4a]">{b.label}</span>
                        <span className="font-extrabold text-[#1e1610]">{b.pct}%</span>
                      </div>
                      <div className="h-3 bg-[#eab308]/8 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${b.color} rounded-full transition-all`} style={{ width: `${b.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Donation form */}
            <div className="lg:sticky lg:top-28 self-start">
              {submitted ? (
                <div className="bg-gradient-to-br from-[#2d5a3d] to-[#1a3825] rounded-[2.5rem] p-12 text-center shadow-2xl">
                  <div className="text-6xl mb-6">🙏</div>
                  <h2 className="text-3xl font-extrabold text-white mb-4">Thank You!</h2>
                  <p className="text-white/80 leading-relaxed mb-8 text-lg font-light">
                    Your {freq === 'monthly' ? 'monthly' : 'one-time'} gift of <strong className="text-[#f0c94a]">${amount}</strong> has been received. You are now part of the Rafikidz Haven family. The children thank you.
                  </p>
                  <Link to="/" className="inline-block bg-[#f0c94a] text-[#1e1610] px-8 py-4 rounded-full font-extrabold hover:bg-white transition-colors text-lg">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[#eab308]/8">
                  {step === 1 && (
                    <>
                      <h2 className="text-2xl font-extrabold text-[#1e1610] mb-6">Your Donation</h2>
                      <div className="flex gap-2 bg-[#fefce8] rounded-full p-1.5 mb-8">
                        {(['monthly', 'once'] as const).map(f => (
                          <button key={f} onClick={() => setFreq(f)}
                            className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${freq === f ? 'bg-gradient-to-r from-[#eab308] to-[#fde047] text-white shadow-lg' : 'text-[#6b5c4a] hover:text-[#eab308]'}`}>
                            {f === 'monthly' ? '♻ Monthly' : '⚡ One-time'}
                          </button>
                        ))}
                      </div>
                      <p className="text-[#8a7968] text-xs font-bold uppercase tracking-widest mb-4">Select an amount (USD)</p>
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {AMOUNTS.map(a => (
                          <button key={a} onClick={() => { setSelected(a); setCustom('') }}
                            className={`py-4 rounded-2xl font-extrabold text-lg transition-all hover:scale-105 ${selected === a && !custom ? 'bg-gradient-to-br from-[#eab308] to-[#fde047] text-white shadow-lg shadow-[#eab308]/25' : 'bg-[#fefce8] text-[#eab308] hover:bg-[#eab308]/10'}`}>
                            ${a}
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        placeholder="Custom amount ($)"
                        value={custom}
                        onChange={e => { setCustom(e.target.value); setSelected(0) }}
                        className="w-full border-2 border-[#eab308]/15 rounded-2xl px-5 py-4 text-[#1e1610] placeholder-[#8a7968] focus:outline-none focus:border-[#eab308] mb-6 font-medium"
                      />
                      {amount > 0 && (
                        <div className="bg-[#eab308]/8 border border-[#eab308]/15 rounded-2xl p-4 mb-6 text-sm">
                          <span className="font-extrabold text-[#eab308]">${amount}{freq === 'monthly' ? '/month' : ' one-time'}</span>
                          <span className="text-[#6b5c4a] ml-2 font-light">— {AMOUNT_LABELS[amount] || 'every dollar goes directly to the children'}</span>
                        </div>
                      )}
                      <button
                        onClick={() => amount > 0 && setStep(2)}
                        className="w-full bg-gradient-to-r from-[#eab308] to-[#fde047] hover:from-[#ca8a04] hover:to-[#eab308] text-white font-extrabold py-5 rounded-2xl transition-all text-lg disabled:opacity-40 hover:scale-[1.02] shadow-xl shadow-[#eab308]/25"
                        disabled={amount <= 0}
                      >
                        Continue →
                      </button>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <button onClick={() => setStep(1)} className="text-[#8a7968] hover:text-[#eab308] transition-colors font-medium text-sm">← Back</button>
                        <h2 className="text-xl font-extrabold text-[#1e1610]">Your Details</h2>
                      </div>
                      <div className="bg-[#fefce8] border border-[#eab308]/15 rounded-2xl p-4 mb-6">
                        <span className="font-extrabold text-[#eab308] text-lg">${amount}{freq === 'monthly' ? '/month' : ' one-time'}</span>
                        <span className="text-[#8a7968] ml-2 text-sm">— {freq === 'monthly' ? 'recurring monthly' : 'single gift'}</span>
                      </div>
                      <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                        <div className="grid grid-cols-2 gap-3">
                          <input required type="text" placeholder="First name" className="border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                          <input required type="text" placeholder="Last name" className="border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                        </div>
                        <input required type="email" placeholder="Email address" className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                        <input type="text" placeholder="Country" className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                        <input required type="text" placeholder="Card number" className="w-full border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" placeholder="MM / YY" className="border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                          <input type="text" placeholder="CVC" className="border-2 border-[#eab308]/15 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#eab308] font-medium" />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-[#eab308] to-[#fde047] hover:from-[#ca8a04] hover:to-[#eab308] text-white font-extrabold py-5 rounded-2xl transition-all text-lg hover:scale-[1.02] shadow-xl shadow-[#eab308]/25">
                          Donate ${amount}{freq === 'monthly' ? '/month' : ''}
                        </button>
                        <p className="text-[#8a7968] text-xs text-center font-medium">
                          🔒 Secure & encrypted. All donations go directly to the children.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-20 bg-[#fefce8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-[#eab308] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">More Options</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1610]">Other Ways to Give</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '🏦', title: 'Bank Transfer', desc: 'Contact us for bank details for direct transfers from Kenya or internationally.', link: '/contact' },
              { icon: '📦', title: 'In-Kind Donations', desc: 'Clothing, food, school supplies, and household goods are always welcome.', link: '/get-involved' },
              { icon: '📢', title: 'Fundraise for Us', desc: 'Run a birthday campaign or community event and donate the proceeds.', link: '/get-involved' },
            ].map(w => (
              <Link key={w.title} to={w.link} className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-[#eab308]/8 hover:border-[#eab308]/25">
                <div className="w-14 h-14 rounded-2xl bg-[#fefce8] flex items-center justify-center text-3xl mb-6 group-hover:bg-[#eab308] group-hover:text-white transition-colors shadow-inner">
                  {w.icon}
                </div>
                <h3 className="font-extrabold text-[#1e1610] text-xl mb-3 group-hover:text-[#eab308] transition-colors">{w.title}</h3>
                <p className="text-[#6b5c4a] text-sm leading-relaxed font-light">{w.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
