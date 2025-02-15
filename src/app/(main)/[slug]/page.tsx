import { Suspense } from 'react'
import DetailPage from '~/features/detail/detail-page'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPage params={params} />
    </Suspense>
  )
}
