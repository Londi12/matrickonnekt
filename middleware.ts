import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getItem } from './app/utils/localStorage';
import { AUTH_STORAGE_KEY } from './app/config/localConfig';
import { User } from './app/types/auth';

export async function middleware(request: NextRequest) {
  // Only protect /admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const session = request.cookies.get('session')?.value;

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Check if user is admin using localStorage
    const currentUser = getItem<User | null>(AUTH_STORAGE_KEY, null);
    
    if (!currentUser?.isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/admin/:path*',
};