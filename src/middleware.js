import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Защищаем и саму админку, и API-роуты, которые сохраняют файлы
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      // Если это запрос к API — возвращаем 401 JSON, если к странице — редиректим на логин
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // Проверяем валидность токена
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);

      // Токен валиден, пропускаем запрос дальше
      return NextResponse.next();
    } catch (err) {
      // Токен протух или подделан
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Настраиваем матчер, чтобы Middleware не триггерился на статику, картинки и шрифты
export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};