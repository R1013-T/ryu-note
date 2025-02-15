import {
  IconBrandGithub,
  IconBrandX,
  IconDeviceDesktop,
  IconDotsVertical,
  IconMail,
  IconMoon,
  IconPerson,
  IconSun,
} from 'justd-icons'
import { useTheme } from 'next-themes'
import { Button, SidebarHeader as Header, Link, Menu, SidebarLabel } from 'ui'

export function SidebarHeader() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Header className="flex h-12 flex-row items-center justify-between border-b bg-linear-to-b py-0">
      <Link
        href="/"
      >
        <SidebarLabel className="font-medium text-sm">
          <span className="text-accent font-semibold">RYU</span>
          {' '}
          Note
        </SidebarLabel>
      </Link>
      <div className="-mr-2 flex items-center gap-x-0.5 text-muted-fg **:[button]:text-muted-fg **:[button]:*:data-[slot=icon]:size-3.5 **:[button]:data-hovered:text-fg">
        <Menu>
          <Button className="size-7" size="square-petite" appearance="plain" aria-label="Options">
            <IconDotsVertical />
          </Button>
          <Menu.Content className="sm:min-w-56">
            <Menu.Item href="https://ryu1013.com/" target="_blank">
              <IconPerson />
              About RYU
            </Menu.Item>
            <Menu.Submenu>
              <Menu.Item>
                {resolvedTheme === 'light'
                  ? (
                      <IconSun />
                    )
                  : resolvedTheme === 'dark'
                    ? (
                        <IconMoon />
                      )
                    : (
                        <IconDeviceDesktop />
                      )}
                <Menu.Label>Switch theme</Menu.Label>
              </Menu.Item>
              <Menu.Content>
                <Menu.Item onAction={() => setTheme('system')}>
                  <IconDeviceDesktop />
                  {' '}
                  System
                </Menu.Item>
                <Menu.Item onAction={() => setTheme('dark')}>
                  <IconMoon />
                  {' '}
                  Dark
                </Menu.Item>
                <Menu.Item onAction={() => setTheme('light')}>
                  <IconSun />
                  {' '}
                  Light
                </Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Submenu>
              <Menu.Item>
                <IconMail />
                {' '}
                Contact
              </Menu.Item>
              <Menu.Content>
                <Menu.Item href="https://github.com/R1013-T" target="_blank">
                  <IconBrandX />
                  X
                </Menu.Item>
                <Menu.Item href="https://x.com/rtjob2023" target="_blank">
                  <IconBrandGithub />
                  GitHub
                </Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
          </Menu.Content>
        </Menu>
      </div>
    </Header>
  )
}
