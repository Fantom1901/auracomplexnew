#!/usr/bin/env python3
import sys
import subprocess
import json

# Коды для цветного вывода в терминал (ANSI)
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
BLUE = "\033[94m"
CYAN = "\033[96m"
BOLD = "\033[1m"
RESET = "\033[0m"

def log_info(message):
  print(f"{BLUE}{BOLD}[INFO]{RESET} {message}")

def log_success(message):
  print(f"{GREEN}{BOLD}[SUCCESS]{RESET} {message}")

def log_warning(message):
  print(f"{YELLOW}{BOLD}[WARNING]{RESET} {message}")

def log_error(message):
  print(f"{RED}{BOLD}[ERROR]{RESET} {message}")

def run_command(command, description, capture_output=False):
  try:
    result = subprocess.run(
      command,
      shell=True,
      check=True,
      text=True,
      stdout=subprocess.PIPE if capture_output else None,
      stderr=subprocess.PIPE if capture_output else None
    )
    return result.stdout if capture_output else True
  except subprocess.CalledProcessError as e:
    if not capture_output:
      log_error(f"Ошибка при выполнении: {description}")
    return None if capture_output else False

def update():
  print(f"\n{BOLD}=== ОБНОВЛЕНИЕ ПРОЕКТА ИЗ GITHUB ==={RESET}")

  # 1. Подтягиваем изменения
  if not run_command("git pull", "Получение свежего кода из Git"):
    log_error("Не удалось выполнить git pull. Возможно, есть некоммитнутые изменения или проблемы с правами.")
    sys.exit(1)

  # 2. Пересобираем Docker-образы (кэш Docker сам поймет, что изменилось)
  if not run_command("docker compose build", "Пересборка Docker-образов"):
    sys.exit(1)

  # 3. Перезапускаем контейнеры в фоне (Nginx и Next.js обновятся на лету)
  if not run_command("docker compose up -d", "Обновление запущенных контейнеров"):
    sys.exit(1)

  # 4. Чистим мусор, чтобы не забивать место на сервере
  run_command("docker image prune -f", "Очистка устаревших Docker-образов")

  log_success("Проект успешно обновлен до актуальной версии из GitHub и перезапущен!")

def build():
  print(f"\n{BOLD}=== ЗАПУСК ПОЛНОЙ СБОРКИ ПРОЕКТА В DOCKER ==={RESET}")
  # Больше не нужно запускать локальный npm run build, Docker все сделает сам
  if not run_command("docker compose build --no-cache", "Сборка Docker-образов (--no-cache)"):
    sys.exit(1)
  log_success("Проект успешно собран и готов к запуску!")

def start():
  print(f"\n{BOLD}=== ЗАПУСК КОНТЕЙНЕРОВ ==={RESET}")
  if run_command("docker compose up -d", "Поднятие контейнеров в фоне"):
    log_success("Приложение успешно запущено на порту 3000!")

def stop():
  print(f"\n{BOLD}=== ОСТАНОВКА КОНТЕЙНЕРОВ ==={RESET}")
  if run_command("docker compose down", "Остановка и удаление контейнеров"):
    log_success("Контейнеры полностью остановлены.")

def restart():
  print(f"\n{BOLD}=== ПЕРЕЗАПУСК ПРИЛОЖЕНИЯ ==={RESET}")
  stop()
  start()

def status():
  print(f"\n{BOLD}=== СУПЕР ДЕТАЛЬНЫЙ СТАТУС СИСТЕМЫ ==={RESET}\n")

  # 1. Проверяем статус контейнеров через docker compose ps в формате json
  ps_data = run_command("docker compose ps --format json", "Получение статуса контейнеров", capture_output=True)

  if not ps_data or ps_data.strip() == "":
    log_warning("Контейнеры не запущены или не созданы в текущем окружении Compose.")
    return

  print(f"{CYAN}{BOLD}[ 1. Состояние контейнеров ]{RESET}")
  try:
    # Compose может выдать как один объект, так и массив, или NDJSON (строки json)
    containers = []
    for line in ps_data.strip().split('\n'):
      if line:
        containers.append(json.loads(line))

    for c in containers:
      name = c.get("Name", "Неизвестно")
      state = c.get("State", "unknown")
      status_str = c.get("Status", "")
      ports = c.get("Ports", "Нет")

      color = GREEN if state.lower() == "running" else RED
      print(f"  • {BOLD}Контейнер:{RESET} {name}")
      print(f"    {BOLD}Статус:{RESET}    {color}{state.upper()}{RESET} ({status_str})")
      print(f"    {BOLD}Порты:{RESET}     {ports}")
  except Exception:
    # Фолбэк на обычный вывод, если json не распарсился
    print(ps_data)

  # 2. Метрики ресурсов (CPU/Memory)
  print(f"\n{CYAN}{BOLD}[ 2. Использование ресурсов ]{RESET}")
  stats_data = run_command("docker compose stats --no-stream --format \"table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\"", "Получение статистики", capture_output=True)
  if stats_data:
    print(stats_data.strip())
  else:
    print("  Не удалось получить метрики ресурсов.")

  # 3. HTTP Пинг (Проверяем доступность веб-сервера)
  print(f"\n{CYAN}{BOLD}[ 3. Проверка доступности веб-сервера ]{RESET}")
  # Дергаем curl локально внутри сети хоста
  http_status = run_command("curl -s -o /dev/null -w '%{http_code}' http://localhost:80/ || true", "HTTP пинг через Nginx", capture_output=True)
  if http_status and http_status.strip() != "000":
    code = http_status.strip()
    color = GREEN if code.startswith("2") or code.startswith("3") else YELLOW
    print(f"  • Ответ от http://localhost:3000/: {color}{code} OK{RESET}")
  else:
    print(f"  • Ответ от http://localhost:3000/: {RED}НЕДОСТУПЕН (ERR_CONNECTION_REFUSED){RESET}")

  # 4. Последние логи
  print(f"\n{CYAN}{BOLD}[ 4. Последние 7 строк логов Docker ]{RESET}")
  logs = run_command("docker compose logs --tail=7", "Получение логов", capture_output=True)
  if logs:
    print(logs.strip())
  else:
    print("  Логи пусты.")
  print("")

def show_help():
  print(f"""
{BOLD}Красивый менеджер для твоего Next.js приложения в Docker{RESET}

{BOLD}Использование:{RESET}
  python manage.py [команда]

{BOLD}Команды:{RESET}
  {GREEN}build{RESET}   - Собрать проект локально и упаковать в Docker-образ без кэша
  {GREEN}start{RESET}   - Запустить уже собранные контейнеры
  {GREEN}stop{RESET}    - Остановить контейнеры
  {GREEN}restart{RESET} - Перезапустить (stop + start)
  {GREEN}update{RESET}  - Подтянуть изменения из Git, пересобрать и обновить контейнеры
  {GREEN}status{RESET}  - Вывести супер детальный статус, ресурсы, порты и логи
    """)

def main():
  if len(sys.argv) < 2:
    show_help()
    sys.exit(0)

  action = sys.argv[1].lower()

  if action == "build":
    build()
  elif action == "start":
    start()
  elif action == "stop":
    stop()
  elif action == "restart":
    restart()
  elif action == "update":  # <-- Новая ветка
    update()
  elif action in ["status", "info"]:
    status()
  else:
    log_error(f"Неизвестная команда: '{action}'")
    show_help()
    sys.exit(1)

if __name__ == "__main__":
  main()