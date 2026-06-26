// Премиальная палитра для инлайнового рендеринга (Tailwind-safe)
const PREMIUM_PALETTES = [
  { bg: '#1c2926', glow: '#3b5953' }, // Глубокая сибирская хвоя
  { bg: '#1f2529', glow: '#435059' }, // Штормовой скальный
  { bg: '#222421', glow: '#4a5248' }, // Мох и дикий камень
  { bg: '#1a2224', glow: '#384b50' }, // Речная глубина Маны
  { bg: '#241f21', glow: '#544347' }, // Осенние сумерки
];

/**
 * Генерирует стабильную палитру (bg + glow) на основе переданной строки.
 * @param {string} string - Входная строка (например, заголовок карточки)
 * @returns {{bg: string, glow: string}} Обьект с HEX-кодами цветов
 */
export const getDeterministicPalette = (string) => {
  if (!string) return PREMIUM_PALETTES[0];

  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % PREMIUM_PALETTES.length;
  return PREMIUM_PALETTES[index];
};