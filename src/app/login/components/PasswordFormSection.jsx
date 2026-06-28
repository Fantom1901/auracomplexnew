"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SmartInput from '@/components/ui/inputs/SmartInput';
import AnimatedButton from '@/components/ui/buttons/AnimatedButton';

export default function PasswordFormSection() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Хешируем пароль перед отправкой в сеть для защиты от падения SSL
  const hashPasswordClient = async (plainPassword) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plainPassword);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password) {
      setError('Введите пароль доступа');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const clientHash = await hashPasswordClient(password);

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passwordHash: clientHash }),
      });

      const data = await res.json();

      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Неверный пароль');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center p-4 min-h-[60vh] sm:min-h-[65vh] select-none">
      <div className="w-full max-w-[90%] sm:max-w-md border border-brand-dark/10 bg-white p-6 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-6 sm:space-y-8">

        <div className="text-center space-y-1.5 sm:space-y-2">
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight uppercase text-brand-dark">
            Управление комплексом
          </h1>
          <p className="text-[10px] sm:text-xs text-brand-dark/40 uppercase tracking-widest">
            AURA загородный отель
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          <SmartInput
            label="Пароль доступа"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
            disabled={isLoading}
            className="w-full"
          />

          <AnimatedButton
            onClick={handleLogin}
            disabled={isLoading}
            variant="dark"
            size="md"
            animation="shimmer"
            className="w-full mt-2"
          >
            {isLoading ? 'Проверка...' : 'Войти в систему'}
          </AnimatedButton>
        </form>

      </div>
    </div>
  );
}