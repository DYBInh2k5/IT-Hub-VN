const feedGrid = document.getElementById("feedGrid");
const tagList = document.getElementById("tagList");
const searchInput = document.getElementById("searchInput");
const postCardTemplate = document.getElementById("postCardTemplate");
const timelineGrid = document.getElementById("timelineGrid");
const resourceGrid = document.getElementById("resourceGrid");
const trackGrid = document.getElementById("trackGrid");
const stackGrid = document.getElementById("stackGrid");
const languageGrid = document.getElementById("languageGrid");
const knowledgeGrid = document.getElementById("knowledgeGrid");
const languageModal = document.getElementById("languageModal");
const trackModal = document.getElementById("trackModal");
const langModalClose = document.getElementById("langModalClose");
const trackModalClose = document.getElementById("trackModalClose");
const langModalTitle = document.getElementById("langModalTitle");
const langModalIntro = document.getElementById("langModalIntro");
const langLearnPhases = document.getElementById("langLearnPhases");
const langCodeUsage = document.getElementById("langCodeUsage");
const langCodingGuide = document.getElementById("langCodingGuide");
const langProjectPlan = document.getElementById("langProjectPlan");
const langInterviewQuestions = document.getElementById("langInterviewQuestions");
const langGotchas = document.getElementById("langGotchas");
const langCodeSample = document.getElementById("langCodeSample");
const langLevelTabs = document.getElementById("langLevelTabs");
const langChecklist = document.getElementById("langChecklist");
const copyCodeBtn = document.getElementById("copyCodeBtn");
const trackModalTitle = document.getElementById("trackModalTitle");
const trackModalIntro = document.getElementById("trackModalIntro");
const trackModalOverview = document.getElementById("trackModalOverview");
const trackModalTopics = document.getElementById("trackModalTopics");
const trackModalTools = document.getElementById("trackModalTools");
const trackModalProjects = document.getElementById("trackModalProjects");
const trackModalRoadmap = document.getElementById("trackModalRoadmap");
const trackModalInterview = document.getElementById("trackModalInterview");
const trackModalLevels = document.getElementById("trackModalLevels");
const trackModalRoles = document.getElementById("trackModalRoles");

let selectedTag = "";
let allTags = [];
let activeModalLanguage = "";
let activeModalLevel = "beginner";
let activeTrackName = "";
let activeTrackLevel = "beginner";

function currentLang() {
  return getCurrentLang();
}

async function fetchTags() {
  const response = await fetch("/api/tags");
  if (!response.ok) {
    throw new Error("Cannot load tags");
  }
  allTags = await response.json();
}

async function fetchPosts() {
  const lang = currentLang();
  const q = searchInput.value.trim();
  const url = new URL("/api/posts", window.location.origin);
  url.searchParams.set("lang", lang);
  if (q) {
    url.searchParams.set("q", q);
  }
  if (selectedTag) {
    url.searchParams.set("tag", selectedTag);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Cannot load posts");
  }
  return response.json();
}

function renderTagButtons() {
  if (!tagList) {
    return;
  }
  const lang = currentLang();
  const allLabel = i18n[lang].common.all;

  tagList.innerHTML = "";

  const tags = [{ tag: "", count: 0 }, ...allTags];
  tags.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tag-btn";

    const active = item.tag === selectedTag;
    if (active) {
      button.classList.add("active");
    }

    if (!item.tag) {
      button.textContent = allLabel;
    } else {
      button.textContent = item.tag;
    }

    button.addEventListener("click", () => {
      selectedTag = item.tag;
      renderTagButtons();
      loadFeed().catch(showFeedError);
    });

    tagList.appendChild(button);
  });
}

function renderFeed(posts) {
  if (!feedGrid || !postCardTemplate) {
    return;
  }
  const lang = currentLang();
  feedGrid.innerHTML = "";

  if (!posts.length) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = lang === "vi" ? "Không có bài viết phù hợp." : "No posts matched your filters.";
    feedGrid.appendChild(p);
    return;
  }

  posts.forEach((post, idx) => {
    const node = postCardTemplate.content.cloneNode(true);
    node.querySelector(".card-tag").textContent = post.tag;
    node.querySelector("h3").textContent = post.title;
    node.querySelector(".card-desc").textContent = post.excerpt;
    node.querySelector(".level").textContent = i18n[lang].common.level + ": " + post.level;
    node.querySelector(".time").textContent = post.readTime;

    const link = node.querySelector(".read-link");
    link.href = "/article.html?slug=" + encodeURIComponent(post.slug);
    link.textContent = i18n[lang].feed.read;

    const card = node.querySelector(".feed-card");
    card.style.animationDelay = String(idx * 60) + "ms";
    feedGrid.appendChild(node);
  });
}

