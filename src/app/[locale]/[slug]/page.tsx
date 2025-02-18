/* eslint-disable node/prefer-global/process */
import type { Metadata } from 'next'
import { Suspense } from 'react'
import DetailPage from '~/features/detail/detail-page'
import { getTitle } from '~/features/detail/get-title'

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params
  const title = getTitle(slug, locale as 'ja' | 'en') ?? ''
  const description = `RYU NOTE - ${title}`

  const imageParams = new URLSearchParams()
  imageParams.set('title', title)

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title,
    description,
    openGraph: {
      title,
      description,
      images: `/api/og?${imageParams}`,
      url: new URL(`/${locale}/${slug}`, process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    },
    twitter: {
      title,
      description,
      images: `/api/og?${imageParams}`,
    },
  } satisfies Metadata
}

export default async function Page({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPage params={params} />
    </Suspense>
  )
}
