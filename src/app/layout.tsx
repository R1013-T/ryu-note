/* eslint-disable node/prefer-global/process */
import type { Metadata } from 'next'
import { LINESeedJP } from '~/assets/fonts'
import { Providers } from '~/common/providers'
import '~/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | RYU NOTE',
    default: 'RYU NOTE',
  },
  description: 'RYU NOTE | 学びを共有します',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV !== 'production' && (
          <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
        )}
      </head>
      <body
        className={`${LINESeedJP.className} antialiased`}
      >
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
