import type {
  CapabilityGroup,
  ContactMethod,
  ExperienceItem,
  InfoCard,
  LocalizedContent,
  Locale,
  ProjectItem,
  SeoContent,
  StatItem
} from '../types'

type LangTable<T> = Record<Locale, T>

type LocalizedStat = {
  value: string
  label: LangTable<string>
}

type LocalizedInfoCard = {
  title: LangTable<string>
  lines: LangTable<string[]>
}

type LocalizedCapabilityGroup = {
  title: LangTable<string>
  items: LangTable<string[]>
}

type LocalizedProject = {
  title: LangTable<string>
  role: LangTable<string>
  period: LangTable<string>
  summary: LangTable<string>
  highlights: LangTable<string[]>
  stack: LangTable<string[]>
}

type LocalizedExperience = {
  company: string
  role: LangTable<string>
  period: LangTable<string>
  note?: LangTable<string>
  summary: LangTable<string>
  bullets: LangTable<string[]>
}

type LocalizedContactMethod = Omit<ContactMethod, 'label' | 'value'> & {
  label: LangTable<string>
  value: LangTable<string>
}

export const siteConfig = {
  name: 'Tzuwei Chen',
  title: 'Senior Software Engineer',
  email: 'chen.tzuwei@gmail.com',
  phone: '+886 911 732 330',
  location: 'Taoyuan City, Taiwan',
  cakeUrl: 'https://www.cake.me/s--TujD-_CjS-Ga5-Eob38USg--/tzuwei-chen',
  avatarUrl: 'https://media.cake.me/image/upload/v1637311335/zp1dksvmdidzxg7zjdn7.jpg',
  ogImageUrl: 'https://media.cake.me/image/upload/v1782896849/yhxfbuvdo5fyhyxgy5k7.jpg',
  defaultLocale: 'zh-Hant' as Locale,
  sameAs: ['https://www.cake.me/s--TujD-_CjS-Ga5-Eob38USg--/tzuwei-chen'],
  themeColors: {
    light: '#f3efe8',
    dark: '#101416'
  }
}

export const localeOrder: Locale[] = ['zh-Hant', 'en']

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  'zh-Hant': '中文'
}

const localeNames: LangTable<string> = {
  en: 'English',
  'zh-Hant': '繁體中文'
}

const heroContent = {
  kicker: {
    en: 'Taoyuan, Taiwan · Android · Backend · SDK · BLE',
    'zh-Hant': '桃園，台灣 · Android · Backend · SDK · BLE'
  },
  headline: {
    en: 'Senior software engineer for integration-heavy products.',
    'zh-Hant': '適合處理整合型產品的資深軟體工程師。'
  },
  lede: {
    en:
      '15+ years across Android, Go backend, Unity collaboration, Flutter, BLE, and hands-on technical leadership. Strongest when mobile apps, shared SDKs, backend services, and operations need to move together.',
    'zh-Hant':
      '超過 15 年經驗，涵蓋 Android、Go Backend、Unity 協作、Flutter、BLE 與 hands-on 技術帶領。最擅長的場景，是行動端、共享 SDK、後端服務與營運需求需要一起推進的產品。'
  },
  panelCopy: {
    en: 'Hands-on product teams that need reliable delivery across more than one technical surface.',
    'zh-Hant': '比起單點功能開發，我更適合需要跨層協作與穩定交付的產品團隊。'
  },
  panelItems: {
    en: [
      'Android, SDK, or backend work that crosses team boundaries.',
      'Production debugging, performance issues, and service integration problems.',
      'Gaming, fintech, navigation, or connected-device product environments.'
    ],
    'zh-Hant': [
      'Android、SDK 或 Backend 工作需要跨團隊協作時。',
      '正式環境除錯、效能瓶頸與服務整合問題需要有人收斂時。',
      '遊戲、金融交易、導航或連網裝置類產品需要 hands-on 技術支撐時。'
    ]
  }
}

const heroStats: LocalizedStat[] = [
  {
    value: '15+',
    label: {
      en: 'years of product delivery experience',
      'zh-Hant': '年產品開發與交付經驗'
    }
  },
  {
    value: '4',
    label: {
      en: 'core layers: app, SDK, backend, device integration',
      'zh-Hant': '主要層次：App、SDK、Backend、裝置整合'
    }
  },
  {
    value: '5+',
    label: {
      en: 'domains including gaming, fintech, navigation, IoT',
      'zh-Hant': '實際做過遊戲、金融、導航、IoT 等領域'
    }
  },
  {
    value: '2',
    label: {
      en: 'working languages across Chinese and English',
      'zh-Hant': '中英文工作情境下的協作能力'
    }
  }
]

