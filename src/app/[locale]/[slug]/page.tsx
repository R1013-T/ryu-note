import type { Metadata } from 'next'
import { Suspense } from 'react'
import DetailPage from '~/features/detail/detail-page'
import { getTitle } from '~/features/detail/get-title'

interface Props {
  params: Promise<{ locale: string, slug: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { locale, slug } = await params
  const title = getTitle(slug, locale as 'ja' | 'en') ?? ''
  const description = `RYU NOTE | 学びを共有します | ${title}`

  const imageParams = new URLSearchParams()
  imageParams.set('title', title)

  const siteUrl = 'https://note.ryu1013.com'
  const imageUrl = `${siteUrl}/api/og?${imageParams.toString()}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPage params={params} />
    </Suspense>
  )
}
