import { NextRequest, NextResponse } from 'next/server'

const credentials = {
  username: process.env.BASIC_AUTH_USER,
  password: process.env.BASIC_AUTH_PASSWORD,
}
const useBasicAuth = !!(credentials.username && credentials.password)

export const config = {
  matcher: '/((?!.*\\.|api\\/).*)',
}

export const middleware = (req: NextRequest) => {
  if (!useBasicAuth) {
    NextResponse.next()
    return
  }
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl
  if (basicAuth) {
    const [, authValue] = basicAuth.split(' ')
    const [userName, password] = Buffer.from(authValue, 'base64').toString().split(':')
    if (userName === credentials.username && password === credentials.password) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'
  return NextResponse.rewrite(url)
}
