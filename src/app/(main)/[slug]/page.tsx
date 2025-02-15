import { IconBrandTypescript } from 'justd-icons'
import { SidebarTrigger } from '~/common/components/generated'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return (
    <div>
      <div className="flex h-12 w-full items-center justify-between border-b bg-sidebar px-4">
        <SidebarTrigger className="-ml-2 sm:hidden" />
        <div className="flex items-center gap-2">
          <IconBrandTypescript className="size-6 text-indigo-500" />
          <span className="font-mono text-muted-fg text-sm">Controller.php</span>
        </div>
      </div>
      {slug}
    </div>
  )
}
