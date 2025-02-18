/* eslint-disable node/prefer-global/process */

import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const title = searchParams.get('title')
  const image = searchParams.get('image')
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const backgroundImage = fetch(
    new URL(`/open-graph-image0${image ?? 1}.png`, url),
  ).then(res => res.arrayBuffer())

  const data = await backgroundImage
  const uint8Array = new Uint8Array(data)
  let binary = ''
  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i])
  }
  const base64 = btoa(binary)

  if (title === null) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundImage: `url(data:image/png;base64,${base64})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p
            style={{
              color: '#ffffff',
              fontWeight: 600,
              fontSize: 50,
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: '50px',
            }}
          >
            RYU NOTE
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // fonts: [{ name: 'Noto Sans JP', data: await notoSansJP }],
      },
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundImage: `url(data:image/png;base64,${base64})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginLeft: '50px',
          }}
        >
          <p
            style={{
              color: '#ffffff',
              fontWeight: 600,
              fontSize: 60,
            }}
          >
            {title}
          </p>
          <p
            style={{
              color: '#ffffff',
              fontWeight: 600,
              fontSize: 30,
            }}
          >
            RYU NOTE
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [{ name: 'Noto Sans JP', data: await notoSansJP }],
    },
  )
}
