import { Suspense } from 'react'

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <article>
      <Suspense fallback="Loading...">
        {children}
      </Suspense>
    </article>
  )
}
