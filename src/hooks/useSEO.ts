import { useEffect } from 'react'

const SITE_NAME = 'Rafikidz Haven'
const SITE_URL = 'https://rafikidzhaven.org'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`
const DEFAULT_TITLE = 'Rafikidz Haven – Heartbeats of Hope'
const DEFAULT_DESC =
  "Rafikidz Haven is a certified children's home in Mai-Mahiu, Kenya, sheltering, educating, and nurturing 50+ orphaned and vulnerable children since 2006. Every donation goes directly to a child."

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: object[]
  keywords?: string
  canonicalUrl?: string
  noIndex?: boolean
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string, id?: string) {
  const selector = id ? `link[id="${id}"]` : `link[rel="${rel}"]`
  let el = document.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (id) el.id = id
    document.head.appendChild(el)
  }
  el.href = href
}

function setJsonLd(id: string, schema: object) {
  let el = document.querySelector(`script[id="${id}"]`) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(schema)
}

function removeJsonLd(id: string) {
  const el = document.querySelector(`script[id="${id}"]`)
  if (el) el.remove()
}

export function useSEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
  keywords,
  canonicalUrl,
  noIndex = false,
}: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const desc = description ?? DEFAULT_DESC
    const img = image ?? DEFAULT_IMAGE
    const canonical = canonicalUrl ?? `${SITE_URL}${path}`

    // Basic
    document.title = fullTitle
    setMeta('description', desc)
    if (keywords) setMeta('keywords', keywords)
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    // Canonical
    setLink('canonical', canonical, 'seo-canonical')

    // Open Graph
    setMeta('og:type', type, 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:image', img, 'property')
    setMeta('og:image:alt', `${SITE_NAME} – ${title ?? 'Heartbeats of Hope'}`, 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:locale', 'en_KE', 'property')

    // Twitter
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image', img)
    setMeta('twitter:site', '@rafikidzhaven')

    // Base Organisation JSON-LD
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'NGO',
      '@id': `${SITE_URL}/#organization`,
      name: 'Rafikidz Haven',
      alternateName: "Lemalah Children's Home",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: DEFAULT_IMAGE,
      description: DEFAULT_DESC,
      foundingDate: '2006',
      foundingLocation: {
        '@type': 'Place',
        name: 'Mai-Mahiu, Nakuru County, Kenya',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mai-Mahiu',
          addressRegion: 'Nakuru County',
          addressCountry: 'KE',
        },
      },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'donor services',
        email: 'info@rafikidzhaven.org',
        availableLanguage: ['English', 'Swahili'],
      },
      sameAs: [
        'https://www.facebook.com/rafikidzhaven',
        'https://www.instagram.com/rafikidzhaven',
      ],
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Rafikidz Haven',
      description: DEFAULT_DESC,
      publisher: { '@id': `${SITE_URL}/#organization` },
    }

    setJsonLd('ld-organization', orgSchema)
    setJsonLd('ld-website', websiteSchema)

    // Page-specific JSON-LD
    if (jsonLd && jsonLd.length > 0) {
      jsonLd.forEach((schema, i) => setJsonLd(`ld-page-${i}`, schema))
      let i = jsonLd.length
      while (document.querySelector(`script[id="ld-page-${i}"]`)) {
        removeJsonLd(`ld-page-${i}`)
        i++
      }
    } else {
      let i = 0
      while (document.querySelector(`script[id="ld-page-${i}"]`)) {
        removeJsonLd(`ld-page-${i}`)
        i++
      }
    }
  }, [title, description, path, image, type, jsonLd, keywords, canonicalUrl, noIndex])
}