const overviewCards: LocalizedInfoCard[] = [
  {
    title: {
      en: 'What I bring',
      'zh-Hant': '我能補上的位置'
    },
    lines: {
      en: [
        'Android engineering across product, library, and SDK work.',
        'Go backend ownership with RPC, APIs, tooling, and integration logic.',
        'Hands-on technical leadership for teams shipping across multiple surfaces.'
      ],
      'zh-Hant': [
        'Android 開發，包含產品、Library 與 SDK 型工作。',
        'Go Backend、RPC、API、工具與整合邏輯。',
        '可實作、可帶領、可跨團隊協調的技術角色。'
      ]
    }
  },
  {
    title: {
      en: 'Where I have shipped',
      'zh-Hant': '做過的產品領域'
    },
    lines: {
      en: [
        'Mobile games and live operations',
        'Digital asset and fintech products',
        'Navigation and mobility platforms',
        'BLE, IoT, media, e-commerce, and streaming'
      ],
      'zh-Hant': [
        '手遊與 Live Ops',
        '數位資產與金融交易',
        '導航與移動平台',
        'BLE、IoT、影音、電商與直播'
      ]
    }
  },
  {
    title: {
      en: 'How I work',
      'zh-Hant': '工作方式'
    },
    lines: {
      en: [
        'Pragmatic, hands-on, and product-aware',
        'Strong in debugging, integration, and production support',
        'Comfortable leading planning, reviews, coordination, and implementation'
      ],
      'zh-Hant': [
        '偏務實、hands-on、以交付為主',
        '擅長除錯、整合與正式環境支援',
        '可同時處理規劃、Code Review、協作溝通與實作'
      ]
    }
  }
]

const capabilitiesContent = {
  title: {
    en: 'Technical strengths',
    'zh-Hant': '技術重點'
  }
}

const capabilityGroups: LocalizedCapabilityGroup[] = [
  {
    title: {
      en: 'Mobile and client',
      'zh-Hant': '行動端與客戶端'
    },
    items: {
      en: ['Android', 'Kotlin', 'Java', 'Flutter', 'Unity collaboration', 'JNI', 'SQLite'],
      'zh-Hant': ['Android', 'Kotlin', 'Java', 'Flutter', 'Unity 協作', 'JNI', 'SQLite']
    }
  },
  {
    title: {
      en: 'Backend and integration',
      'zh-Hant': 'Backend 與整合'
    },
    items: {
      en: ['Go', 'RPC', 'REST API', 'WebSocket', 'Redis', 'Postgres', 'third-party service integration'],
      'zh-Hant': ['Go', 'RPC', 'REST API', 'WebSocket', 'Redis', 'Postgres', '第三方服務與系統整合']
    }
  },
  {
    title: {
      en: 'SDK, device, and delivery',
      'zh-Hant': 'SDK、裝置與交付'
    },
    items: {
      en: ['Android Library', 'Unity SDK', 'BLE/IoT', 'internal tools', 'code review', 'technical planning'],
      'zh-Hant': ['Android Library', 'Unity SDK', 'BLE/IoT', '內部工具', 'Code Review', '技術規劃']
    }
  }
]

const projectsContent = {
  title: {
    en: 'Selected impact',
    'zh-Hant': '代表成果'
  }
}

