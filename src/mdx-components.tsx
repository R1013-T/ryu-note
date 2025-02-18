import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 必要に応じてデフォルトのコンポーネントを上書き可能
    ...components,
  }
}
