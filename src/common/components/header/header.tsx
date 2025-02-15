import { SidebarTrigger } from 'ui'
import Image from 'next/image'

type Props = {
  readonly title?: string
  readonly imageUrl?: string
}

export default function Header({title = 'RYU Note', imageUrl}: Props) {
  return (
    <header className="flex h-12 w-full items-center justify-between border-b bg-sidebar px-4">
      <SidebarTrigger className="-ml-2 md:hidden" />
      <div className="flex items-center gap-2">
        {imageUrl && <Image src={imageUrl} alt="logo" width={24} height={24} />}
        <h1 className="font-mono text-muted-fg text-sm">{title}</h1>
      </div>
    </header>
  )
}
