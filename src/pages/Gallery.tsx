import { useState } from 'react'
import { useSEO } from '../hooks/useSEO'

const PHOTOS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1547496614-d145e2fa88ed?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1547496614-d145e2fa88ed?w=400&h=300&fit=crop&auto=format', caption: 'Three boys from the home, smiling at the camera', category: 'Children' },
  { id: 2, src: 'https://images.unsplash.com/photo-1547496613-4e19af6736dc?w=800&h=1000&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1547496613-4e19af6736dc?w=400&h=300&fit=crop&auto=format', caption: 'A boy in a white top outside the home', category: 'Children' },
  { id: 3, src: 'https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?w=800&h=1000&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?w=400&h=300&fit=crop&auto=format', caption: 'Children in school uniforms — ready for the day', category: 'Education' },
  { id: 4, src: 'https://images.unsplash.com/photo-1664990594674-418f27010fee?w=800&h=500&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1664990594674-418f27010fee?w=400&h=300&fit=crop&auto=format', caption: 'Children running together in the compound', category: 'Recreation' },
  { id: 5, src: 'https://images.unsplash.com/photo-1637148734636-906c24feeb55?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1637148734636-906c24feeb55?w=400&h=300&fit=crop&auto=format', caption: 'Young children sitting together at a table', category: 'Daily Life' },
  { id: 6, src: 'https://images.unsplash.com/photo-1576685894355-2437748baa08?w=600&h=900&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1576685894355-2437748baa08?w=400&h=300&fit=crop&auto=format', caption: 'A boy standing in a doorway of the home', category: 'Daily Life' },
  { id: 7, src: 'https://images.unsplash.com/photo-1554652532-bc503a3072cb?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1554652532-bc503a3072cb?w=400&h=300&fit=crop&auto=format', caption: 'Children playing together in the yard', category: 'Recreation' },
  { id: 8, src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop&auto=format', caption: 'Children writing during a learning session', category: 'Education' },
  { id: 9, src: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=400&h=300&fit=crop&auto=format', caption: 'A teacher working with a group of children', category: 'Education' },
  { id: 10, src: 'https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=400&h=300&fit=crop&auto=format', caption: 'Children in a classroom, learning together', category: 'Education' },
  { id: 11, src: 'https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=400&h=300&fit=crop&auto=format', caption: 'Younger children during mealtime', category: 'Daily Life' },
  { id: 12, src: 'https://images.unsplash.com/photo-1764001032216-360a43576788?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1764001032216-360a43576788?w=400&h=300&fit=crop&auto=format', caption: 'Fresh vegetables from the Lemalah farm', category: 'Farm & Food' },
  { id: 13, src: 'https://images.unsplash.com/photo-1746401809231-4c1ad2c1e161?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1746401809231-4c1ad2c1e161?w=400&h=300&fit=crop&auto=format', caption: 'Harvested grain from the community farm', category: 'Farm & Food' },
  { id: 14, src: 'https://images.unsplash.com/photo-1669196741160-8fc1c0ca925b?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1669196741160-8fc1c0ca925b?w=400&h=300&fit=crop&auto=format', caption: 'The beautiful landscape around Mai-Mahiu, Nakuru County', category: 'Location' },
  { id: 15, src: 'https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=800&h=600&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1772683681368-54cf36bb889f?w=400&h=300&fit=crop&auto=format', caption: 'Children playing together outside near a simple structure', category: 'Recreation' },
  { id: 16, src: 'https://images.unsplash.com/photo-1770842655322-bcfd1c4be229?w=600&h=800&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1770842655322-bcfd1c4be229?w=400&h=300&fit=crop&auto=format', caption: 'A smiling young child in colorful clothing', category: 'Children' },
  { id: 17, src: 'https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=600&h=900&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1571417800906-5a5058dbd45d?w=400&h=300&fit=crop&auto=format', caption: 'Boys standing together by a wall — brothers in every sense', category: 'Children' },
  { id: 18, src: 'https://images.unsplash.com/photo-1760808574067-27ce83df8ed6?w=600&h=1000&fit=crop&auto=format', thumb: 'https://images.unsplash.com/photo-1760808574067-27ce83df8ed6?w=400&h=300&fit=crop&auto=format', caption: 'A young child with a warm smile', category: 'Children' },
]

const CATEGORIES = ['All', 'Children', 'Education', 'Recreation', 'Daily Life', 'Farm & Food', 'Location']

export default function Gallery() {
  useSEO({
    title: 'Photo Gallery – Life at Lemalah Children\'s Home',
    description:
      'Browse photos from Rafikidz Haven: children learning, playing, farming, and growing up in a safe and loving home in Mai-Mahiu, Kenya.',
    path: '/gallery',
    keywords:
      'Rafikidz Haven photos, Kenya orphanage gallery, children home Kenya pictures, Lemalah photos, Kenya charity images',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rafikidzhaven.org/' },
          { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://rafikidzhaven.org/gallery' },
        ],
      },
    ],
  })
  const [cat, setCat] = useState('All')
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null)

  const filtered = cat === 'All' ? PHOTOS : PHOTOS.filter(p => p.category === cat)

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1554652532-bc503a3072cb?w=1600&h=600&fit=crop&auto=format" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1610]/90 via-[#1e1610]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 pt-24">
          <span className="inline-block text-[#f0c94a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Photo Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Fraunces, serif' }}>A Window Into the Home</h1>
          <p className="text-white/60 max-w-lg">Real moments from the children's lives at Lemalah — joy, learning, growth, and community.</p>
        </div>
      </section>

      <section className="py-6 bg-[#fefce8] border-b border-[#eab30811] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${cat === c ? 'bg-[#eab308] text-white' : 'bg-white border border-[#eab30822] text-[#6b5c4a] hover:border-[#eab308]'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#fefce8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map(p => (
              <div key={p.id} className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl bg-[#eab30811]"
                onClick={() => setLightbox(p)}>
                <img src={p.thumb} alt={p.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-[#1e1610]/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm font-medium">
              ✕ Close
            </button>
            <img src={lightbox.src} alt={lightbox.caption} className="w-full rounded-2xl object-contain max-h-[80vh]" />
            <div className="mt-3 text-center">
              <p className="text-white/60 text-sm italic">{lightbox.caption}</p>
              <span className="text-[#f0c94a] text-xs font-bold uppercase tracking-wide mt-1 inline-block">{lightbox.category}</span>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={() => { const i = PHOTOS.findIndex(p => p.id === lightbox.id); if (i > 0) setLightbox(PHOTOS[i - 1]) }}
                className="text-white/50 hover:text-white transition-colors text-sm px-4 py-2 bg-white/10 rounded-full">
                ← Previous
              </button>
              <button onClick={() => { const i = PHOTOS.findIndex(p => p.id === lightbox.id); if (i < PHOTOS.length - 1) setLightbox(PHOTOS[i + 1]) }}
                className="text-white/50 hover:text-white transition-colors text-sm px-4 py-2 bg-white/10 rounded-full">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
