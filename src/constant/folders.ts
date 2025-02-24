export interface FileTree {
  id: number | string
  label: {
    ja: string
    en: string
  }
  href?: string
  files?: FileTree[]
}

export const folders: FileTree[] = [
  {
    id: 'blog',
    label: {
      ja: 'ブログ',
      en: 'Blog',
    },
    files: [
      {
        id: 'tech',
        label: {
          ja: '技術',
          en: 'Tech',
        },
        files: [
          {
            id: 'nextjs-localfont',
            label: {
              ja: 'Next.jsでローカルフォントを使う',
              en: 'Using local fonts in Next.js',
            },
            files: [
            ],
          },
          {
            id: 'vitest-browser-mode',
            label: {
              ja: 'Vitest Browser Modeを活用してブラウザをモックするコードを削除した話',
              en: 'Story of removing code that mocks the browser by utilizing Vitest Browser Mode',
            },
            href: 'https://developers.prtimes.jp/2025/02/21/vitest-browser-mode/',
          },
          {
            id: 'better-auth',
            label: {
              ja: '[パスキー認証] Better Auth',
              en: '[Passkey Auth] Better Auth',
            },
            href: 'https://zenn.dev/r1013t/articles/bcfeb72a22f765',
          },
          {
            id: 'github-auth',
            label: {
              ja: '[GitHub認証] Next.js + Lucia Auth + Prisma + Supabase',
              en: '[GitHub Auth] Next.js + Lucia Auth + Prisma + Supabase',
            },
            href: 'https://zenn.dev/r1013t/articles/next-lucia-prisma',
          },
        ],
      },
      {
        id: 'life',
        label: {
          ja: '日常',
          en: 'Life',
        },
        files: [
          {
            id: 11,
            label: {
              ja: '初ハッカソンから3連続受賞した話',
              en: 'Story of winning 3 consecutive times from the first hackathon',
            },
            href: 'https://sizu.me/ryu_1013/posts/xz7b574v1d61',
          },
          {
            id: 12,
            label: {
              ja: '技育ハッカソンで優秀賞を受賞',
              en: 'GIKU Hackathon won the Excellence Award',
            },
            href: 'https://qiita.com/ryu1013/items/949d674f665373ed5210',
          },
          {
            id: 13,
            label: {
              ja: 'Microsoftゼミで優秀賞を受賞',
              en: 'Microsoft Seminar won the Excellence Award',
            },
            href: 'https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/',
          },
        ],
      },
    ],
  },
  {
    id: 'tutorials',
    label: {
      ja: 'チュートリアル',
      en: 'Tutorials',
    },
    files: [
      {
        id: 'passkey',
        label: {
          ja: 'パスキー認証入門',
          en: 'Introduction to Passkey',
        },
        files: [
        ],
      },
      {
        id: 'macos',
        label: {
          ja: 'macOSアプリ開発入門',
          en: 'Introduction to macOS app development',
        },
        files: [
        ],
      },
    ],
  },
]
