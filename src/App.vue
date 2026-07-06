<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { content, localeLabels, localeOrder, siteConfig } from './content/site'
import { applySeo } from './seo'
import type { Locale, Theme } from './types'
const themeOptions: Theme[] = ['light', 'dark']
const themeLabels: Record<Theme, Record<Locale, string>> = {
  light: { en: 'Light', 'zh-Hant': '淺色' },
  dark: { en: 'Dark', 'zh-Hant': '深色' }
}

const locale = ref<Locale>(siteConfig.defaultLocale)
const theme = ref<Theme>('light')

const activeContent = computed(() => content[locale.value])

onMounted(() => {
  locale.value = getInitialLocale()
  theme.value = getInitialTheme()
})

watch(theme, (nextTheme) => {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.dataset.theme = nextTheme
  window.localStorage.setItem('theme', nextTheme)
})

watch(locale, (nextLocale) => {
  if (typeof window === 'undefined') {
    return
  }

  const url = new URL(window.location.href)
  if (nextLocale === siteConfig.defaultLocale) {
    url.searchParams.delete('lang')
  } else {
    url.searchParams.set('lang', nextLocale)
  }
  window.history.replaceState({}, '', url)
})

watch(
  [activeContent, locale, theme],
  ([nextContent, nextLocale, nextTheme]) => {
    applySeo({ content: nextContent, locale: nextLocale, theme: nextTheme })
  },
  { immediate: true }
)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return siteConfig.defaultLocale
  }

  const fromQuery = new URL(window.location.href).searchParams.get('lang')
  if (fromQuery === 'zh' || fromQuery === 'zh-TW' || fromQuery === 'zh-Hant') {
    return 'zh-Hant'
  }
  if (fromQuery === 'en') {
    return 'en'
  }

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh-Hant' : 'en'
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#top">
        <span class="brand-mark">TC</span>
        <span class="brand-copy">
          <strong>{{ siteConfig.name }}</strong>
          <small>{{ activeContent.hero.kicker }}</small>
        </span>
      </a>

      <div class="header-controls">
        <div class="segmented-control" :aria-label="activeContent.localeLabel">
          <button
            v-for="option in localeOrder"
            :key="option"
            type="button"
            :class="{ active: locale === option }"
            :aria-pressed="locale === option"
            @click="locale = option"
          >
            {{ localeLabels[option] }}
          </button>
        </div>

        <div class="segmented-control" aria-label="Theme">
          <button
            v-for="option in themeOptions"
            :key="option"
            type="button"
            :class="['theme-toggle', { active: theme === option }]"
            :aria-pressed="theme === option"
            :aria-label="themeLabels[option][locale]"
            :title="themeLabels[option][locale]"
            @click="theme = option"
          >
            <svg
              v-if="option === 'light'"
              class="theme-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
            </svg>
            <svg
              v-else
              class="theme-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8Z" />
            </svg>
            <span class="sr-only">{{ themeLabels[option][locale] }}</span>
          </button>
        </div>
      </div>
    </header>

    <div id="top" class="resume-layout">
      <aside class="profile-rail panel">
        <img :src="siteConfig.avatarUrl" :alt="siteConfig.name" class="profile-avatar" />

        <div class="profile-copy">
          <h1>{{ siteConfig.name }}</h1>
          <p class="profile-title">{{ siteConfig.title }}</p>
          <p class="profile-summary">{{ activeContent.hero.lede }}</p>
        </div>

        <div class="rail-stats">
          <article v-for="stat in activeContent.hero.stats" :key="stat.label" class="rail-stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>

        <div class="rail-contacts">
          <article v-for="method in activeContent.contact.methods" :key="method.label" class="contact-chip">
            <span>{{ method.label }}</span>
            <a v-if="method.href" :href="method.href">{{ method.value }}</a>
            <strong v-else>{{ method.value }}</strong>
          </article>
        </div>
      </aside>

      <main class="resume-content">
        <section id="overview" class="hero-band panel">
          <div class="hero-main">
            <h2>{{ activeContent.hero.headline }}</h2>
            <p class="hero-copy">{{ activeContent.hero.panelCopy }}</p>
            <ul class="bullet-list compact">
              <li v-for="item in activeContent.hero.panelItems" :key="item">{{ item }}</li>
            </ul>
          </div>
        </section>

        <section class="summary-grid">
          <article v-for="card in activeContent.overview.cards" :key="card.title" class="panel summary-card">
            <h3>{{ card.title }}</h3>
            <ul class="bullet-list compact">
              <li v-for="line in card.lines" :key="line">{{ line }}</li>
            </ul>
          </article>
        </section>

        <section id="projects" class="content-section">
          <div class="section-heading">
            <h2>{{ activeContent.projects.title }}</h2>
          </div>

          <div class="project-list">
            <article v-for="project in activeContent.projects.items" :key="project.title" class="panel project-card">
              <div class="card-topline">
                <p class="project-role">{{ project.role }}</p>
                <span class="project-period">{{ project.period }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p class="project-summary">{{ project.summary }}</p>

              <ul class="bullet-list compact">
                <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
              </ul>

              <div class="tag-list">
                <span v-for="item in project.stack" :key="item">{{ item }}</span>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" class="content-section">
          <div class="section-heading">
            <h2>{{ activeContent.experience.title }}</h2>
          </div>

          <div class="timeline-list">
            <article v-for="item in activeContent.experience.items" :key="`${item.company}-${item.period}`" class="panel timeline-item">
              <div class="timeline-period">{{ item.period }}</div>
              <div class="timeline-body">
                <div class="card-topline">
                  <p class="project-role">{{ item.role }}</p>
                </div>
                <h3>{{ item.company }}</h3>
                <p v-if="item.note" class="timeline-note">{{ item.note }}</p>
                <p class="timeline-summary">{{ item.summary }}</p>
                <ul class="bullet-list compact">
                  <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="capabilities" class="content-section">
          <div class="section-heading">
            <h2>{{ activeContent.capabilities.title }}</h2>
          </div>

          <div class="capability-grid">
            <article v-for="group in activeContent.capabilities.groups" :key="group.title" class="panel capability-card">
              <h3>{{ group.title }}</h3>
              <ul class="bullet-list compact">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>

  </div>
</template>
