export type Experience = {
  period: string
  company: string
  role: string
  note?: string
  summary: string
  responsibilities?: string[]
  achievements?: string[]
}

export const experiences: Experience[] = [
  {
    period: '2022 - 2026',
    company: 'WanSing Technology / 9dimensions, Inc.',
    role: 'Unity Lead & Backend Engineer',
    note: 'The engineering team was transferred to WanSing Technology in Nov 2024 following an organizational merger.',
    summary:
      'Responsible for backend development, Unity SDK development, internal tools, and technical planning for a Texas Hold’em mobile game.',
    responsibilities: [
      'Develop and maintain backend services and Unity SDKs for the mobile game.',
      'Design and maintain game RPC services, admin panel APIs, and third-party service integrations.',
      'Participate in payment integration, scheduled jobs, and production issue investigation.',
      'Contribute to Unity architecture planning and SDK maintenance.',
      'Lead Unity team planning, code reviews, and technical discussions.'
    ],
    achievements: [
      'Designed and built batch user creation tools to reduce repetitive QA operations.',
      'Developed multi-instance user simulation tools for stress testing and large-scale user simulation.',
      'Investigated and resolved API timeout issues and production performance bottlenecks.',
      'Introduced AI-assisted development workflows to improve daily development efficiency and code output quality.'
    ]
  },
  {
    period: 'Jun 2022 - May 2023',
    company: 'Digifinex',
    role: 'Senior Android Engineer',
    summary:
      'Responsible for Android app maintenance, new feature development, and trading-related features for a digital asset trading platform.',
    responsibilities: [
      'Refactored and maintained WebSocket-related architecture.',
      'Implemented QR code login and third-party login integrations.',
      'Developed spot and futures trading features.',
      'Contributed to UI redesign and product maintenance.'
    ]
  },
  {
    period: 'Dec 2021 - Jun 2022',
    company: 'Miiitech',
    role: 'Senior Android Engineer',
    summary:
      'Worked for the Taiwan IT branch of Sihanoukville-based Baitsa Group, handling group-level product requirements.',
    responsibilities: [
      'Maintained exchange-related systems.',
      'Supported internal membership system development.',
      'Developed white-label platform features.'
    ]
  },
  {
    period: 'Nov 2020 - Dec 2021',
    company: 'ChuangYiRen Digital Technology',
    role: 'Chief Information Officer',
    summary: 'Led technical development and management for a mahjong mobile game.',
    responsibilities: [
      'Managed project development and technical execution.',
      'Developed Unity frontend features.',
      'Developed Unity Android libraries to enable communication between Unity and Android native layers.'
    ]
  },
  {
    period: '2018 - 2026',
    company: 'FUNTEK',
    role: 'Partner',
    summary:
      'Long-term partner supporting Android and Flutter projects across SDK, BLE, IoT, media, e-commerce, and custom solution development.',
    responsibilities: [
      'Maintained and developed SDK features for Android and Flutter products.',
      'Provided customer-specific customization and technical consultation.',
      'Worked on BLE-related applications including blood pressure devices, electrotherapy devices, social applications, and sleep devices.',
      'Supported projects across media platforms, e-commerce, training platforms, ticketing, and sports streaming.'
    ]
  },
  {
    period: 'Jul 2017 - Dec 2021',
    company: 'Blockast',
    role: 'Chief Information Officer',
    note: 'Employees were transferred to ChuangYiRen Digital Technology in Dec 2021.',
    summary:
      'Responsible for Android technical development and team management. Participated in multiple products from requirements and development to release, covering instant messaging, BLE, Android libraries, Google Billing, and Firebase.',
    responsibilities: [
      'Led Android development and team coordination.',
      'Built and maintained products including ride-hailing, BLE wearable devices, Android libraries, Google Billing integrations, Firebase features, DFU, socket communication, chat systems, and Flutter applications.'
    ]
  },
  {
    period: 'Sep 2010 - Jul 2017',
    company: 'PAPAGO! Group / Maction Technologies',
    role: 'Assistant Technical Manager / Software Engineer',
    note: 'Transferred internally to the subsidiary Maction Technologies in Feb 2012.',
    summary:
      'Worked on navigation-related products across Android, Windows Phone, PND, and OBU platforms. Participated in Far EasTone and Samsung app competitions, with products ranked highly on Google Play.',
    responsibilities: [
      'Developed Android navigation products.',
      'Worked on BLE-related integrations.',
      'Developed Windows Phone navigation applications.',
      'Worked with JNI, SQLite, REST APIs, PND navigation, and OBU navigation.'
    ]
  }
]
