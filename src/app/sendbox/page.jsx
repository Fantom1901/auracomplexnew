"use client";

import { useState } from 'react';

export default function SandboxPage() {
  // Стейты для тонкой настройки иконки руками
  const [size, setSize] = useState(48);         // Размер холста (ширина и высота)
  const [fontSize, setFontSize] = useState(34); // Размер шрифта
  const [offsetY, setOffsetY] = useState(0);    // Смещение по вертикали (в px)
  const [letter, setLetter] = useState("А");    // Сама буква

  return (
    <div className="w-full min-h-screen bg-stone-950 text-stone-100 px-4 py-24 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Заголовок */}
        <div className="border-b border-stone-800 pb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
            Favicon Sandbox // Icon Editor
          </span>
          <h1 className="text-3xl md:text-4xl font-medium font-atyp tracking-tight">
            Конструктор фавиконки «Аура»
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Панель управления (Ползунки) */}
          <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-wider text-stone-400 border-b border-stone-800 pb-3">
              Параметры иконки
            </h2>

            {/* Ввод буквы */}
            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-mono flex justify-between">
                <span>Символ:</span>
                <span className="text-stone-500">text</span>
              </label>
              <input
                type="text"
                maxLength={2}
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-center text-xl font-atyp focus:outline-none focus:border-stone-600 transition"
              />
            </div>

            {/* Ползунок: Размер холста */}
            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-mono flex justify-between">
                <span>Размер холста (Разрешение):</span>
                <span className="text-amber-500 font-bold">{size}x{size} px</span>
              </label>
              <input
                type="range" min="16" max="128" step="4"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full accent-stone-400"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>16px</span>
                <span>32px (Стандарт)</span>
                <span>48px</span>
                <span>128px</span>
              </div>
            </div>

            {/* Ползунок: Размер шрифта */}
            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-mono flex justify-between">
                <span>Размер шрифта:</span>
                <span className="text-amber-500 font-bold">{fontSize} px</span>
              </label>
              <input
                type="range" min="10" max="100" step="1"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-stone-400"
              />
            </div>

            {/* Ползунок: Смещение буквы по вертикали */}
            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-mono flex justify-between">
                <span>Смещение по вертикали (Фикс шрифта):</span>
                <span className={`${offsetY !== 0 ? 'text-amber-500' : 'text-stone-500'} font-bold`}>
                  {offsetY > 0 ? `+${offsetY}` : offsetY} px
                </span>
              </label>
              <input
                type="range" min="-20" max="20" step="1"
                value={offsetY}
                onChange={(e) => setOffsetY(Number(e.target.value))}
                className="w-full accent-stone-400"
              />
            </div>
          </div>

          {/* Превью секция */}
          <div className="space-y-8">
            <h2 className="text-sm font-mono uppercase tracking-wider text-stone-400">
              Живой просмотр
            </h2>

            {/* Реальный размер фавиконки под микроскопом */}
            <div className="bg-stone-900/30 border border-stone-800 rounded-xl p-8 flex flex-col items-center justify-center min-h-[220px] space-y-4">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                Результат в реальном масштабе ({size}x{size}):
              </span>

              {/* Симуляция рендера через ImageResponse */}
              <div
                className="border border-dashed border-stone-700 bg-stone-950 relative overflow-hidden"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="font-atyp font-medium"
                  style={{
                    fontSize: `${fontSize}px`,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    transform: `translateY(${offsetY}px)`,
                    display: 'flex',
                  }}
                >
                  {letter}
                </span>
              </div>
            </div>

            {/* Секция с кодом для вставки */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 font-mono text-xs text-stone-400 space-y-2">
              <span className="text-stone-500 block text-[10px] uppercase">
                Значения для конфига в icon.js:
              </span>
              <p>width: <span className="text-amber-500">{size}</span>,</p>
              <p>height: <span className="text-amber-500">{size}</span>,</p>
              <p>fontSize: <span className="text-amber-500">'{fontSize}px'</span>,</p>
              <p>marginBottom: <span className="text-amber-500">'{offsetY}px'</span></p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}