const projects: LocalizedProject[] = [
  {
    title: {
      en: 'Texas Hold’em backend, Unity SDK, and operational tooling',
      'zh-Hant': '德州撲克手遊 Backend、Unity SDK 與營運工具'
    },
    role: {
      en: 'Unity Lead & Backend Engineer',
      'zh-Hant': 'Unity 組長/Backend 工程師'
    },
    period: {
      en: '2022 - 2026',
      'zh-Hant': '2022 - 2026'
    },
    summary: {
      en: 'Own backend development, Unity SDK maintenance, tooling, and technical planning for a live mobile game.',
      'zh-Hant': '負責遊戲後端、Unity SDK、工具與技術規劃，工作同時涵蓋開發、維運與協作。'
    },
    highlights: {
      en: [
        'Designed game RPC services, admin APIs, and third-party integrations.',
        'Built batch account creation and multi-instance simulation tools for QA and load testing.',
        'Investigated timeout issues and removed production performance bottlenecks.'
      ],
      'zh-Hant': [
        '設計遊戲 RPC、營運後台 API 與第三方整合。',
        '開發批次建帳與多開模擬工具，降低 QA 成本並支援壓測。',
        '分析並排除 timeout 與正式環境效能瓶頸。'
      ]
    },
    stack: {
      en: ['Go', 'Unity', 'RPC', 'Redis', 'Postgres', 'tooling'],
      'zh-Hant': ['Go', 'Unity', 'RPC', 'Redis', 'Postgres', '工具開發']
    }
  },
  {
    title: {
      en: 'Real-time trading features on Android',
      'zh-Hant': '即時交易型 Android 功能交付'
    },
    role: {
      en: 'Senior Android Engineer',
      'zh-Hant': 'Android 資深工程師'
    },
    period: {
      en: '2022 - 2023',
      'zh-Hant': '2022 - 2023'
    },
    summary: {
      en: 'Handled Android maintenance and feature delivery for a digital asset trading product with real-time architecture demands.',
      'zh-Hant': '負責數位資產交易平台 Android 維護與交易相關功能開發。'
    },
    highlights: {
      en: [
        'Refactored WebSocket-related architecture for cleaner long-term maintenance.',
        'Delivered QR code login and third-party login integrations.',
        'Implemented spot and futures trading flows alongside UI refresh work.'
      ],
      'zh-Hant': [
        '整理 WebSocket 相關架構，降低後續維護成本。',
        '實作 QR Code 登入與第三方登入整合。',
        '交付現貨、合約交易流程與 UI 改版內容。'
      ]
    },
    stack: {
      en: ['Android', 'Kotlin', 'WebSocket', 'authentication', 'trading UX'],
      'zh-Hant': ['Android', 'Kotlin', 'WebSocket', '登入整合', '交易流程']
    }
  },
  {
    title: {
      en: 'Cross-platform SDK and BLE consulting work',
      'zh-Hant': '跨平台 SDK 與 BLE 顧問型合作'
    },
    role: {
      en: 'Partner',
      'zh-Hant': '合作夥伴'
    },
    period: {
      en: '2018 - 2026',
      'zh-Hant': '2018 - 2026'
    },
    summary: {
      en: 'Supported Android and Flutter clients across SDK maintenance, BLE, IoT, media, and custom product requirements.',
      'zh-Hant': '長期支援 Android 與 Flutter 客戶處理 SDK、BLE、IoT、影音與客製化需求。'
    },
    highlights: {
      en: [
        'Maintained Android and Flutter SDKs for long-running client products.',
        'Delivered BLE integrations for health, electrotherapy, sleep-device, and social app scenarios.',
        'Handled customization work across streaming, media, ticketing, and e-commerce products.'
      ],
      'zh-Hant': [
        '維護 Android 與 Flutter SDK，支援長期產品演進。',
        '處理健康、電療、睡眠裝置等 BLE/IoT 整合。',
        '支援直播、影音、票券與電商等不同場景。'
      ]
    },
    stack: {
      en: ['Android', 'Flutter', 'BLE', 'SDK maintenance', 'custom integration'],
      'zh-Hant': ['Android', 'Flutter', 'BLE', 'SDK 維護', '客製化整合']
    }
  },
  {
    title: {
      en: 'Navigation and mobility products at PAPAGO! Group',
      'zh-Hant': 'PAPAGO! 導航與移動產品'
    },
    role: {
      en: 'Software Engineer / Assistant Technical Manager',
      'zh-Hant': '軟體工程師/技術副理'
    },
    period: {
      en: '2010 - 2017',
      'zh-Hant': '2010 - 2017'
    },
    summary: {
      en: 'Built navigation-related products across Android, Windows Phone, PND, and OBU platforms.',
      'zh-Hant': '參與 Android、Windows Phone、PND、OBU 等導航產品開發。'
    },
    highlights: {
      en: [
        'Worked on navigation products across multiple client platforms.',
        'Handled BLE, JNI, SQLite, and REST-based integrations.',
        'Supported products recognized in carrier and device-maker app competitions.'
      ],
      'zh-Hant': [
        '處理導航相關功能與多平台版本。',
        '負責 BLE、JNI、SQLite 與 REST 整合。',
        '參與遠傳、三星等競賽，產品曾於 Google Play 名列前茅。'
      ]
    },
    stack: {
      en: ['Android', 'Windows Phone', 'JNI', 'SQLite', 'navigation'],
      'zh-Hant': ['Android', 'Windows Phone', 'JNI', 'SQLite', '導航系統']
    }
  }
]