function renderRoadmap() {
  if (!timelineGrid) {
    return;
  }
  const lang = currentLang();
  timelineGrid.innerHTML = "";
  i18n[lang].roadmapSteps.forEach((step, index) => {
    const item = document.createElement("article");
    item.innerHTML =
      "<span>0" +
      String(index + 1) +
      "</span><h3>" +
      step[0] +
      "</h3><p>" +
      step[1] +
      "</p>";
    timelineGrid.appendChild(item);
  });
}

function renderResources() {
  if (!resourceGrid) {
    return;
  }
  const lang = currentLang();
  resourceGrid.innerHTML = "";
  resourceLinks[lang].forEach((card) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");

    const list = document.createElement("ul");
    card.items.forEach((entry) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "external-link";
      a.href = entry.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = entry.label;
      li.appendChild(a);
      list.appendChild(li);
    });

    title.textContent = card.title;
    article.appendChild(title);
    article.appendChild(list);
    resourceGrid.appendChild(article);
  });
}

function createLinkBlock(title, links) {
  const wrap = document.createElement("div");
  wrap.className = "track-list-block";

  const heading = document.createElement("h4");
  heading.textContent = title;

  const list = document.createElement("ul");
  list.className = "track-list";
  links.forEach((entry) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "external-link";
    a.href = entry.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = entry.label;
    li.appendChild(a);
    list.appendChild(li);
  });

  wrap.appendChild(heading);
  wrap.appendChild(list);
  return wrap;
}

function levelIndex(level) {
  if (level === "intermediate") {
    return 1;
  }
  if (level === "advanced") {
    return 2;
  }
  return 0;
}

function checklistKey(lang, languageName) {
  return "langChecklist:" + lang + ":" + languageName;
}

function readChecklistState(lang, languageName) {
  const raw = localStorage.getItem(checklistKey(lang, languageName));
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (_error) {
    return {};
  }
}

function writeChecklistState(lang, languageName, state) {
  localStorage.setItem(checklistKey(lang, languageName), JSON.stringify(state));
}

function renderChecklist(languageName) {
  const lang = currentLang();
  const details = languagePlaybook[lang][languageName];
  const deep = languageDeepDetails[lang][languageName];
  const tasks = deep && deep.practicePlan ? deep.practicePlan : details.learnPhases;
  const state = readChecklistState(lang, languageName);

  langChecklist.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("label");
    row.className = "check-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state[index]);
    checkbox.addEventListener("change", () => {
      const next = readChecklistState(lang, languageName);
      next[index] = checkbox.checked;
      writeChecklistState(lang, languageName, next);
    });

    const span = document.createElement("span");
    span.textContent = task;

    row.appendChild(checkbox);
    row.appendChild(span);
    langChecklist.appendChild(row);
  });
}

