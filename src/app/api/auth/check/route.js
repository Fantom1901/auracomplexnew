import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function GET(request) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ isAuthenticated: false });
    }

    // Проверяем токен той же секреткой
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);

    return NextResponse.json({ isAuthenticated: true });
  } catch (error) {
    // Токен просрочен или побит
    return NextResponse.json({ isAuthenticated: false });
  }
}