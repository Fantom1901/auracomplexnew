import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/authService';

export async function GET() {
  const needsSetup = AuthService.isSetupRequired();
  return NextResponse.json({ needsSetup });
}

export async function POST(request) {
  try {
    const { firstPassword } = await request.json();

    if (!firstPassword || firstPassword.length < 6) {
      return NextResponse.json({ success: false, error: 'Пароль должен быть от 6 символов' }, { status: 400 });
    }

    // Генерируем готовый bcrypt-хеш для .env.local
    const generatedHash = await AuthService.generateServerHash(firstPassword);

    return NextResponse.json({
      success: true,
      hashedResult: generatedHash
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Ошибка сервера' }, { status: 500 });
  }
}