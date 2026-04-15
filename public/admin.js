const form = document.getElementById("postForm");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const postList = document.getElementById("postList");
const adminMessage = document.getElementById("adminMessage");

function collectFormData() {
  const data = new FormData(form);
  const payload = {};
  for (const [key, value] of data.entries()) {
    payload[key] = String(value || "").trim();
  }
  return payload;
}

function setMessage(text, isError) {
  adminMessage.textContent = text;
  adminMessage.style.color = isError ? "var(--danger)" : "var(--text-soft)";
}

async function refreshList() {
  const lang = getCurrentLang();
  const url = new URL("/api/posts", window.location.origin);
  url.searchParams.set("lang", lang);
  const response = await fetch(url);
  const posts = await response.json();

  postList.innerHTML = "";
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "admin-item";
    div.innerHTML =
      "<strong>" +
      post.title +
      "</strong>" +
      "<span>slug: " +
      post.slug +
      " | " +
      post.tag +
      "</span>";
    postList.appendChild(div);
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = collectFormData();

  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Create failed" }));
    setMessage(error.message || "Create failed", true);
    return;
  }

  setMessage(getCurrentLang() === "vi" ? "Tao bai viet thanh cong." : "Post created successfully.", false);
  await refreshList();
  form.reset();
});

updateBtn.addEventListener("click", async () => {
  const payload = collectFormData();
  if (!payload.slug) {
    setMessage(getCurrentLang() === "vi" ? "Can slug de cap nhat." : "Slug is required for update.", true);
    return;
  }

  const response = await fetch("/api/posts/" + encodeURIComponent(payload.slug), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    setMessage(getCurrentLang() === "vi" ? "Cap nhat that bai." : "Update failed.", true);
    return;
  }

  setMessage(getCurrentLang() === "vi" ? "Cap nhat thanh cong." : "Updated successfully.", false);
  await refreshList();
});

deleteBtn.addEventListener("click", async () => {
  const payload = collectFormData();
  if (!payload.slug) {
    setMessage(getCurrentLang() === "vi" ? "Can slug de xoa." : "Slug is required for delete.", true);
    return;
  }

  const response = await fetch("/api/posts/" + encodeURIComponent(payload.slug), {
    method: "DELETE"
  });

  if (!response.ok) {
    setMessage(getCurrentLang() === "vi" ? "Xoa that bai." : "Delete failed.", true);
    return;
  }

  setMessage(getCurrentLang() === "vi" ? "Da xoa bai viet." : "Post deleted.", false);
  await refreshList();
  form.reset();
});

window.onLanguageChanged = () => {
  refreshList().catch(() => {
    setMessage("Cannot load list", true);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  refreshList().catch(() => {
    setMessage("Cannot load list", true);
  });
});
