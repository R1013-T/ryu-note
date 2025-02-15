interface FileTree {
  id: number | string
  label: string
  href?: string
  files?: FileTree[]
}

export const folders: FileTree[] = [
  {
    id: 'blog',
    label: 'Blog',
    files: [
      {
        id: 11,
        label: '初ハッカソンから3連続受賞した話',
        href: 'https://sizu.me/ryu_1013/posts/xz7b574v1d61',
      },
      {
        id: 12,
        label: '技育Cハッカソンで優秀賞を受賞',
        href: 'https://qiita.com/ryu1013/items/949d674f665373ed5210',
      },
      {
        id: 13,
        label: 'Microsoftゼミで優秀賞を受賞',
        href: 'https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/',
      },
    ],
  },
  {
    id: 'tutorials',
    label: 'Tutorials',
    files: [
      {
        id: 'better-auth',
        label: 'Better AuthでOAuth入門',
        files: [
        ],
      },
      {
        id: 'passkey',
        label: 'パスキー認証入門',
        files: [
        ],
      },
      {
        id: 'nextjs-localfont',
        label: 'Next.jsでローカルフォントを使う',
        files: [
        ],
      },
      {
        id: 'macos',
        label: 'macOSアプリ開発入門',
        files: [
        ],
      },
    ],
  },
  {
    id: 'utils',
    label: 'Utils',
    files: [
      {
        id: 'use-local-storage.ts',
        label: 'useLocalStorage.ts',
      },
    ],
  },
]
