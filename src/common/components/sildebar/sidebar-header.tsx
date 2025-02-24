import {
  IconBrandGithub,
  IconBrandX,
  IconBullet,
  IconBulletFill,
  IconCirclePlaceholderDashedFill,
  IconCircleStop,
  IconMail,
  IconPerson,
  IconSettings,
  IconTranslate,
} from 'justd-icons'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Button, SidebarHeader as Header, Link, Menu, SidebarLabel } from 'ui'

export function SidebarHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()
  const id = pathname.split('/')[2]

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
      <div className="-mr-2 flex items-center gap-x-0.5 text-muted-fg **:[button]:text-fg **:[button]:*:data-[slot=icon]:size-5">
        <Menu>
          <Button className="size-7 mr-8" size="square-petite" appearance="plain" aria-label="Options">
            <IconSettings />
          </Button>
          <Menu.Content className="sm:min-w-56">
            <Menu.Item href="https://ryu1013.com/" target="_blank">
              <IconPerson />
              About RYU
            </Menu.Item>
            <Menu.Submenu>
              <Menu.Item>
                {resolvedTheme === 'dark' && <IconBulletFill />}
                {resolvedTheme === 'gray' && <IconCirclePlaceholderDashedFill />}
                {resolvedTheme === 'sand' && <IconCircleStop />}
                {resolvedTheme === 'light' && <IconBullet />}
                <Menu.Label>Switch theme</Menu.Label>
              </Menu.Item>
              <Menu.Content>
                <Menu.Item onAction={() => setTheme('dark')}>
                  <IconBulletFill />
                  {' '}
                  Dark
                </Menu.Item>
                <Menu.Item onAction={() => setTheme('gray')}>
                  <IconCirclePlaceholderDashedFill />
                  {' '}
                  Gray
                </Menu.Item>
                <Menu.Item onAction={() => setTheme('sand')}>
                  <IconCircleStop />
                  {' '}
                  Sand
                </Menu.Item>
                <Menu.Item onAction={() => setTheme('light')}>
                  <IconBullet />
                  {' '}
                  Light
                </Menu.Item>
              </Menu.Content>
            </Menu.Submenu>
            <Menu.Submenu>
              <Menu.Item>
                <IconTranslate />
                <Menu.Label>Switch language</Menu.Label>
              </Menu.Item>
              <Menu.Content>
                <Menu.Item href={`/ja/${id}`}>
                  日本語
                </Menu.Item>
                <Menu.Item href={`/en/${id}`}>
                  English
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
                <Menu.Item href="https://x.com/rtjob2023" target="_blank">
                  <IconBrandX />
                  X
                </Menu.Item>
                <Menu.Item href="https://github.com/R1013-T" target="_blank">
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