function renderModalByLevel(languageName) {
  if (!langModalTitle || !langModalIntro || !langLearnPhases || !langCodeUsage || !langCodingGuide || !langProjectPlan || !langGotchas || !langInterviewQuestions || !langCodeSample || !langChecklist) {
    return;
  }
  const lang = currentLang();
  const details = languagePlaybook[lang][languageName];
  const guide = languageGuide[lang].find((item) => item.name === languageName);
  if (!details) {
    return;
  }

  const idx = levelIndex(activeModalLevel);
  const learnItem = details.learnPhases[Math.min(idx, details.learnPhases.length - 1)];
  const codeItem = details.codingGuide[Math.min(idx, details.codingGuide.length - 1)];
  const projectItem = details.projectPlan[Math.min(idx, details.projectPlan.length - 1)];

  langModalTitle.textContent = languageName;
  langModalIntro.textContent = details.intro;

  langLearnPhases.innerHTML = "";
  const p = document.createElement("p");
  p.className = "stack-line";
  p.textContent = learnItem;
  langLearnPhases.appendChild(p);

  langCodeUsage.innerHTML = "";
  const codeUsage = guide ? guide.codeUsage || [] : [];
  codeUsage.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    langCodeUsage.appendChild(li);
  });

  langCodingGuide.innerHTML = "";
  const codeLi = document.createElement("li");
  codeLi.textContent = codeItem;
  langCodingGuide.appendChild(codeLi);

  langProjectPlan.innerHTML = "";
  const projectLi = document.createElement("li");
  projectLi.textContent = projectItem;
  langProjectPlan.appendChild(projectLi);

  langGotchas.innerHTML = "";
  const gotchas = guide ? guide.gotchas || [] : [];
  gotchas.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    langGotchas.appendChild(li);
  });

  langInterviewQuestions.innerHTML = "";
  const interviewQuestions = (guide && guide.interviewQuestions) || [];
  interviewQuestions.forEach((question) => {
    const li = document.createElement("li");
    li.textContent = question;
    langInterviewQuestions.appendChild(li);
  });

  langCodeSample.textContent = details.sampleCode;
  renderChecklist(languageName);

  document.querySelectorAll(".level-tab-btn").forEach((btn) => {
    if (btn.getAttribute("data-level") === activeModalLevel) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function openLanguageModal(languageName) {
  if (!languageModal) {
    return;
  }
  activeModalLanguage = languageName;
  activeModalLevel = "beginner";
  renderModalByLevel(languageName);
  languageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLanguageModal() {
  if (!languageModal) {
    return;
  }
  languageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function createListBlock(title, values) {
  const wrap = document.createElement("div");
  wrap.className = "track-list-block";

  const heading = document.createElement("h4");
  heading.textContent = title;

  const list = document.createElement("ul");
  list.className = "track-list";
  (values || []).forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    list.appendChild(li);
  });

  wrap.appendChild(heading);
  wrap.appendChild(list);
  return wrap;
}

function renderTracks() {
  if (!trackGrid) {
    return;
  }
  const lang = currentLang();
  const detail = i18n[lang].trackCards;
  const trackDetailLabel = i18n[lang].tracksDetail;
  trackGrid.innerHTML = "";

  detail.forEach((track) => {
    const card = document.createElement("article");
    card.className = "track-card";

    const title = document.createElement("h3");
    title.textContent = track.name;

    const summary = document.createElement("p");
    summary.className = "muted";
    summary.textContent = track.summary;

    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(createListBlock(lang === "vi" ? "Kỹ năng cần có" : "Core skills", track.skills));
    card.appendChild(createListBlock(lang === "vi" ? "Công cụ phổ biến" : "Popular tools", track.tools));

    const detailBtn = document.createElement("button");
    detailBtn.type = "button";
    detailBtn.className = "btn btn-outline language-open-btn";
    detailBtn.textContent = trackDetailLabel.openButton;
    detailBtn.addEventListener("click", () => openTrackModal(track.name));

    card.appendChild(detailBtn);

    trackGrid.appendChild(card);
  });
}

function renderTrackModal(trackName) {
  if (!trackModalTitle || !trackModalIntro || !trackModalOverview || !trackModalTopics || !trackModalTools || !trackModalProjects || !trackModalRoadmap || !trackModalInterview || !trackModalLevels || !trackModalRoles) {
    return;
  }
  const lang = currentLang();
  const data = trackDeepDetails[lang] && trackDeepDetails[lang][trackName];
  if (!data) {
    return;
  }

  const trackLevelTabs = document.getElementById("trackModalLevelTabs");
  if (trackLevelTabs) {
    trackLevelTabs.querySelectorAll(".level-tab-btn").forEach((button) => {
      const isActive = (button.getAttribute("data-track-level") || "beginner") === activeTrackLevel;
      button.classList.toggle("active", isActive);
    });
  }

  trackModalTitle.textContent = trackName;
  trackModalIntro.textContent = data.overview;
  trackModalOverview.textContent = data.overview;

  trackModalTopics.innerHTML = "";
  data.topics.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    trackModalTopics.appendChild(li);
  });

  trackModalTools.innerHTML = "";
  data.tools.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    trackModalTools.appendChild(li);
  });

  trackModalProjects.innerHTML = "";
  data.projects.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    trackModalProjects.appendChild(li);
  });

  trackModalRoadmap.innerHTML = "";
  data.roadmapWeeks.forEach((week) => {
    const item = document.createElement("li");
    item.className = "roadmap-week";

    const heading = document.createElement("div");
    heading.className = "roadmap-week-heading";

    const title = document.createElement("h4");
    title.textContent = week.title;

    const range = document.createElement("span");
    range.className = "roadmap-week-range";
    range.textContent = "Ngày " + week.startDay + "-" + week.endDay;

    heading.appendChild(title);
    heading.appendChild(range);

    const taskList = document.createElement("ul");
    taskList.className = "roadmap-task-list";
    week.tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });

    item.appendChild(heading);
    item.appendChild(taskList);
    trackModalRoadmap.appendChild(item);
  });

  trackModalInterview.innerHTML = "";
  data.interviewQuestions.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    trackModalInterview.appendChild(li);
  });

  trackModalLevels.innerHTML = "";
  const selectedLevel = data.levels.find((level) => level.stage.toLowerCase() === activeTrackLevel) || data.levels[0];
  if (selectedLevel) {
    const box = document.createElement("div");
    box.className = "level-box track-level-panel";

    const heading = document.createElement("h4");
    heading.textContent = selectedLevel.stage;

    const focus = document.createElement("p");
    focus.className = "level-focus";
    focus.innerHTML = "<strong>" + i18n[lang].common.focus + ":</strong> " + selectedLevel.focus;

    const mustKnow = document.createElement("div");
    mustKnow.className = "track-level-block";
    mustKnow.innerHTML = "<strong>" + i18n[lang].common.mustKnow + "</strong>";

    const tools = document.createElement("div");
    tools.className = "track-level-block";
    tools.innerHTML = "<strong>" + i18n[lang].common.tooling + "</strong>";

    const project = document.createElement("div");
    project.className = "track-level-project";
    project.innerHTML = "<strong>" + i18n[lang].common.firstProject + "</strong>";

    const skillGrid = document.createElement("div");
    skillGrid.className = "track-skill-grid";
    [
      { label: i18n[lang].common.mustKnow, values: selectedLevel.mustKnow },
      { label: i18n[lang].common.tooling, values: selectedLevel.tools },
      { label: i18n[lang].common.firstProject, values: [selectedLevel.project] }
    ].forEach((group) => {
      const block = document.createElement("div");
      block.className = "track-skill-group";

      const groupTitle = document.createElement("span");
      groupTitle.className = "track-skill-title";
      groupTitle.textContent = group.label;

      const chips = document.createElement("div");
      chips.className = "track-skill-chips";
      group.values.forEach((value) => {
        const chip = document.createElement("span");
        chip.className = "track-skill-chip";
        chip.textContent = value;
        chips.appendChild(chip);
      });

      block.appendChild(groupTitle);
      block.appendChild(chips);
      skillGrid.appendChild(block);
    });

    box.appendChild(heading);
    box.appendChild(focus);
    box.appendChild(skillGrid);
    box.appendChild(project);
    box.appendChild(createSimpleList([selectedLevel.project], "knowledge-list"));

    trackModalLevels.appendChild(box);
  }

  trackModalRoles.innerHTML = "";
  data.roles.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    trackModalRoles.appendChild(li);
  });

  document.querySelectorAll("#trackModal [data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && key.startsWith("tracksDetail.")) {
      const parts = key.split(".");
      let value = i18n[lang];
      for (const part of parts) {
        value = value && value[part];
      }
      if (typeof value === "string") {
        node.textContent = value;
      }
    }
  });
}

