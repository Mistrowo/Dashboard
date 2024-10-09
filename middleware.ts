// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (req.nextUrl.pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  if (req.nextUrl.pathname === '/welcome' && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/welcome', '/login'],
};
