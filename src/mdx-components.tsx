import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { LINESeedJP } from './assets/fonts'
import Pre from './common/components/code-block/pre'
import { headingStyles, Separator } from './common/components/generated'
import { cn } from './utils/classes'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/ /g, '-')
      return (
        <h2 id={id} className="scroll-mt-20">
          <Link href={`#${id}`} className={cn(headingStyles({ level: 1 }), LINESeedJP.className, 'no-underline hover:underline')}>
            {children}
          </Link>
        </h2>
      )
    },
    h2: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/ /g, '-')
      return (
        <h3 id={id} className="scroll-mt-20">
          <Link href={`#${id}`} className={cn(headingStyles({ level: 2 }), LINESeedJP.className, 'no-underline hover:underline')}>
            {children}
          </Link>
        </h3>
      )
    },
    h3: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/ /g, '-')
      return (
        <h4 id={id} className="scroll-mt-20">
          <Link href={`#${id}`} className={cn(headingStyles({ level: 3 }), LINESeedJP.className, 'no-underline hover:underline')}>
            {children}
          </Link>
        </h4>
      )
    },
    h4: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/ /g, '-')
      return (
        <h5 id={id} className="scroll-mt-20">
          <Link href={`#${id}`} className={cn(headingStyles({ level: 4 }), LINESeedJP.className, 'no-underline hover:underline')}>
            {children}
          </Link>
        </h5>
      )
    },
    p: ({ children }) => <p className={cn(LINESeedJP.className, 'text-fg text-base')}>{children}</p>,
    a: ({ children, href }) => <a href={href} className="text-accent hover:underline">{children}</a>,
    strong: ({ children }) => <strong className="text-current font-bold">{children}</strong>,
    li: ({ children }) => <li className="text-fg">{children}</li>,
    pre: props => <Pre {...props} />,
    blockquote: ({ children }) => <blockquote className="border-s-muted bg-secondary/50">{children}</blockquote>,
    th: ({ children }) => <th className="text-fg font-bold">{children}</th>,
    td: ({ children }) => <td className="text-fg">{children}</td>,
    hr: () => <Separator />,
  }
}
