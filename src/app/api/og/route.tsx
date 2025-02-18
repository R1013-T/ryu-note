import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const title = searchParams.get('title')
  // const image = searchParams.get('image')

  if (title === null) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundImage: 'url("https://note.ryu1013.com/open-graph-image01.png")',
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
          backgroundImage: 'url("https://note.ryu1013.com/open-graph-image01.png")',
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
