import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginreactCompiler from 'eslint-plugin-react-compiler'

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
})

export default antfu(
  {
    react: true,
  },
  {
    name: 'load-plugins',
    plugins: { 'react-compiler': eslintPluginreactCompiler },
  },
  {
    name: 'rules',
    rules: { 'react-compiler/react-compiler': 'error' },
  },
  ...compat.extends('plugin:@next/next/core-web-vitals'),
  { settings: { tailwindcss: { callees: ['cn'] } } },
)
