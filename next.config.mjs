import createMDX from '@next/mdx'
import { transformerNotationDiff } from '@shikijs/transformers'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  transformers: [transformerNotationDiff()],
  theme: 'github-dark-high-contrast',
}

const withMDX = createMDX({
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
