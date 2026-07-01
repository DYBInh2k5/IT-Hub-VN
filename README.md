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

## Deploy

Recommended platform: Render.

The repository also includes a `render.yaml` blueprint, so you can deploy straight from GitHub.

1. Create a new Web Service from this GitHub repo.
2. Set the build command to:
   npm install
3. Set the start command to:
   npm start
4. Add a persistent disk so the SQLite database survives redeploys.
5. Mount the disk at:
   /opt/render/project/src/data

This matches the app's database path at data/it_hub.db and keeps the database file persistent across deployments.

If you want to deploy to another platform later, choose one with persistent storage support for SQLite.

## Deploy on Vercel

Vercel works well for a live preview or demo deployment.

1. Connect the GitHub repo to Vercel.
2. Leave the default build command as `npm install`.
3. Use `server.js` as the server entrypoint.
4. Note that SQLite is stored in `/tmp` on Vercel, so data changes are not persistent across cold starts or redeploys.

Because of that limitation, Vercel is best for showcasing the site, while Render is better if you need durable SQLite storage.