function openTrackModal(trackName) {
  if (!trackModal) {
    return;
  }
  activeTrackName = trackName;
  activeTrackLevel = "beginner";
  renderTrackModal(trackName);
  trackModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeTrackModal() {
  if (!trackModal) {
    return;
  }
  trackModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderStacks() {
  if (!stackGrid) {
    return;
  }
  const lang = currentLang();
  const stacks = i18n[lang].stackCards;
  stackGrid.innerHTML = "";

  stacks.forEach((stack) => {
    const card = document.createElement("article");
    card.className = "stack-card";

    const title = document.createElement("h3");
    title.textContent = stack.domain;

    const langs = document.createElement("p");
    langs.className = "stack-line";
    langs.innerHTML =
      "<strong>" +
      (lang === "vi" ? "Ngôn ngữ:" : "Languages:") +
      "</strong> " +
      stack.languages.join(", ");

    const frameworks = document.createElement("p");
    frameworks.className = "stack-line";
    frameworks.innerHTML =
      "<strong>" +
      (lang === "vi" ? "Framework:" : "Frameworks:") +
      "</strong> " +
      stack.frameworks.join(", ");

    const note = document.createElement("p");
    note.className = "muted";
    note.textContent = stack.note;

    card.appendChild(title);
    card.appendChild(langs);
    card.appendChild(frameworks);
    card.appendChild(note);
    stackGrid.appendChild(card);
  });
}

function renderLanguages() {
  if (!languageGrid) {
    return;
  }
  const lang = currentLang();
  const label = i18n[lang].common;
  const guides = languageGuide[lang];
  const deep = languageDeepDetails[lang];

  languageGrid.innerHTML = "";
  guides.forEach((guide) => {
    const card = document.createElement("article");
    card.className = "language-card";

    const title = document.createElement("h3");
    title.textContent = guide.name;

    const install = document.createElement("p");
    install.className = "stack-line";
    install.innerHTML = "<strong>" + label.install + ":</strong> " + guide.install;

    const project = document.createElement("p");
    project.className = "stack-line";
    project.innerHTML = "<strong>" + label.firstProject + ":</strong> " + guide.firstProject;

    const detailBtn = document.createElement("button");
    detailBtn.type = "button";
    detailBtn.className = "btn btn-outline language-open-btn";
    detailBtn.textContent = i18n[lang].languagesDetail.openButton;
    detailBtn.addEventListener("click", () => openLanguageModal(guide.name));

    card.appendChild(title);
    card.appendChild(install);
    card.appendChild(createListBlock(label.useCases, guide.useCases));
    card.appendChild(createListBlock(label.learnPath, guide.learnPath));
    card.appendChild(createListBlock(label.topics, guide.topics));
    card.appendChild(createListBlock(label.codeUsage, guide.codeUsage));
    card.appendChild(createListBlock(label.gotchas, guide.gotchas));
    card.appendChild(createListBlock(label.interview, guide.interviewQuestions));
    card.appendChild(createListBlock(label.tooling, guide.tooling));
    card.appendChild(createListBlock(label.frameworks, guide.frameworks));
    card.appendChild(createLinkBlock(label.references, guide.links));

    const extra = deep[guide.name];
    if (extra) {
      card.appendChild(createListBlock(label.practicePlan, extra.practicePlan));
      card.appendChild(createListBlock(label.commands, extra.commands));
      card.appendChild(createListBlock(label.mistakes, extra.mistakes));
    }

    card.appendChild(project);
    card.appendChild(detailBtn);

    languageGrid.appendChild(card);
  });
}

function createSimpleList(values, className) {
  const list = document.createElement("ul");
  list.className = className;
  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
  });
  return list;
}

