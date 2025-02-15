import { SidebarInset, SidebarProvider } from 'ui'
import AppSidebar from '~/common/components/sildebar/app-sidebar'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider className="[--sidebar-width:19rem]">
      <AppSidebar closeButton={false} intent="fleet" />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
