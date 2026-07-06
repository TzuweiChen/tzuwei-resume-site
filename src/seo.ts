import { siteConfig } from './content/site'
import type { LocalizedContent, Locale, Theme } from './types'

type SeoOptions = {
  content: LocalizedContent
  locale: Locale
  theme: Theme
}

const localeMap: Record<Locale, string> = {
  en: 'en_US',
  'zh-Hant': 'zh_TW'
}

export function applySeo({ content, locale, theme }: SeoOptions) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return
  }

  const pageUrl = buildLocalizedUrl(locale)

  document.documentElement.lang = locale
  document.title = content.seo.title

  upsertMeta('name', 'description', content.seo.description)
  upsertMeta('name', 'keywords', content.seo.keywords.join(', '))
  upsertMeta('name', 'robots', 'index,follow')
  upsertMeta('name', 'theme-color', siteConfig.themeColors[theme])
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', content.seo.title)
  upsertMeta('name', 'twitter:description', content.seo.description)
  upsertMeta('name', 'twitter:image', siteConfig.ogImageUrl)

  upsertMeta('property', 'og:title', content.seo.title)
  upsertMeta('property', 'og:description', content.seo.description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', pageUrl)
  upsertMeta('property', 'og:image', siteConfig.ogImageUrl)
  upsertMeta('property', 'og:locale', localeMap[locale])
  upsertMeta('property', 'og:site_name', siteConfig.name)

  upsertLink({
    rel: 'canonical',
    href: pageUrl,
    selector: 'link[rel="canonical"][data-managed="app"]'
  })

  clearManagedAlternates()
  upsertLink({
    rel: 'alternate',
    href: buildLocalizedUrl('en'),
    hreflang: 'en',
    selector: 'link[rel="alternate"][hreflang="en"][data-managed="app"]'
  })
  upsertLink({
    rel: 'alternate',
    href: buildLocalizedUrl('zh-Hant'),
    hreflang: 'zh-Hant',
    selector: 'link[rel="alternate"][hreflang="zh-Hant"][data-managed="app"]'
  })
  upsertLink({
    rel: 'alternate',
    href: buildLocalizedUrl(siteConfig.defaultLocale),
    hreflang: 'x-default',
    selector: 'link[rel="alternate"][hreflang="x-default"][data-managed="app"]'
  })

  upsertStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: content.structuredDataJobTitle,
    description: content.structuredDataDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: siteConfig.avatarUrl,
    url: pageUrl,
    sameAs: siteConfig.sameAs,
    knowsAbout: content.seo.keywords,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Taoyuan City',
      addressCountry: 'TW'
    }
  })
}

function buildLocalizedUrl(locale: Locale) {
  const url = new URL(window.location.href)
  url.hash = ''
  if (locale === siteConfig.defaultLocale) {
    url.searchParams.delete('lang')
  } else {
    url.searchParams.set('lang', locale)
  }
  return url.toString()
}

function clearManagedAlternates() {
  const alternates = document.head.querySelectorAll('link[rel="alternate"][data-managed="app"]')
  alternates.forEach((node) => node.remove())
}

function upsertMeta(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = value
}

function upsertLink({
  rel,
  href,
  selector,
  hreflang
}: {
  rel: string
  href: string
  selector: string
  hreflang?: string
}) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    element.dataset.managed = 'app'
    if (hreflang) {
      element.hreflang = hreflang
    }
    document.head.appendChild(element)
  }
  element.href = href
}

function upsertStructuredData(payload: Record<string, unknown>) {
  let script = document.head.querySelector('#person-schema') as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = 'person-schema'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(payload)
}