const experienceContent = {
  title: {
    en: 'Career timeline',
    'zh-Hant': '工作經歷'
  }
}

const experiences: LocalizedExperience[] = [
  {
    company: '萬星科技 / 9dimensions, Inc.',
    role: {
      en: 'Unity Lead & Backend Engineer',
      'zh-Hant': 'Unity 組長/Backend 工程師'
    },
    period: {
      en: '2022 - 2026',
      'zh-Hant': '2022 - 2026'
    },
    note: {
      en: 'Engineering team transferred to WanSing Technology in Nov 2024 after an organizational merger.',
      'zh-Hant': '2024/11 因組織整併，全體工程團隊由「9dimensions」轉任至「萬星科技」。'
    },
    summary: {
      en: 'Backend services, Unity SDK development, internal tools, and technical planning for a Texas Hold’em mobile game.',
      'zh-Hant': '負責德州撲克手遊 Backend、Unity SDK、內部工具與技術規劃。'
    },
    bullets: {
      en: [
        'Develop backend services, Unity SDK modules, and operational support tooling.',
        'Design RPC services, admin APIs, scheduled jobs, and third-party integrations.',
        'Lead Unity planning, code reviews, and technical discussions while staying hands-on.'
      ],
      'zh-Hant': [
        '開發後端服務、Unity SDK 模組與營運支援工具。',
        '設計 RPC、後台 API、排程服務與第三方整合。',
        '帶領 Unity 規劃、Code Review 與技術討論，同時維持 hands-on 開發。'
      ]
    }
  },
  {
    company: 'Digifinex',
    role: {
      en: 'Senior Android Engineer',
      'zh-Hant': 'Android 資深工程師'
    },
    period: {
      en: 'Jun 2022 - May 2023',
      'zh-Hant': '2022/06 - 2023/05'
    },
    summary: {
      en: 'Android maintenance and trading feature delivery for a digital asset trading platform.',
      'zh-Hant': '負責數位資產交易平台 Android 維護與交易功能開發。'
    },
    bullets: {
      en: [
        'Refactored WebSocket-related architecture.',
        'Implemented QR code login and third-party login integrations.',
        'Delivered spot and futures trading features and supported UI redesign.'
      ],
      'zh-Hant': [
        '整理 WebSocket 相關架構。',
        '實作 QR Code 登入與第三方登入。',
        '交付現貨、合約交易流程與 UI 改版。'
      ]
    }
  },
  {
    company: 'Miiitech',
    role: {
      en: 'Senior Android Engineer',
      'zh-Hant': 'Android 資深工程師'
    },
    period: {
      en: 'Dec 2021 - Jun 2022',
      'zh-Hant': '2021/12 - 2022/06'
    },
    summary: {
      en: 'Supported exchange-related systems and group-level product requirements.',
      'zh-Hant': '支援集團層級需求，處理交易所維護與相關系統開發。'
    },
    bullets: {
      en: [
        'Maintained exchange systems and related product modules.',
        'Supported internal membership system work.',
        'Delivered white-label platform features.'
      ],
      'zh-Hant': [
        '維護交易所相關系統。',
        '協助會員系統相關工作。',
        '開發包網平台功能。'
      ]
    }
  },
  {
    company: '創弈人數位科技股份有限公司 / 布洛卡斯股份有限公司',
    role: {
      en: 'Chief Information Officer',
      'zh-Hant': '資訊長'
    },
    period: {
      en: 'Jul 2017 - Dec 2021',
      'zh-Hant': '2017/07 - 2021/12'
    },
    note: {
      en: 'Team moved from Blockast to ChuangYiRen Digital Technology in Dec 2021.',
      'zh-Hant': '2021/12 團隊由「布洛卡斯」轉至「創弈人數位科技」。'
    },
    summary: {
      en: 'Expanded from Android development into broader technical leadership across messaging, BLE, libraries, payments, Firebase, chat, Flutter, and game work.',
      'zh-Hant': '從 Android 開發擴展到更完整的技術帶領，涵蓋即時通訊、BLE、Library、金流、Firebase、Chat、Flutter 與遊戲相關工作。'
    },
    bullets: {
      en: [
        'Led Android development, delivery coordination, and technical decision-making.',
        'Worked on ride-hailing, BLE wearables, Android libraries, billing, Firebase, chat, and Flutter projects.',
        'Built Android libraries bridging Unity and native Android layers.'
      ],
      'zh-Hant': [
        '帶領 Android 開發、交付節奏與技術決策。',
        '參與即時叫車、BLE 穿戴、Billing、Firebase、Chat 與 Flutter 專案。',
        '開發 Unity 與 Android 之間的橋接 Library。'
      ]
    }
  },
  {
    company: 'FUNTEK',
    role: {
      en: 'Partner',
      'zh-Hant': '合作夥伴'
    },
    period: {
      en: '2018 - 2026',
      'zh-Hant': '2018 - 2026'
    },
    summary: {
      en: 'Long-term partner for Android and Flutter client projects spanning SDK, BLE, IoT, media, e-commerce, ticketing, and streaming.',
      'zh-Hant': '長期支援 Android、Flutter、BLE、IoT、影音、電商、票券與直播類客戶專案。'
    },
    bullets: {
      en: [
        'Maintained Android and Flutter SDKs and handled customization requests.',
        'Delivered BLE integrations for health and sleep devices.',
        'Supported clients across media, training, e-commerce, and sports-streaming products.'
      ],
      'zh-Hant': [
        '維護 Android 與 Flutter SDK，並處理客製化需求。',
        '交付健康與睡眠裝置相關 BLE 整合。',
        '支援影音、訓練平台、電商與運動直播等產品。'
      ]
    }
  },
  {
    company: '研勤科技股份有限公司 / 研鼎崧圖股份有限公司',
    role: {
      en: 'Software Engineer / Assistant Technical Manager',
      'zh-Hant': '軟體工程師/技術副理'
    },
    period: {
      en: 'Sep 2010 - Jul 2017',
      'zh-Hant': '2010/09 - 2017/07'
    },
    note: {
      en: 'Transferred internally to subsidiary Maction Technologies in Feb 2012.',
      'zh-Hant': '2012/02 從「研勤科技」內部轉調至子公司「研鼎崧圖」。'
    },
    summary: {
      en: 'Worked on navigation products across Android, Windows Phone, PND, and OBU platforms.',
      'zh-Hant': '參與 Android、Windows Phone、PND、OBU 等導航產品開發。'
    },
    bullets: {
      en: [
        'Built Android navigation products and platform-specific features.',
        'Worked on BLE, JNI, SQLite, and REST-based systems.',
        'Supported products recognized in Far EasTone and Samsung app competitions.'
      ],
      'zh-Hant': [
        '開發 Android 導航產品與平台相關功能。',
        '處理 BLE、JNI、SQLite 與 REST API 整合。',
        '支援遠傳、三星等競賽產品開發。'
      ]
    }
  }
]

