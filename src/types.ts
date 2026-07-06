export type Locale = 'en' | 'zh-Hant'
export type Theme = 'light' | 'dark'

export type StatItem = {
  value: string
  label: string
}

export type InfoCard = {
  title: string
  lines: string[]
}

export type CapabilityGroup = {
  title: string
  items: string[]
}

export type ProjectItem = {
  title: string
  role: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  note?: string
  summary: string
  bullets: string[]
}

export type ContactMethod = {
  label: string
  value: string
  href?: string
}

export type SeoContent = {
  title: string
  description: string
  keywords: string[]
}

export type LocalizedContent = {
  localeLabel: string
  hero: {
    kicker: string
    headline: string
    lede: string
    panelCopy: string
    panelItems: string[]
    stats: StatItem[]
  }
  overview: {
    cards: InfoCard[]
  }
  capabilities: {
    title: string
    groups: CapabilityGroup[]
  }
  projects: {
    title: string
    items: ProjectItem[]
  }
  experience: {
    title: string
    items: ExperienceItem[]
  }
  contact: {
    methods: ContactMethod[]
  }
  seo: SeoContent
  structuredDataJobTitle: string
  structuredDataDescription: string
}
