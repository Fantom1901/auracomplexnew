"use client";

import { useState } from 'react';
import SmartInput from '@/components/ui/inputs/SmartInput';
import AnimatedButton from '@/components/ui/buttons/AnimatedButton';

export default function ChangePasswordForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const hashPasswordClient = async (plainPassword) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plainPassword);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'Минимум 6 символов' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const clientHash = await hashPasswordClient(newPassword);

      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPasswordHash: clientHash }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Пароль успешно перезаписан в .env!' });
        setNewPassword('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Ошибка смены пароля' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Ошибка соединения с сервером' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="pt-12 mt-12 border-t border-brand-dark/10">
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs uppercase tracking-widest text-brand-dark/40 hover:text-brand-dark transition-colors duration-300 font-medium"
        >
          ⚙ Настройки безопасности
        </button>
      </div>
    );
  }

  return (
    <div className="pt-12 mt-12 border-t border-brand-dark/10 max-w-md animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">
          Смена пароля администратора
        </h3>
        <button
          onClick={() => { setIsOpen(false); setStatus({ type: '', message: '' }); }}
          className="text-xs text-brand-dark/40 hover:text-brand-dark transition-colors"
        >
          Скрыть
        </button>
      </div>

      <form onSubmit={handlePasswordChange} className="space-y-4">
        <SmartInput
          label="Новый паро6ль доступа"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={isLoading}
          className="w-full"
        />

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <AnimatedButton
            onClick={handlePasswordChange}
            disabled={isLoading}
            variant="dark"
            size="sm"
            className="w-full sm:w-auto text-center"
          >
            {isLoading ? 'Сохранение...' : 'Обновить пароль'}
          </AnimatedButton>

          {status.message && (
            <span className={`text-xs font-medium ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
              {status.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}