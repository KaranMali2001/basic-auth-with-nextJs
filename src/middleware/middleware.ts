import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname  = request.nextUrl.pathname;
  const isPublicPath = pathname === '/login' || pathname === '/signup' ;
  const token = request.cookies.get('token')?.value || '';
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signup', request.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }


 
}

export const config = {
  matcher: ['/', '/profile*', '/login', '/signup'],
};
