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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const imageUrl = `${siteUrl}/api/og?${imageParams.toString()}`

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title: description,
      description: 'RYU NOTE | 学びを共有します',
      // オブジェクト形式で指定することで詳細情報を付与
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: `${siteUrl}/${locale}/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
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
