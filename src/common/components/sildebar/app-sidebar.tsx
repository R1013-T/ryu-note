'use client'

import { IconFolderFill, IconFolderOpen } from 'justd-icons'
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
} from 'ui'

import { folders } from '../../../constant/folders'
import { SidebarHeader } from './sidebar-header'

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-r">
      <SidebarHeader />
      <SidebarContent className="pb-10">
        <SidebarDisclosureGroup className="gap-y-0.5">
          {folders.map(item => (
            <SidebarTree key={item.id} item={item} index={1} />
          ))}
        </SidebarDisclosureGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function SidebarTree({ item, index }: { item: (typeof folders)[number], index: number }) {
  if (!item.files || item.files.length === 0) {
    return (
      <SidebarItem
        isCurrent={item.id === 1212}
        className="pl-[calc(var(--nested-level)*16px)]"
        style={
          {
            '--nested-level': index,
          } as React.CSSProperties
        }
        href={item.href ?? `/${item.id}`}
        target={item.href ? '_blank' : undefined}
      >
        <SidebarLabel>{item.label}</SidebarLabel>
      </SidebarItem>
    )
  }

  return (
    <SidebarDisclosureGroup defaultExpandedKeys={['blog', 'tutorials', 'utils']}>
      <SidebarDisclosure id={item.id}>
        {({ isExpanded }) => (
          <>
            <SidebarDisclosureTrigger
              className="pl-[calc(var(--nested-level)*16px)]"
              style={
                {
                  '--nested-level': index,
                } as React.CSSProperties
              }
            >
              {isExpanded ? <IconFolderOpen /> : <IconFolderFill />}
              <SidebarLabel>{item.label}</SidebarLabel>
            </SidebarDisclosureTrigger>
            <SidebarDisclosurePanel>
              {item.files!.map(child => (
                <SidebarTree key={child.id} item={child} index={index + 1} />
              ))}
            </SidebarDisclosurePanel>
          </>
        )}
      </SidebarDisclosure>
    </SidebarDisclosureGroup>
  )
}