const contactMethods: LocalizedContactMethod[] = [
  {
    href: 'mailto:chen.tzuwei@gmail.com',
    label: {
      en: 'Email',
      'zh-Hant': 'Email'
    },
    value: {
      en: 'chen.tzuwei@gmail.com',
      'zh-Hant': 'chen.tzuwei@gmail.com'
    }
  },
  {
    label: {
      en: 'Phone',
      'zh-Hant': 'Phone'
    },
    value: {
      en: '+886 911 732 330',
      'zh-Hant': '+886 911 732 330'
    }
  },
  {
    label: {
      en: 'Location',
      'zh-Hant': 'Location'
    },
    value: {
      en: 'Taoyuan City, Taiwan',
      'zh-Hant': '桃園市，台灣'
    }
  },
  {
    label: {
      en: 'Open to',
      'zh-Hant': 'Open to'
    },
    value: {
      en: 'Taipei, New Taipei, Taoyuan, remote-friendly collaboration',
      'zh-Hant': '台北/新北/桃園，也可遠端協作'
    }
  }
]

const seoContent: LangTable<SeoContent> = {
  en: {
    title: 'Tzuwei Chen | Senior Software Engineer',
    description:
      'Senior software engineer specializing in Android, backend systems, SDK delivery, BLE integration, and technical leadership.',
    keywords: ['Tzuwei Chen', 'Senior Software Engineer', 'Android', 'Go backend', 'Unity SDK', 'Flutter', 'BLE', 'Taiwan']
  },
  'zh-Hant': {
    title: 'Tzuwei Chen | 資深軟體工程師',
    description: '專長涵蓋 Android、Backend、SDK、BLE 與技術帶領的資深軟體工程師。',
    keywords: ['Tzuwei Chen', '資深軟體工程師', 'Android', 'Backend', 'SDK', 'BLE', 'Unity', 'Flutter', '台灣']
  }
}

