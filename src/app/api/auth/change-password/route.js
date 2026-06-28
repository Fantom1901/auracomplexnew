import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/authService';
import crypto from 'crypto';

export async function POST(request) {
  try {
    // В реальном проекте здесь должна быть проверка сессии/кук на роль админа,
    // но сейчас делаем упор на чистую логику перезаписи.

    const { newPasswordHash } = await request.json();

    if (!newPasswordHash) {
      return NextResponse.json({ success: false, error: 'Пароль не передан' }, { status: 400 });
    }

    // Если ты выбрал Вариант 2 (нативный crypto с солью):
    const SALT = 'aura_secure_salt_2026';
    const newServerHash = crypto.pbkdf2Sync(newPasswordHash, SALT, 100000, 64, 'sha512').toString('hex');

    /*
      Если ты выбрал Вариант 1 (bcryptjs), раскомментируй эти две строки вместо верхних:
      const salt = await bcrypt.genSalt(10);
      const newServerHash = await bcrypt.hash(newPasswordHash, salt);
    */

    // Вызываем уже готовый метод сервиса для перезаписи файла .env
    AuthService.updateEnvFile(newServerHash);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Ошибка при смене пароля:', error);
    return NextResponse.json({ success: false, error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}