import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { AuthService } from '@/lib/services/authService';

export async function POST(request) {
  try {
    const { passwordHash } = await request.json();

    if (!passwordHash) {
      return NextResponse.json({ success: false, error: 'Пароль не передан' }, { status: 400 });
    }

    // Проверяем пароль (сервис сам переведет .env на хеши при первом входе)
    const isPasswordValid = await AuthService.verifyPassword(passwordHash);

    if (!isPasswordValid) {
      return NextResponse.json({ success: false, error: 'Неверный пароль доступа' }, { status: 401 });
    }

    // Создаем сессию
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(secret);

    const response = NextResponse.json({ success: true });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Ошибка авторизации на сервере:', error);
    return NextResponse.json({ success: false, error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}