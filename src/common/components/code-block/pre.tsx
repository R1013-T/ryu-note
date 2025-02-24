'use client'

import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconCheck, IconClipboard } from 'justd-icons'
import { useRef, useState } from 'react'

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent

    if (code) {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }

  return (
    <pre ref={preRef} {...props} className="relative dark:bg-secondary/10 gray:bg-secondary/20">
      <button
        type="button"
        disabled={isCopied}
        onClick={handleClickCopy}
        className="absolute right-2 size-6 *:data-[slot=icon]:size-6 z-10"
      >
        {isCopied ? <IconCheck /> : <IconClipboard />}
      </button>
      {children}
    </pre>
  )
}
