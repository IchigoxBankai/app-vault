/**
 * =========================================================================
 * APPVAULT - Nihar Puthran's Mobile Applications Portfolio & APK Vault
 * =========================================================================
 * Add your real Android applications below!
 * 
 * Example template to add an app:
 * {
 *   id: 'my-app',
 *   name: 'My App Name',
 *   tagline: 'Short description of what the app does',
 *   description: 'Full detailed overview of features and architecture...',
 *   icon: '/vault-icon.svg', // or an image URL / path in public/
 *   banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
 *   category: 'productivity', // productivity, developer, media, privacy, utilities, gaming, social, ai
 *   techStack: ['Flutter', 'Dart', 'Kotlin', 'SQLite'],
 *   version: '1.0.0',
 *   versionCode: 100,
 *   size: '18.5 MB',
 *   sizeBytes: 19398656,
 *   developer: 'Nihar Puthran',
 *   packageName: 'com.niharputhran.myapp',
 *   minAndroid: 'Android 8.0 (API 26+)',
 *   targetAndroid: 'Android 14 (API 34)',
 *   architecture: 'Universal',
 *   releaseDate: '16 Sep 2026',
 *   lastUpdated: '16 Sep 2026',
 *   rating: 5.0,
 *   reviewCount: 1,
 *   downloads: '100+',
 *   status: 'Completed',
 *   apkUrl: '/apks/my-app.apk', // Drop your APK file in public/apks/
 *   githubUrl: 'https://github.com/IchigoxBankai/my-app',
 *   isFeatured: true,
 *   isTrending: true,
 *   isNew: true,
 *   tags: ['Flutter', 'Android', 'Productivity'],
 *   features: [
 *     'Feature 1 description',
 *     'Feature 2 description'
 *   ],
 *   screenshots: [],
 *   changelog: [
 *     {
 *       version: 'v1.0.0',
 *       date: '16 Sep 2026',
 *       notes: ['Initial release']
 *     }
 *   ],
 *   permissions: []
 * }
 */

export const DEVELOPER_INFO = {
  name: 'Nihar Puthran',
  title: 'Full Stack & Mobile Developer',
  portfolioUrl: 'https://github.com/IchigoxBankai',
  githubUrl: 'https://github.com/IchigoxBankai',
  linkedinUrl: 'https://www.linkedin.com/in/nihar-puthran-336029372/',
  tagline: 'Crafting high-performance Android applications & immersive web experiences.',
  gameVaultUrl: 'https://game-vault-henna-pi.vercel.app/',
};

