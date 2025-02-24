import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'

interface Props {
  children: string
  lang: BundledLanguage
}

export default async function CodeBlock({ children, lang }: Props) {
  const out = await codeToHtml(children, {
    lang,
    theme: 'github-dark',
  })

  // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
  return <div dangerouslySetInnerHTML={{ __html: out }} />
}