function renderKnowledge() {
  if (!knowledgeGrid) {
    return;
  }
  const lang = currentLang();
  const label = i18n[lang].common;
  const tracks = knowledgeData[lang];

  knowledgeGrid.innerHTML = "";
  tracks.forEach((track) => {
    const card = document.createElement("article");
    card.className = "knowledge-card";

    const title = document.createElement("h3");
    title.textContent = track.role;

    const overview = document.createElement("p");
    overview.className = "muted";
    overview.textContent = track.overview;

    const pitfallsTitle = document.createElement("h4");
    pitfallsTitle.textContent = label.pitfalls;

    card.appendChild(title);
    card.appendChild(overview);
    card.appendChild(pitfallsTitle);
    card.appendChild(createSimpleList(track.pitfalls, "knowledge-list"));

    track.levels.forEach((level) => {
      const box = document.createElement("div");
      box.className = "level-box";

      const heading = document.createElement("h4");
      heading.textContent = label.level + ": " + level.stage;

      const focus = document.createElement("p");
      focus.className = "level-focus";
      focus.innerHTML = "<strong>" + label.focus + ":</strong> " + level.focus;

      const mk = document.createElement("p");
      mk.className = "level-subhead";
      mk.textContent = label.mustKnow;

      const pr = document.createElement("p");
      pr.className = "level-subhead";
      pr.textContent = label.projects;

      const iv = document.createElement("p");
      iv.className = "level-subhead";
      iv.textContent = label.interview;

      box.appendChild(heading);
      box.appendChild(focus);
      box.appendChild(mk);
      box.appendChild(createSimpleList(level.mustKnow, "knowledge-list"));
      box.appendChild(pr);
      box.appendChild(createSimpleList(level.projects, "knowledge-list"));
      box.appendChild(iv);
      box.appendChild(createSimpleList(level.interview, "knowledge-list"));

      card.appendChild(box);
    });

    knowledgeGrid.appendChild(card);
  });
}

function showFeedError() {
  if (!feedGrid) {
    return;
  }
  feedGrid.innerHTML = "<p class=\"muted\">Cannot load posts right now.</p>";
}

