/* eslint-disable node/prefer-global/buffer */
/* eslint-disable node/prefer-global/process */
/* eslint-disable react-refresh/only-export-components */
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params

  const bgData = await readFile(join(process.cwd(), 'assets', 'open-graph-image01.png'))

  const bgBase64 = Buffer.from(bgData).toString('base64')
  const bgUrl = `data:image/png;base64,${bgBase64}`

  const lineSeedJp = await readFile(
    join(process.cwd(), 'assets/LINESeedJP_OTF_Bd.woff2'),
  )

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 style={{ fontSize: 48, color: '#fff' }}>
          {locale}
          {' '}
          -
          {slug}
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Line Seed JP',
          data: lineSeedJp,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
