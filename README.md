# VocabMaster - Руководство по запуску

Это руководство поможет вам развернуть проект VocabMaster локально. Проект состоит из Frontend (React + Vite) и Backend (Node.js + Express + PostgreSQL).

---

## 1. Предварительные требования

Убедитесь, что у вас установлены:
1.  **Node.js** (версия 18+)
2.  **PostgreSQL** (версия 14+)
3.  **Git**

---

## 2. Настройка Базы Данных (PostgreSQL)

1.  Откройте терминал или pgAdmin.
2.  Создайте базу данных `vocabmaster`:
    ```sql
    CREATE DATABASE vocabmaster;
    ```
3.  Примените схему данных. Вы можете скопировать содержимое файла `server/schema.sql` и выполнить его в SQL-консоли вашей базы данных, или использовать командную строку:
    ```bash
    psql -U postgres -d vocabmaster -f server/schema.sql
    ```
    *(Замените `postgres` на ваше имя пользователя, если оно отличается)*.

---

## 3. Настройка Бэкенда (Server)

Перейдите в папку `server`.

### 3.1. Инициализация и установка зависимостей

Если у вас еще нет `package.json` в папке server, инициализируйте его и установите зависимости:

```bash
cd server
npm init -y
npm install express pg cors dotenv bcryptjs jsonwebtoken
npm install -D typescript ts-node @types/express @types/pg @types/cors @types/bcryptjs @types/jsonwebtoken @types/node
```

### 3.2. Настройка переменных окружения

Создайте файл `.env` в папке `server` и добавьте настройки вашей БД:

```env
PORT=5000
DB_USER=postgres
DB_PASSWORD=ваш_пароль_от_postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vocabmaster
JWT_SECRET=super_secret_key_change_me
# API Key не обязателен на бэкенде для текущей версии, так как запросы к Gemini идут с фронта, 
# но в продакшене лучше перенести их сюда.
```

### 3.3. Запуск сервера

Для разработки используйте `ts-node`:

```bash
# Находясь в папке server
npx ts-node index.ts
```

Если вы видите сообщение `Server running on http://localhost:5000`, бэкенд работает успешно.

### 3.4. Наполнение базы данных (Seeding)

Чтобы приложение не было пустым, нужно добавить начальные слова.
1.  Убедитесь, что сервер запущен.
2.  Откройте другой терминал или Postman.
3.  Выполните POST запрос для наполнения базы тестовыми данными:

```bash
curl -X POST http://localhost:5000/api/dev/seed
```

Вы должны получить ответ: `{"message":"Seeded with X words"}`.

---

## 4. Настройка Фронтенда (Client)

Проект написан на React с использованием TypeScript. Для локального запуска рекомендуется использовать **Vite**.

### 4.1. Создание React приложения (если вы запускаете с нуля)

Если у вас просто набор файлов, лучше всего создать чистый Vite проект и перенести туда файлы.

1.  Вернитесь в корневую папку проекта.
2.  Создайте проект Vite:
    ```bash
    npm create vite@latest client -- --template react-ts
    ```
3.  Переместите файлы исходного кода (`.tsx`, `.ts`, `components/`, `services/`, `metadata.json`) в папку `client/src`.
4.  Обновите `client/index.html`, добавив Tailwind (или установите его через npm, что лучше).

**Вариант "Быстрый запуск" (как есть в текущей структуре):**

Если вы хотите запустить проект в текущем виде (где `index.html` лежит в корне), вам нужно установить зависимости для сборки.

1.  В корневой папке проекта создайте `package.json`:
    ```bash
    npm init -y
    npm install react react-dom react-router-dom lucide-react @google/genai
    npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
    ```

2.  Создайте файл `vite.config.ts` в корне:
    ```ts
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
      server: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:5000'
        }
      }
    })
    ```

3.  Создайте файл `.env` в корне проекта для ключа Gemini API:
    ```env
    VITE_API_KEY=ваш_ключ_от_google_gemini
    ```
    *Примечание: В коде используется `process.env.API_KEY`. Vite использует `import.meta.env.VITE_API_KEY`. Вам может потребоваться небольшая правка в `services/geminiService.ts` или использование плагина `vite-plugin-env-compatible`.*

    **Правка для Vite:**
    В `services/geminiService.ts` замените `process.env.API_KEY` на `import.meta.env.VITE_API_KEY` (если используете Vite).

4.  Запустите фронтенд:
    ```bash
    npx vite
    ```

---

## 5. Полный цикл проверки

1.  Запущен PostgreSQL.
2.  Запущен Бэкенд (`cd server && npx ts-node index.ts`) на порту 5000.
3.  База наполнена через `/api/dev/seed`.
4.  Запущен Фронтенд (`npx vite`) на порту 3000 (или другом).
5.  Откройте браузер по адресу фронтенда.
6.  Зарегистрируйтесь (Sign Up).
7.  Пройдите Onboarding.
8.  Начните обучение!

## Структура проекта

```
/
├── components/       # React компоненты
├── services/         # API вызовы (dataService, auth, gemini)
├── server/           # Бэкенд
│   ├── index.ts      # Express сервер
│   ├── db.ts         # Подключение к БД
│   └── schema.sql    # Схема БД
├── index.html        # Точка входа (для Vite)
├── index.tsx         # React точка входа
├── App.tsx           # Основной компонент
└── README.md         # Эта инструкция
```
