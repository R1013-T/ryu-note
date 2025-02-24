import { SidebarInset, SidebarProvider } from 'ui'
import AppSidebar from '~/common/components/sildebar/app-sidebar'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar intent="float" />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