async function loadFeed() {
  if (!feedGrid) {
    return;
  }
  const posts = await fetchPosts();
  renderFeed(posts);
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    loadFeed().catch(showFeedError);
  });
}

window.onLanguageChanged = () => {
  renderTagButtons();
  renderTracks();
  renderStacks();
  renderLanguages();
  renderKnowledge();
  renderRoadmap();
  renderResources();
  loadFeed().catch(showFeedError);

  if (languageModal && languageModal.getAttribute("aria-hidden") === "false" && activeModalLanguage) {
    renderModalByLevel(activeModalLanguage);
  }

  if (trackModal && trackModal.getAttribute("aria-hidden") === "false" && activeTrackName) {
    renderTrackModal(activeTrackName);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  if (langLevelTabs) {
    langLevelTabs.querySelectorAll(".level-tab-btn").forEach((button) => {
      button.addEventListener("click", () => {
        activeModalLevel = button.getAttribute("data-level") || "beginner";
        if (activeModalLanguage) {
          renderModalByLevel(activeModalLanguage);
        }
      });
    });
  }

  const trackLevelTabs = document.getElementById("trackModalLevelTabs");
  if (trackLevelTabs) {
    trackLevelTabs.querySelectorAll(".level-tab-btn").forEach((button) => {
      button.addEventListener("click", () => {
        activeTrackLevel = button.getAttribute("data-track-level") || "beginner";
        if (activeTrackName) {
          renderTrackModal(activeTrackName);
        }
      });
    });
  }

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", async () => {
      const lang = currentLang();
      const original = i18n[lang].languagesDetail.copyCode;
      const copied = i18n[lang].languagesDetail.copied;
      try {
        await navigator.clipboard.writeText(langCodeSample.textContent || "");
        copyCodeBtn.textContent = copied;
      } catch (_error) {
        copyCodeBtn.textContent = copied;
      }

      setTimeout(() => {
        copyCodeBtn.textContent = original;
      }, 1300);
    });
  }

  if (langModalClose) {
    langModalClose.addEventListener("click", closeLanguageModal);
  }

  if (trackModalClose) {
    trackModalClose.addEventListener("click", closeTrackModal);
  }

  if (languageModal) {
    languageModal.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.getAttribute("data-close-modal") === "true") {
        closeLanguageModal();
      }
    });
  }

  if (trackModal) {
    trackModal.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.getAttribute("data-close-track-modal") === "true") {
        closeTrackModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (languageModal && event.key === "Escape" && languageModal.getAttribute("aria-hidden") === "false") {
      closeLanguageModal();
    }
    if (trackModal && event.key === "Escape" && trackModal.getAttribute("aria-hidden") === "false") {
      closeTrackModal();
    }
  });

  const navSearch = document.getElementById("navSearch");

  if (navSearch) {
    navSearch.addEventListener("input", () => {
      const keyword = navSearch.value.trim().toLowerCase();
      document.querySelectorAll(".nav-dropdown a").forEach((node) => {
        const match = node.textContent.toLowerCase().includes(keyword);
        node.style.display = match ? "block" : "none";
      });
    });
  }

  document.querySelectorAll(".nav-dropdown a").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = link.closest("details");
      if (menu) {
        menu.removeAttribute("open");
      }
    });
  });

  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav-dropdown a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const normalizedHref = href.replace(/\/$/, "") || "/";
    if (normalizedHref === currentPath) {
      link.classList.add("active");
    }
  });

  const sectionIds = ["feed", "tracks", "stacks", "languages", "knowledge", "roadmap", "resources"];
  const map = {
    feed: "nav.feed",
    tracks: "nav.tracks",
    stacks: "nav.stacks",
    languages: "nav.languages",
    knowledge: "nav.knowledge",
    roadmap: "nav.roadmap",
    resources: "nav.resources"
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) {
        return;
      }

      const id = visible.target.id;
      const key = map[id];
      document.querySelectorAll(".nav-dropdown a").forEach((link) => {
        if (link.getAttribute("data-i18n") === key) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    },
    { threshold: 0.35 }
  );

  sectionIds.forEach((id) => {
    const node = document.getElementById(id);
    if (node) {
      observer.observe(node);
    }
  });

  renderTracks();
  renderStacks();
  renderLanguages();
  renderKnowledge();
  renderRoadmap();
  renderResources();

  if (feedGrid) {
    try {
      await fetchTags();
      renderTagButtons();
      await loadFeed();
    } catch (_error) {
      showFeedError();
    }
  }
});