const structuredDataJobTitle: LangTable<string> = {
  en: 'Senior Software Engineer',
  'zh-Hant': '資深軟體工程師'
}

const structuredDataDescription: LangTable<string> = {
  en:
    'Senior software engineer with 15+ years across Android, backend systems, SDK delivery, Unity collaboration, Flutter, BLE, and technical leadership.',
  'zh-Hant': '超過 15 年經驗的資深軟體工程師，橫跨 Android、Backend、SDK、Unity、Flutter、BLE 與技術帶領。'
}

function pick<T>(locale: Locale, table: LangTable<T>): T {
  return table[locale]
}

function localizeStats(locale: Locale, items: LocalizedStat[]): StatItem[] {
  return items.map((item) => ({
    value: item.value,
    label: pick(locale, item.label)
  }))
}

function localizeInfoCards(locale: Locale, items: LocalizedInfoCard[]): InfoCard[] {
  return items.map((item) => ({
    title: pick(locale, item.title),
    lines: pick(locale, item.lines)
  }))
}

function localizeCapabilityGroups(locale: Locale, items: LocalizedCapabilityGroup[]): CapabilityGroup[] {
  return items.map((item) => ({
    title: pick(locale, item.title),
    items: pick(locale, item.items)
  }))
}

function localizeProjects(locale: Locale, items: LocalizedProject[]): ProjectItem[] {
  return items.map((item) => ({
    title: pick(locale, item.title),
    role: pick(locale, item.role),
    period: pick(locale, item.period),
    summary: pick(locale, item.summary),
    highlights: pick(locale, item.highlights),
    stack: pick(locale, item.stack)
  }))
}

function localizeExperiences(locale: Locale, items: LocalizedExperience[]): ExperienceItem[] {
  return items.map((item) => ({
    company: item.company,
    role: pick(locale, item.role),
    period: pick(locale, item.period),
    note: item.note ? pick(locale, item.note) : undefined,
    summary: pick(locale, item.summary),
    bullets: pick(locale, item.bullets)
  }))
}

function localizeContactMethods(locale: Locale, items: LocalizedContactMethod[]): ContactMethod[] {
  return items.map(({ label, value, ...rest }) => ({
    ...rest,
    label: pick(locale, label),
    value: pick(locale, value)
  }))
}

function buildContent(locale: Locale): LocalizedContent {
  return {
    localeLabel: pick(locale, localeNames),
    hero: {
      kicker: pick(locale, heroContent.kicker),
      headline: pick(locale, heroContent.headline),
      lede: pick(locale, heroContent.lede),
      panelCopy: pick(locale, heroContent.panelCopy),
      panelItems: pick(locale, heroContent.panelItems),
      stats: localizeStats(locale, heroStats)
    },
    overview: {
      cards: localizeInfoCards(locale, overviewCards)
    },
    capabilities: {
      title: pick(locale, capabilitiesContent.title),
      groups: localizeCapabilityGroups(locale, capabilityGroups)
    },
    projects: {
      title: pick(locale, projectsContent.title),
      items: localizeProjects(locale, projects)
    },
    experience: {
      title: pick(locale, experienceContent.title),
      items: localizeExperiences(locale, experiences)
    },
    contact: {
      methods: localizeContactMethods(locale, contactMethods)
    },
    seo: pick(locale, seoContent),
    structuredDataJobTitle: pick(locale, structuredDataJobTitle),
    structuredDataDescription: pick(locale, structuredDataDescription)
  }
}

export const content: Record<Locale, LocalizedContent> = Object.fromEntries(
  localeOrder.map((locale) => [locale, buildContent(locale)])
) as Record<Locale, LocalizedContent>
