# IT Hub VN

A fullstack IT portal with:
- Node.js + Express backend
- SQLite database (better-sqlite3)
- Multipage frontend (Home, Article, Admin)
- Language toggle (VI/EN)
- Dark mode

## Run locally

1. Install dependencies:
   npm install

2. Start server:
   npm start

3. Open:
   http://localhost:3000

## Main pages

- / : Home feed + roadmap + resources
- /article.html?slug=state-of-ai-2026 : Post detail page
- /admin.html : Create, update, delete posts

## API endpoints

- GET /api/posts?lang=vi&q=ai&tag=AI
- GET /api/posts/:slug?lang=en
- GET /api/tags
- POST /api/posts
- PUT /api/posts/:slug
- DELETE /api/posts/:slug

## Notes

- SQLite file is created at data/it_hub.db automatically.
- Seed data is inserted on first run.
