import { notFound } from 'next/navigation'
import Header from '~/common/components/header/header'
import { getTitle } from './get-title'

export default async function DetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params
  const title = getTitle(slug, locale as 'ja' | 'en') ?? ''
  if (!title) {
    notFound()
  }

  const { default: Post } = await import(`../../contents/${slug}/${locale}.mdx`)

  return (
    <article>
      <Header title={title} />
      <section className="prose break-words my-18 w-full px-4 md:w-2xl md:mx-auto">
        <Post />
      </section>
    </article>
  )
}
