import Header from '~/common/components/header/header'

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <article>
      <Header title={slug} />
      {slug}
    </article>
  )
}
