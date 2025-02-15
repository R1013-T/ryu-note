import Header from '~/common/components/header/header'

export default async function DetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params
  return (
    <article>
      <Header title={slug} />
      <p>{locale}</p>
      <p>{slug}</p>
    </article>
  )
}
