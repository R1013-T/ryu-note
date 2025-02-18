import Image from 'next/image'
import Header from '~/common/components/header/header'
import { getTitle } from './get-title'

export default async function DetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params
  const title = getTitle(slug, locale as 'ja' | 'en') ?? ''

  const { default: Post } = await import(`../../contents/${slug}/${locale}.mdx`)

  return (
    <div>
      <Header title={title} />
      <Image src={`/api/og?title=${title}`} width={1200} height={630} alt={slug} />
      <Post />
    </div>
  )
}

export const dynamicParams = false
