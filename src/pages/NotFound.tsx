import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#fdf6ee]">
      <div className="text-center max-w-md px-6">
        <div className="text-6xl mb-6">🌿</div>
        <h1 className="text-5xl font-bold text-[#1e1610] mb-4" style={{ fontFamily: 'Fraunces, serif' }}>404</h1>
        <p className="text-[#6b5c4a] text-lg mb-8">This page doesn't exist — but the children at Lemalah do, and they need your help.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="bg-[#c4622d] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#8c3d14] transition-colors">Go Home</Link>
          <Link to="/donate" className="border-2 border-[#c4622d] text-[#c4622d] px-7 py-3 rounded-full font-semibold hover:bg-[#c4622d0d] transition-colors">Donate Instead</Link>
        </div>
      </div>
    </div>
  )
}
