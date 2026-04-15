const articleBox = document.getElementById("articleBox");

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug") || "";
}

async function loadArticle() {
  const slug = getSlug();
  const lang = getCurrentLang();

  if (!slug) {
    articleBox.innerHTML = "<p class=\"muted\">Missing post slug.</p>";
    return;
  }

  const url = new URL("/api/posts/" + encodeURIComponent(slug), window.location.origin);
  url.searchParams.set("lang", lang);

  const response = await fetch(url);
  if (!response.ok) {
    articleBox.innerHTML = "<p class=\"muted\">Post not found.</p>";
    return;
  }

  const post = await response.json();
  articleBox.innerHTML =
    "<h1>" +
    post.title +
    "</h1>" +
    "<p class=\"muted\">" +
    post.tag +
    " - " +
    post.level +
    " - " +
    post.readTime +
    " - " +
    post.publishedAt +
    "</p>" +
    "<p>" +
    post.content +
    "</p>";
}

window.onLanguageChanged = () => {
  loadArticle().catch(() => {
    articleBox.innerHTML = "<p class=\"muted\">Cannot load article.</p>";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadArticle().catch(() => {
    articleBox.innerHTML = "<p class=\"muted\">Cannot load article.</p>";
  });
});