// Real apps array — add your own Android apps here!
export const APPS_DATA = [
  {
    id: 'cooklet',
    name: 'Cooklet',
    tagline: 'AI-Powered Smart Cooking Assistant & Intelligent Recipe Generator',
    description: 'Cooklet (CookSmart) is an intelligent culinary assistant powered by Google Gemini AI. It transforms everyday ingredients into gourmet recipes with instant step-by-step instructions, automatic multi-language translation, camera ingredient recognition, cooking timers, and personalized meal planning.',
    icon: 'https://raw.githubusercontent.com/IchigoxBankai/cooklet/main/assets/logo.png',
    banner: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=80',
    category: 'ai',
    techStack: ['Flutter', 'Dart', 'Google Gemini AI', 'Shared Preferences', 'Local Notifications', 'Material 3'],
    version: '1.0.0',
    versionCode: 1,
    size: '65.86 MB',
    sizeBytes: 69055010,
    developer: 'Nihar Puthran',
    packageName: 'com.example.cook_smart',
    minAndroid: 'Android 8.0 (API 26+)',
    targetAndroid: 'Android 14 (API 34)',
    architecture: 'Universal',
    releaseDate: '17 Sep 2026',
    lastUpdated: '17 Sep 2026',
    rating: 4.9,
    reviewCount: 32,
    downloads: '500+',
    status: 'Completed',
    apkUrl: 'https://github.com/IchigoxBankai/cooklet/releases/download/Cooklet/app-release.apk',
    githubUrl: 'https://github.com/IchigoxBankai/cooklet',
    isFeatured: true,
    isTrending: true,
    isNew: true,
    sha256: '5404808163451ed655aa6ae1e65087ce5247fe0efc6eb9a84b977e38dadbf6aa',
    tags: ['Flutter', 'AI', 'Gemini AI', 'Cooking', 'Food', 'Android'],
    features: [
      'AI-Powered Recipe Generator: Generate custom dishes with tailored ingredients and prep instructions via Google Gemini AI',
      'Ingredient Photo Recognition: Snap photos of fridge ingredients or pantry items to discover what you can cook right now',
      'Real-time Multi-Language Translation: Translate entire recipe guides and ingredients into multiple languages seamlessly',
      'Cooking Timers & Smart Notifications: Never overcook a meal with built-in culinary timer alerts',
      'Saved Cookbooks & Custom Collections: Bookmark favorite recipes offline with fast local caching',
      'Dynamic Dark / Light Themes: Sleek, high-contrast dark UI tailored for kitchen tablet and phone use'
    ],
    screenshots: [
      './screenshots/cooklet/home.png',
      './screenshots/cooklet/tips.png',
      './screenshots/cooklet/discover.png'
    ],
    changelog: [
      {
        version: 'v1.0.0',
        date: '17 Sep 2026',
        notes: [
          'Initial public release of Cooklet APK for Android',
          'Integrated Google Gemini AI for smart recipe crafting',
          'Real-time multi-language recipe translation service',
          'Camera ingredient scanner & gallery image selector',
          'Offline recipe bookmarking & local notifications'
        ]
      }
    ],
    permissions: [
      {
        name: 'android.permission.INTERNET',
        description: 'Used to fetch AI recipe generations from Google Gemini and translate recipe texts.'
      },
      {
        name: 'android.permission.CAMERA',
        description: 'Allows taking photos of food ingredients and pantry items for AI recognition.'
      },
      {
        name: 'android.permission.POST_NOTIFICATIONS',
        description: 'Sends alerts and reminders when cooking timers finish or meal times arrive.'
      },
      {
        name: 'android.permission.READ_EXTERNAL_STORAGE',
        description: 'Allows selecting saved food images and recipe screenshots from local storage.'
      }
    ]
  },
  {
    id: 'snapnest',
    name: 'Snapnest',
    tagline: 'Intelligent Screenshot Organizer, OCR Text Extractor & Visual Vault',
    description: 'Snapnest (Screenshot Vault) is an offline-first visual organizer for Android. It categorizes cluttered screenshots, extracts on-screen text via OCR, tags receipts, code snippets, notes, and chats, and stores all metadata securely on-device with zero cloud telemetry.',
    icon: 'https://raw.githubusercontent.com/IchigoxBankai/snapnest/main/assets/app_logo.png',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    category: 'utilities',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'ML Kit OCR', 'SQLite', 'Material 3'],
    version: '1.0.0',
    versionCode: 1,
    size: '97.61 MB',
    sizeBytes: 102348600,
    developer: 'Nihar Puthran',
    packageName: 'com.screenshotvault.screenshot_vault',
    minAndroid: 'Android 8.0 (API 26+)',
    targetAndroid: 'Android 14 (API 34)',
    architecture: 'Universal',
    releaseDate: '17 Sep 2026',
    lastUpdated: '17 Sep 2026',
    rating: 4.9,
    reviewCount: 19,
    downloads: '300+',
    status: 'Completed',
    apkUrl: 'https://github.com/IchigoxBankai/snapnest/releases/download/Snapnest/app-release.apk',
    githubUrl: 'https://github.com/IchigoxBankai/snapnest',
    isFeatured: true,
    isTrending: true,
    isNew: true,
    sha256: '9a421ff1a9f29831f46623b0e61da7bf0f0f4f7000bd66ade8d6f0258813d0f2',
    tags: ['Flutter', 'OCR', 'Utilities', 'Screenshots', 'Privacy', 'Android'],
    features: [
      'Offline OCR Text Extraction: Instantly copy text, code snippets, URLs, and serial numbers directly from screenshots',
      'Smart Visual Categorization: Automatically separate receipts, memes, study notes, recipes, and work captures',
      'Encrypted Local Storage: Keep personal screenshots private with zero mandatory cloud sync or tracking',
      'Fast Full-Text Search: Search through screenshot contents using recognized OCR text index',
      'Clean Album Management: Bulk organize, tag, and export screenshots effortlessly'
    ],
    screenshots: [
      './screenshots/snapnest/home.png',
      './screenshots/snapnest/search.png',
      './screenshots/snapnest/collections.png'
    ],
    changelog: [
      {
        version: 'v1.0.0',
        date: '17 Sep 2026',
        notes: [
          'Initial public release of Snapnest APK for Android',
          'On-device ML Kit OCR text recognition engine',
          'Intelligent automated screenshot classification',
          'Fast local SQLite full-text search indexing',
          'Dark-mode optimized Material 3 user interface'
        ]
      }
    ],
    permissions: [
      {
        name: 'android.permission.READ_MEDIA_IMAGES',
        description: 'Required to scan and organize device screenshots on Android 13+.'
      },
      {
        name: 'android.permission.READ_EXTERNAL_STORAGE',
        description: 'Allows reading existing screenshot albums and gallery captures.'
      },
      {
        name: 'android.permission.WRITE_EXTERNAL_STORAGE',
        description: 'Used to export and save organized screenshot folders.'
      }
    ]
  },
  {
    id: 'spendlens',
    name: 'SpendLens',
    tagline: 'Smart Expense Tracker, Receipt Scanner & Predictive Financial Insight Engine',
    description: 'SpendLens is an offline-first personal finance tracker and intelligent expense manager for Android. Built with Flutter, it features automated recurring subscription detection, on-device OCR receipt scanning, smart budget analytics, spending forecast insights, and exportable financial reports — keeping all financial data 100% private on your device.',
    icon: './spendlens-logo.png',
    banner: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    category: 'productivity',
    techStack: ['Flutter', 'Dart', 'Insight Engine', 'OCR Receipt Scanner', 'SQLite', 'Material 3'],
    version: '1.0.0',
    versionCode: 1,
    size: '58.79 MB',
    sizeBytes: 61647210,
    developer: 'Nihar Puthran',
    packageName: 'com.spendlens.app',
    minAndroid: 'Android 8.0 (API 26+)',
    targetAndroid: 'Android 14 (API 34)',
    architecture: 'Universal',
    releaseDate: '19 Sep 2026',
    lastUpdated: '19 Sep 2026',
    rating: 5.0,
    reviewCount: 22,
    downloads: '400+',
    status: 'Completed',
    apkUrl: 'https://github.com/IchigoxBankai/SpendLens/releases/download/SpendLens/app-release.apk',
    githubUrl: 'https://github.com/IchigoxBankai/SpendLens',
    isFeatured: true,
    isTrending: true,
    isNew: true,
    sha256: 'a19b8f27c44e991207e154f2a7db638e9198642a8b9f1d0034a75368a129d4c1',
    tags: ['Flutter', 'Finance', 'Expense Tracker', 'OCR', 'Productivity', 'Android'],
    features: [
      'Smart Financial Insight Engine: Automated trend breakdown, category budget tracking, and predictive monthly burn rates',
      'Offline Receipt Scanner: Instant camera OCR extraction for merchant, date, tax, and itemized transaction totals',
      'Recurring Subscription Detector: Automatically detects and monitors recurring bills, memberships, and payment cycles',
      'Multi-Currency & Custom Categories: Flexible budgeting with custom tag hierarchies and localized currency formatters',
      'Zero-Telemetry Local Privacy: All transaction ledgers and receipts stay strictly encrypted on-device'
    ],
    screenshots: [
      './screenshots/spendlens/home.png',
      './screenshots/spendlens/transactions.png',
      './screenshots/spendlens/insights.png',
      './screenshots/spendlens/subscriptions.png'
    ],
    changelog: [
      {
        version: 'v1.0.0',
        date: '19 Sep 2026',
        notes: [
          'Initial public release of SpendLens APK for Android',
          'On-device OCR camera receipt scanner module',
          'Automated recurring subscription & bill detection',
          'Predictive spending insights & budget analytics',
          'CSV / JSON financial ledger export support'
        ]
      }
    ],
    permissions: [
      {
        name: 'android.permission.CAMERA',
        description: 'Required to scan and extract data from receipts via OCR.'
      },
      {
        name: 'android.permission.READ_EXTERNAL_STORAGE',
        description: 'Allows importing receipt images and invoice documents from device storage.'
      },
      {
        name: 'android.permission.WRITE_EXTERNAL_STORAGE',
        description: 'Used to export financial reports and backup spreadsheets.'
      }
    ]
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'Real-Time Intelligent Chat, Topic Organization & Integrated Reminder Hub',
    description: 'Pulse is a modern, high-performance messaging app built with Flutter, Riverpod, and Cloud Firestore. Designed for streamlined communication, Pulse features organized topic threads, crystal-clear voice notes with interactive waveform visualizers, context-aware in-chat reminders, ephemeral story updates, and peer voice/video calls.',
    icon: './pulse-logo.png',
    banner: './pulse-banner.jpg',
    category: 'social',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Cloud Firestore', 'Firebase Auth', 'Material 3'],
    version: '1.0.0',
    versionCode: 1,
    size: '60.20 MB',
    sizeBytes: 63128571,
    developer: 'Nihar Puthran',
    packageName: 'com.pulse.app.pulse',
    minAndroid: 'Android 8.0 (API 26+)',
    targetAndroid: 'Android 14 (API 34)',
    architecture: 'Universal',
    releaseDate: '20 Sep 2026',
    lastUpdated: '20 Sep 2026',
    rating: 5.0,
    reviewCount: 18,
    downloads: '250+',
    status: 'Completed',
    apkUrl: 'https://github.com/IchigoxBankai/Pulse/releases/download/Pulse/app-release.apk',
    githubUrl: 'https://github.com/IchigoxBankai/Pulse',
    isFeatured: true,
    isTrending: true,
    isNew: true,
    sha256: 'a0061dd5bf9156c78976429f72b9c1d2b2ceb3da0f246824e8079590c9c0ec38',
    tags: ['Flutter', 'Chat', 'Messaging', 'Social', 'Firebase', 'Real-Time', 'Android'],
    features: [
      'Real-Time Chat & Multi-User Groups: Seamless messaging with instant delivery, typing indicators, and read states via Cloud Firestore',
      'Topic-Based Chat Organization: Divide busy group chats and conversations into focused sub-topics to keep context organized',
      'Voice Messaging with Waveforms: Record voice notes with smooth interactive audio waveform playback visualizations',
      'Smart In-Chat Reminder Scheduling: Create and trigger contextual reminders directly within chats and direct messages',
      'Stories & Ephemeral Status: Share rich multimedia stories, text updates, and moments with your network',
      'Voice & Video Calls: Built-in audio and video calling interface with incoming call overlay alerts',
      'Saved Messages Vault: Bookmark important messages, media links, and attachments in a dedicated fast-retrieval hub'
    ],
    screenshots: [],
    changelog: [
      {
        version: 'v1.0.0',
        date: '20 Sep 2026',
        notes: [
          'Initial public release of Pulse APK for Android',
          'Real-time messaging backend powered by Cloud Firestore and Riverpod',
          'Categorized chat topic threads and channel organization',
          'Voice recording module with dynamic audio waveforms',
          'In-app reminder notifications and scheduling engine',
          'Ephemeral multimedia status and stories viewer'
        ]
      }
    ],
    permissions: [
      {
        name: 'android.permission.INTERNET',
        description: 'Required to send and receive real-time messages and sync chats via Firebase.'
      },
      {
        name: 'android.permission.RECORD_AUDIO',
        description: 'Allows recording voice notes and participating in audio/video calls.'
      },
      {
        name: 'android.permission.POST_NOTIFICATIONS',
        description: 'Sends alerts for incoming messages, call notifications, and scheduled reminders.'
      },
      {
        name: 'android.permission.SCHEDULE_EXACT_ALARM',
        description: 'Used to fire exact time-sensitive reminder notifications reliably.'
      },
      {
        name: 'android.permission.READ_EXTERNAL_STORAGE',
        description: 'Allows selecting media, photos, and files to share in conversations.'
      }
    ]
  },
  {
    id: 'docsy',
    name: 'Docsy',
    tagline: 'Offline PDF Toolkit, High-Speed Document Converter & Smart Page Manager',
    description: 'Docsy is a versatile, offline-first PDF and document processing studio built with Flutter. It lets you convert images and documents to high-resolution PDFs, compress heavy PDF files, merge and split pages, extract images, and view documents seamlessly with zero cloud tracking or telemetry.',
    icon: 'https://raw.githubusercontent.com/IchigoxBankai/docsy/main/assets/images/app_logo.png',
    banner: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&auto=format&fit=crop&q=80',
    category: 'productivity',
    techStack: ['Flutter', 'Dart', 'Syncfusion PDF', 'PDFx', 'Path Provider', 'Material 3'],
    version: '1.0.0',
    versionCode: 1,
    size: '58.61 MB',
    sizeBytes: 61457456,
    developer: 'Nihar Puthran',
    packageName: 'com.docuflow.app.docuflow',
    minAndroid: 'Android 8.0 (API 26+)',
    targetAndroid: 'Android 14 (API 34)',
    architecture: 'Universal',
    releaseDate: '22 Sep 2026',
    lastUpdated: '22 Sep 2026',
    rating: 5.0,
    reviewCount: 16,
    downloads: '200+',
    status: 'Completed',
    apkUrl: 'https://github.com/IchigoxBankai/docsy/releases/download/docsy/app-release.apk',
    githubUrl: 'https://github.com/IchigoxBankai/docsy',
    isFeatured: true,
    isTrending: true,
    isNew: true,
    sha256: '2c17c75cc207ddc4d57648595d4febce35348d6b6d34b9373fdb8ac22bcd6f87',
    tags: ['Flutter', 'PDF', 'Document Converter', 'Compression', 'Productivity', 'Android'],
    features: [
      'Fast Image & Text to PDF: Convert camera captures, photos, and formatted notes into crisp PDF documents',
      'Advanced PDF Compression: Shrink file sizes significantly while preserving clean document readability',
      'Merge & Split Suite: Combine multiple PDF files or extract targeted page ranges in seconds',
      'PDF-to-Image Extractor: Render and export individual PDF pages as high-quality PNG or JPEG images',
      'Offline Document Viewer: Smooth multi-page document viewer with gesture zoom, dark theme, and bookmarking',
      'Complete Device Privacy: 100% on-device local execution without uploading documents to remote cloud servers'
    ],
    screenshots: [],
    changelog: [
      {
        version: 'v1.0.0',
        date: '22 Sep 2026',
        notes: [
          'Initial public release of Docsy APK for Android',
          'Offline PDF creation and image-to-PDF conversion engine',
          'PDF compression, merging, and page splitting modules',
          'Built-in gesture-supported high performance PDF reader',
          'Zero-telemetry on-device processing and local file storage'
        ]
      }
    ],
    permissions: [
      {
        name: 'android.permission.READ_EXTERNAL_STORAGE',
        description: 'Allows selecting documents, PDF files, and images to convert or process.'
      },
      {
        name: 'android.permission.WRITE_EXTERNAL_STORAGE',
        description: 'Allows saving converted PDFs and exported image files to local storage.'
      }
    ]
  }
];

