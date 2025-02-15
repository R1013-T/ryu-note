import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.endsWith('.svg')
    || pathname.endsWith('.ico')
    || pathname.endsWith('.jpg')
    || pathname.endsWith('.jpeg')
    || pathname.endsWith('.png')
    || pathname.endsWith('.gif')
    || pathname.endsWith('.webp')
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)

  // パスの先頭が言語コードがない場合は "ja" にリダイレクト
  if (segments.length === 0) {
    const url = request.nextUrl.clone()
    url.pathname = '/ja'
    return NextResponse.redirect(url)
  }

  const locale = segments[0]
  // locale が "ja" または "en" でない場合は "ja" にリダイレクト
  if (locale !== 'ja' && locale !== 'en') {
    segments[0] = 'ja'
    const newPathname = `/${segments.join('/')}`
    const url = request.nextUrl.clone()
    url.pathname = newPathname
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    {
      source:
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
