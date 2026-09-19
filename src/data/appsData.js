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
    size: '65.8 MB',
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
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80'
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
    size: '97.6 MB',
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
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80'
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
    id: 'decideflow',
    name: 'DecideFlow',
    tagline: 'Rule-Based Decision Engine, Smart Flowchart Navigator & Matrix Evaluator',
    description: 'DecideFlow is a native Android decision support application built with modern Kotlin and Jetpack Compose. Powered by an intelligent Rule-Based Decision Engine, DecideFlow helps users eliminate decision fatigue, structure complex dilemmas through guided decision trees, score outcomes objectively, and track past conclusions with local offline persistence.',
    icon: './decideflow-icon.svg',
    banner: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&auto=format&fit=crop&q=80',
    category: 'productivity',
    techStack: ['Kotlin', 'Jetpack Compose', 'Rule Engine', 'Material 3', 'Coroutines', 'Android SDK'],
    version: '1.0.0',
    versionCode: 1,
    size: '12.8 MB',
    sizeBytes: 13421772,
    developer: 'Nihar Puthran',
    packageName: 'com.decideflow.app',
    minAndroid: 'Android 8.0 (API 26+)',
    targetAndroid: 'Android 14 (API 34)',
    architecture: 'Universal / ARM64',
    releaseDate: '19 Sep 2026',
    lastUpdated: '19 Sep 2026',
    rating: 5.0,
    reviewCount: 14,
    downloads: '250+',
    status: 'Completed',
    apkUrl: 'https://github.com/IchigoxBankai/Decide-Flow/releases/download/decideflow/app-debug.apk',
    githubUrl: 'https://github.com/IchigoxBankai/Decide-Flow',
    isFeatured: true,
    isTrending: true,
    isNew: true,
    sha256: '7e2c918a45b84c8a2b3491f618a8047ce562148d1e2e92c0199e4f51390d4f20',
    tags: ['Kotlin', 'Jetpack Compose', 'Decision Engine', 'Productivity', 'Android'],
    features: [
      'Rule-Based Decision Engine: Evaluates complex choices, criteria weighting, and branch conditions to calculate high-confidence recommendations',
      'Visual Decision Trees & Flow Logic: Create custom branching flowcharts to navigate multifaceted decisions step-by-step',
      'Zero Decision Fatigue: Guided questionnaire mode simplifies difficult trade-offs into quick yes/no logic checks',
      'Local Offline History & Journal: Archive decision logs, rationale, and outcome retrospectives privately on-device',
      'Modern Jetpack Compose UI: Smooth Material 3 interface with intuitive drag-and-drop hierarchy and dark/light themes'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
    ],
    changelog: [
      {
        version: 'v1.0.0',
        date: '19 Sep 2026',
        notes: [
          'Initial public release of DecideFlow debug build APK for Android',
          'Rule-Based Decision Engine core logic module',
          'Interactive decision tree builder and questionnaire interface',
          'Jetpack Compose Material 3 dark/light responsive layout',
          'Offline decision archiving & criteria scoring matrix'
        ]
      }
    ],
    permissions: [
      {
        name: 'android.permission.INTERNET',
        description: 'Optional network connectivity for syncing release updates and export templates.'
      }
    ]
  }
];

