import createMDX from '@next/mdx'
import { transformerNotationDiff } from '@shikijs/transformers'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    ppr: true,
    reactCompiler: true,
  },
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  transformers: [
    transformerNotationDiff(),
  ],
  theme: 'github-dark-high-contrast',
}

const withMDX = createMDX({
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { maxDepth: 3 }],
      remarkBreaks,
    ],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
