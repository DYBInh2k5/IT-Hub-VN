const path = require("path");
const express = require("express");
const Database = require("better-sqlite3");

const app = express();
const PORT = process.env.PORT || 3000;

const dbPath = path.join(__dirname, "data", "it_hub.db");
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    tag TEXT NOT NULL,
    level TEXT NOT NULL,
    read_time TEXT NOT NULL,
    published_at TEXT NOT NULL,
    title_vi TEXT NOT NULL,
    title_en TEXT NOT NULL,
    excerpt_vi TEXT NOT NULL,
    excerpt_en TEXT NOT NULL,
    content_vi TEXT NOT NULL,
    content_en TEXT NOT NULL
  );
`);

const postCount = db.prepare("SELECT COUNT(*) AS count FROM posts").get().count;
if (postCount === 0) {
  const seed = db.prepare(`
    INSERT INTO posts (
      slug, tag, level, read_time, published_at,
      title_vi, title_en,
      excerpt_vi, excerpt_en,
      content_vi, content_en
    ) VALUES (
      @slug, @tag, @level, @read_time, @published_at,
      @title_vi, @title_en,
      @excerpt_vi, @excerpt_en,
      @content_vi, @content_en
    )
  `);

  const seedPosts = [
    {
      slug: "state-of-ai-2026",
      tag: "AI",
      level: "Intermediate",
      read_time: "8 min",
      published_at: "2026-04-10",
      title_vi: "State of AI 2026: xu huong nao dang dan dau?",
      title_en: "State of AI 2026: Which trends are leading?",
      excerpt_vi: "Tong hop cac xu huong LLM, AI agent va multimodal trong san pham thuc te.",
      excerpt_en: "A quick synthesis of LLM, AI agent, and multimodal trends in real products.",
      content_vi:
        "AI 2026 tap trung vao 3 huong lon: AI agent thuc thi quy trinh, mo hinh multimodal thong nhat, va he sinh thai cong cu low-code cho doanh nghiep. Neu ban xay san pham, uu tien bai toan co du lieu ro va do duoc ROI.",
      content_en:
        "AI in 2026 is centered around three shifts: execution-ready AI agents, unified multimodal models, and low-code enterprise tooling ecosystems. If you build products, prioritize high-signal use cases with measurable ROI."
    },
    {
      slug: "nextjs-bun-speed",
      tag: "Web",
      level: "Advanced",
      read_time: "10 min",
      published_at: "2026-04-08",
      title_vi: "Next.js va bun: toi uu web app cho toc do",
      title_en: "Next.js and bun: performance tuning for web apps",
      excerpt_vi: "Toi uu rendering, cache, va bundle de cai thien Core Web Vitals.",
      excerpt_en: "Tune rendering, cache strategy, and bundle output for better Core Web Vitals.",
      content_vi:
        "Bat dau tu profiling. Xac dinh diem nghen trong hydration, split route thong minh, va tan dung edge cache. Bun giup toc do build nhanh, nhung ban van can khao sat chi so runtime.",
      content_en:
        "Start with profiling first. Identify hydration bottlenecks, split routes intelligently, and leverage edge cache. Bun speeds up build pipelines, but runtime metrics still decide user experience."
    },
    {
      slug: "kubernetes-for-beginners",
      tag: "Cloud",
      level: "Beginner",
      read_time: "12 min",
      published_at: "2026-04-05",
      title_vi: "Kubernetes cho nguoi moi bat dau",
      title_en: "Kubernetes for beginners",
      excerpt_vi: "Hieu deployment, service, ingress va cach deploy an toan.",
      excerpt_en: "Understand deployments, services, ingress, and safe production rollout.",
      content_vi:
        "Hoc Kubernetes qua use case thuc te: mot API, mot database, va pipeline CI/CD. Khong can hoc moi concept cung luc. Di theo duong deployment -> service -> ingress -> autoscaling.",
      content_en:
        "Learn Kubernetes through a real use case: one API, one database, and a CI/CD pipeline. Do not learn everything at once. Move from deployments to services, ingress, and autoscaling."
    },
    {
      slug: "security-checklist-startup",
      tag: "Security",
      level: "Intermediate",
      read_time: "9 min",
      published_at: "2026-04-03",
      title_vi: "Cyber Security checklist cho startup",
      title_en: "Cyber security checklist for startups",
      excerpt_vi: "Danh sach viec can lam ngay de giam rui ro bao mat.",
      excerpt_en: "A practical checklist to reduce early-stage security risks.",
      content_vi:
        "Bat dau tu secret management, MFA, logging, va backup restore drill. Bao mat la mot quy trinh lien tuc, khong phai buoc kiem tra mot lan.",
      content_en:
        "Start with secret management, MFA, logging, and backup restore drills. Security is a continuous process, not a one-time checklist."
    },
    {
      slug: "data-engineer-roadmap",
      tag: "Data",
      level: "Beginner",
      read_time: "7 min",
      published_at: "2026-03-30",
      title_vi: "Roadmap tro thanh Data Engineer",
      title_en: "Roadmap to become a Data Engineer",
      excerpt_vi: "SQL, Python, ETL, data warehouse va van hanh du lieu.",
      excerpt_en: "SQL, Python, ETL, data warehouses, and reliable data operations.",
      content_vi:
        "Tu duy Data Engineer la xay duong ong du lieu on dinh. Uu tien kha nang mo rong, chat luong du lieu, va kha nang truy vet su co.",
      content_en:
        "Data Engineering is about building stable data pipelines. Prioritize scalability, data quality, and incident traceability."
    },
    {
      slug: "it-portfolio-interviews",
      tag: "Career",
      level: "Beginner",
      read_time: "6 min",
      published_at: "2026-03-29",
      title_vi: "Portfolio IT giup ban duoc phong van nhanh hon",
      title_en: "Build an IT portfolio that gets interviews faster",
      excerpt_vi: "Cach trinh bay du an de nha tuyen dung thay duoc gia tri cua ban.",
      excerpt_en: "Present projects in a way recruiters can quickly map to business value.",
      content_vi:
        "Portfolio tot can neu ro van de, cach ban giai quyet, va ket qua do duoc. Them metric cu the va screenshot quy trinh la diem cong lon.",
      content_en:
        "A strong portfolio states the problem, your approach, and measurable outcomes. Include concrete metrics and process screenshots for stronger credibility."
    },
    {
      slug: "flutter-vs-react-native-2026",
      tag: "Mobile",
      level: "Intermediate",
      read_time: "8 min",
      published_at: "2026-03-28",
      title_vi: "Flutter vs React Native 2026",
      title_en: "Flutter vs React Native 2026",
      excerpt_vi: "So sanh hieu nang, ecosystem va DX cho team san pham.",
      excerpt_en: "A comparison of performance, ecosystem maturity, and developer experience.",
      content_vi:
        "Neu team can UI dong nhat cao va control rendering, Flutter la lua chon manh. Neu team da manh JavaScript va can tai su dung kien thuc web, React Native rat hop ly.",
      content_en:
        "If your team needs strong rendering control and consistent UI, Flutter is compelling. If your team is deeply invested in JavaScript and web reuse, React Native is often the pragmatic choice."
    },
    {
      slug: "cicd-small-team",
      tag: "DevOps",
      level: "Beginner",
      read_time: "11 min",
      published_at: "2026-03-25",
      title_vi: "CI/CD cho team nho: bat dau tu dau?",
      title_en: "CI/CD for small teams: where to start",
      excerpt_vi: "Mau pipeline don gian voi test, build, deploy an toan.",
      excerpt_en: "A simple pipeline pattern with test, build, and safe deploy gates.",
      content_vi:
        "Voi team nho, dieu quan trong la pipeline ro rang, rollback nhanh, va moi thay doi deu co test toi thieu. Bat dau don gian, sau do mo rong dan.",
      content_en:
        "For small teams, prioritize clear pipelines, fast rollback, and minimum test coverage on every change. Start simple and scale gradually."
    }
  ];

  const seedMany = db.transaction((items) => {
    for (const item of items) {
      seed.run(item);
    }
  });

  seedMany(seedPosts);
}

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const allowedLang = new Set(["vi", "en"]);

function pickText(row, lang) {
  return {
    id: row.id,
    slug: row.slug,
    tag: row.tag,
    level: row.level,
    readTime: row.read_time,
    publishedAt: row.published_at,
    title: lang === "en" ? row.title_en : row.title_vi,
    excerpt: lang === "en" ? row.excerpt_en : row.excerpt_vi,
    content: lang === "en" ? row.content_en : row.content_vi
  };
}

app.get("/api/posts", (req, res) => {
  const lang = allowedLang.has(req.query.lang) ? req.query.lang : "vi";
  const q = (req.query.q || "").trim().toLowerCase();
  const tag = (req.query.tag || "").trim();

  let rows = db
    .prepare("SELECT * FROM posts ORDER BY published_at DESC, id DESC")
    .all();

  if (tag && tag !== "All") {
    rows = rows.filter((row) => row.tag.toLowerCase() === tag.toLowerCase());
  }

  if (q) {
    rows = rows.filter((row) => {
      const hay = [
        row.title_vi,
        row.title_en,
        row.excerpt_vi,
        row.excerpt_en,
        row.content_vi,
        row.content_en,
        row.tag
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }

  res.json(rows.map((row) => pickText(row, lang)));
});

app.get("/api/tags", (_req, res) => {
  const rows = db
    .prepare("SELECT tag, COUNT(*) AS count FROM posts GROUP BY tag ORDER BY tag")
    .all();

  res.json(rows);
});

app.get("/api/posts/:slug", (req, res) => {
  const lang = allowedLang.has(req.query.lang) ? req.query.lang : "vi";
  const row = db.prepare("SELECT * FROM posts WHERE slug = ?").get(req.params.slug);

  if (!row) {
    res.status(404).json({ message: "Post not found" });
    return;
  }

  res.json(pickText(row, lang));
});

app.post("/api/posts", (req, res) => {
  const payload = req.body || {};

  const required = [
    "slug",
    "tag",
    "level",
    "readTime",
    "publishedAt",
    "titleVi",
    "titleEn",
    "excerptVi",
    "excerptEn",
    "contentVi",
    "contentEn"
  ];

  for (const key of required) {
    if (!payload[key] || String(payload[key]).trim() === "") {
      res.status(400).json({ message: `Missing field: ${key}` });
      return;
    }
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO posts (
        slug, tag, level, read_time, published_at,
        title_vi, title_en, excerpt_vi, excerpt_en, content_vi, content_en
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      payload.slug.trim(),
      payload.tag.trim(),
      payload.level.trim(),
      payload.readTime.trim(),
      payload.publishedAt.trim(),
      payload.titleVi.trim(),
      payload.titleEn.trim(),
      payload.excerptVi.trim(),
      payload.excerptEn.trim(),
      payload.contentVi.trim(),
      payload.contentEn.trim()
    );

    res.status(201).json({ id: result.lastInsertRowid });
  } catch (error) {
    if (String(error.message).includes("UNIQUE")) {
      res.status(409).json({ message: "Slug already exists" });
      return;
    }
    res.status(500).json({ message: "Cannot create post" });
  }
});

app.put("/api/posts/:slug", (req, res) => {
  const payload = req.body || {};

  const stmt = db.prepare(`
    UPDATE posts
    SET tag = ?,
        level = ?,
        read_time = ?,
        published_at = ?,
        title_vi = ?,
        title_en = ?,
        excerpt_vi = ?,
        excerpt_en = ?,
        content_vi = ?,
        content_en = ?
    WHERE slug = ?
  `);

  const result = stmt.run(
    String(payload.tag || ""),
    String(payload.level || ""),
    String(payload.readTime || ""),
    String(payload.publishedAt || ""),
    String(payload.titleVi || ""),
    String(payload.titleEn || ""),
    String(payload.excerptVi || ""),
    String(payload.excerptEn || ""),
    String(payload.contentVi || ""),
    String(payload.contentEn || ""),
    req.params.slug
  );

  if (!result.changes) {
    res.status(404).json({ message: "Post not found" });
    return;
  }

  res.json({ ok: true });
});

app.delete("/api/posts/:slug", (req, res) => {
  const result = db.prepare("DELETE FROM posts WHERE slug = ?").run(req.params.slug);

  if (!result.changes) {
    res.status(404).json({ message: "Post not found" });
    return;
  }

  res.json({ ok: true });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

function startServer(port, isFallback = false) {
  const server = app.listen(port, () => {
    if (isFallback) {
      console.log(`Port ${PORT} is busy. IT Hub running at http://localhost:${port}`);
    } else {
      console.log(`IT Hub running at http://localhost:${port}`);
    }
  });

  server.on("error", (error) => {
    if (error && error.code === "EADDRINUSE" && !isFallback) {
      startServer(Number(PORT) + 1, true);
      return;
    }
    throw error;
  });
}

startServer(Number(PORT));
