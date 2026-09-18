import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Children from './pages/Children'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Vision from './pages/Vision'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'children', Component: Children },
      { path: 'programs', Component: Programs },
      { path: 'impact', Component: Impact },
      { path: 'get-involved', Component: GetInvolved },
      { path: 'donate', Component: Donate },
      { path: 'news', Component: News },
      { path: 'gallery', Component: Gallery },
      { path: 'contact', Component: Contact },
      { path: 'faq', Component: FAQ },
      { path: 'vision', Component: Vision },
      { path: '*', Component: NotFound },
    ],
  },
])
