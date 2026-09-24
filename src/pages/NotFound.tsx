import { Link } from 'react-router'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO({ title: 'Page Not Found', noIndex: true })
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#fefce8]">
      <div className="text-center max-w-md px-6">
        <div className="text-6xl mb-6">🌿</div>
        <h1 className="text-5xl font-bold text-[#1e1610] mb-4" style={{ fontFamily: 'Fraunces, serif' }}>404</h1>
        <p className="text-[#6b5c4a] text-lg mb-8">This page doesn't exist — but the children at Lemalah do, and they need your help.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="bg-[#eab308] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#ca8a04] transition-colors">Go Home</Link>
          <Link to="/donate" className="border-2 border-[#eab308] text-[#eab308] px-7 py-3 rounded-full font-semibold hover:bg-[#eab3080d] transition-colors">Donate Instead</Link>
        </div>
      </div>
    </div>
  )
}
