# === Этап 1: Установка зависимостей ===
FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# === Этап 2: Сборка приложения ===
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# === Этап 3: Финальный минимальный образ ===
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

# Копируем публичные статические файлы
COPY --from=builder /app/public ./public

# Настройки для standalone режима (Next.js копирует сюда только необходимый минимум)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]