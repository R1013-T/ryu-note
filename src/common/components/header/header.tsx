import Image from 'next/image'
import { SidebarTrigger } from 'ui'

interface Props {
  readonly title?: string
  readonly imageUrl?: string
}

export default function Header({ title, imageUrl }: Props) {
  return (
    <header className="fixed top-0 right-0 z-10 h-12 w-full border-b bg-sidebar/10 backdrop-blur-sm">
      <div className="flex items-center h-12 gap-2 max-w-2xl mx-auto">
        <SidebarTrigger className="-ml-3" />
        {imageUrl && <Image src={imageUrl} alt="logo" width={24} height={24} />}
        <h1 className="font-mono text-muted-fg text-sm">{title}</h1>
      </div>
    </header>
  )
}
