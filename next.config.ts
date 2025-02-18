import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
}

const withMDX = createMDX({
  // 必要に応じて remark や rehype のプラグインを指定
})

export default withMDX(nextConfig)
