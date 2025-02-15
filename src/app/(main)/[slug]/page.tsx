import Header from '~/common/components/header/header'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return (
    <div>
      <Header title={slug} imageUrl='' />
      {slug}
    </div>
  )
}
