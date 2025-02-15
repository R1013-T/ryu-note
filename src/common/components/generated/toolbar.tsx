'use client'

import type { GroupProps, SeparatorProps, ToolbarProps } from 'react-aria-components'

import type { ToggleProps } from './toggle'
import { createContext, useContext } from 'react'
import { composeRenderProps, Group, Toolbar as ToolbarPrimitive } from 'react-aria-components'

import { tv } from 'tailwind-variants'
import { cn } from '~/utils/classes'
import { composeTailwindRenderProps } from './primitive'
import { Separator } from './separator'
import { Toggle } from './toggle'

const ToolbarContext = createContext<{ orientation?: ToolbarProps['orientation'] }>({
  orientation: 'horizontal',
})

const toolbarStyles = tv({
  base: 'group flex gap-2',
  variants: {
    orientation: {
      horizontal:
        'flex-row [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
      vertical: 'flex-col items-start',
    },
  },
})

function Toolbar({ orientation = 'horizontal', className, ...props }: ToolbarProps) {
  return (
    <ToolbarContext value={{ orientation }}>
      <ToolbarPrimitive
        orientation={orientation}
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
          toolbarStyles({ ...renderProps, className }))}
      />
    </ToolbarContext>
  )
}

const ToolbarGroupContext = createContext<{ isDisabled?: boolean }>({})

type ToolbarGroupProps = GroupProps
function ToolbarGroup({ isDisabled, className, ...props }: ToolbarGroupProps) {
  return (
    <ToolbarGroupContext value={{ isDisabled }}>
      <Group
        className={composeTailwindRenderProps(
          className,
          'flex gap-2 group-data-[orientation=vertical]:flex-col group-data-[orientation=vertical]:items-start',
        )}
        {...props}
      >
        {props.children}
      </Group>
    </ToolbarGroupContext>
  )
}

type ToggleItemProps = ToggleProps
function ToolbarItem({ isDisabled, ref, ...props }: ToggleItemProps) {
  const context = useContext(ToolbarGroupContext)
  const effectiveIsDisabled = isDisabled || context.isDisabled

  return <Toggle ref={ref} isDisabled={effectiveIsDisabled} {...props} />
}
type ToolbarSeparatorProps = SeparatorProps
function ToolbarSeparator({ className, ...props }: ToolbarSeparatorProps) {
  const { orientation } = useContext(ToolbarContext)
  const effectiveOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical'
  return (
    <Separator
      orientation={effectiveOrientation}
      className={cn(effectiveOrientation === 'vertical' ? 'mx-1.5' : 'my-1.5 w-9', className)}
      {...props}
    />
  )
}

Toolbar.Group = ToolbarGroup
Toolbar.Separator = ToolbarSeparator
Toolbar.Item = ToolbarItem

export type { ToggleItemProps, ToolbarGroupProps, ToolbarProps, ToolbarSeparatorProps }
export { Toolbar }
