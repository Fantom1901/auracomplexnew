FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Настройки безопасности для Debian
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

# Копируем статику напрямую с твоего ПК
COPY public ./public

# Копируем standalone сервер и файлы оптимизации страниц
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]