import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import crypto from 'crypto'; // Используем стандартный модуль Node.js

const envPath = path.join(process.cwd(), '.env');

export const AuthService = {
  // Вспомогательный метод для автоматической перезаписи значения в файле .env
  updateEnvFile(newHash) {
    try {
      if (!fs.existsSync(envPath)) return;

      let envContent = fs.readFileSync(envPath, 'utf8');

      const regExp = /^ADMIN_PASSWORD=.*/m;
      if (regExp.test(envContent)) {
        envContent = envContent.replace(regExp, `ADMIN_PASSWORD=${newHash}`);
      } else {
        envContent += `\nADMIN_PASSWORD=${newHash}`;
      }

      fs.writeFileSync(envPath, envContent, 'utf8');
      process.env.ADMIN_PASSWORD = newHash;
    } catch (error) {
      console.error('Не удалось автоматически обновить .env файл:', error);
    }
  },

  async verifyPassword(clientHash) {
    const currentPasswordValue = process.env.ADMIN_PASSWORD;
    if (!currentPasswordValue) return false;

    // Проверяем, является ли значение в .env уже bcrypt-хешем
    const isHashed = currentPasswordValue.startsWith('$2');

    if (isHashed) {
      return await bcrypt.compare(clientHash, currentPasswordValue);
    } else {
      // ИСПРАВЛЕНО: Чистый Node.js вариант подсчета SHA-256 вместо браузерного crypto.subtle
      const serverPlainSha = crypto
        .createHash('sha256')
        .update(currentPasswordValue)
        .digest('hex');

      if (clientHash === serverPlainSha) {
        // Пароль подошел! Создаем bcrypt-хеш от клиентского SHA-256
        const salt = await bcrypt.genSalt(10);
        const bcryptHash = await bcrypt.hash(clientHash, salt);

        // Перезаписываем .env файл
        this.updateEnvFile(bcryptHash);
        return true;
      }

      return false;
    }
  }
};