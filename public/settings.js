const i18n = {
  vi: {
    nav: {
      home: "Trang chủ",
      explore: "Mục lục",
      searchPlaceholder: "Tìm mục...",
      feed: "Tin mới",
      tracks: "Ngành IT",
      stacks: "Ngôn ngữ & Framework",
      languages: "Sổ tay ngôn ngữ",
      knowledge: "Kiến thức sâu",
      roadmap: "Roadmap",
      resources: "Tài nguyên",
      admin: "Quản trị"
    },
    hero: {
      chip: "All-in-one IT Platform",
      title: "Tổng hợp mọi thứ về IT trong một nơi duy nhất",
      sub: "Cập nhật xu hướng mới, học công nghệ nhanh hơn, và tìm được hướng đi nghề nghiệp rõ ràng.",
      cta1: "Khám phá ngay",
      cta2: "Quản lý bài viết"
    },
    home: {
      quickTitle: "Chọn trang để xem nội dung chi tiết",
      openPage: "Mở trang"
    },
    feed: { tag: "Knowledge Feed", title: "Bản tin IT cập nhật theo nhu cầu của bạn", read: "Đọc chi tiết" },
    tracks: { tag: "IT Domains", title: "Chi tiết từng ngành IT để bạn chọn hướng" },
    stacks: { tag: "Language + Framework Map", title: "Ngôn ngữ và framework cần học theo từng hướng" },
    languages: { tag: "Language Handbook", title: "Chi tiết ngôn ngữ: cách học, cách cài, cách sử dụng" },
    languagesDetail: {
      learnTitle: "Học như thế nào",
      codeTitle: "Code như thế nào",
      projectTitle: "Lộ trình mini project",
      sampleTitle: "Code sample",
      checklistTitle: "Checklist luyện tập",
      copyCode: "Copy code",
      copied: "Đã copy code",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      openButton: "Xem chi tiết học & code"
    },
    tracksDetail: {
      openButton: "Xem cần học gì",
      overviewTitle: "Tổng quan cần nắm",
      topicsTitle: "Chủ đề nên học",
      toolsTitle: "Tool cần dùng",
      projectTitle: "Dự án nên làm",
      roadmapTitle: "Lộ trình 30 ngày",
      interviewTitle: "Câu hỏi phỏng vấn",
      levelsTitle: "Mức cần đạt",
      junior: "Junior",
      middle: "Middle",
      senior: "Senior",
      roleTitle: "Mảng phù hợp"
    },
    knowledge: { tag: "Deep Learning Path", title: "Kiến thức chi tiết theo cấp độ cho từng ngành" },
    roadmap: { tag: "Career Path", title: "Lộ trình IT Pro trong 6 bước" },
    resources: { tag: "Toolkit", title: "Bộ tài nguyên bạn có thể dùng ngay" },
    footer: { copy: "Build your future, one commit at a time." },
    article: { back: "Quay lại trang chủ", loading: "Đang tải nội dung..." },
    admin: {
      home: "Trang chủ",
      title: "Quản lý bài viết",
      desc: "Tạo, cập nhật hoặc xóa bài viết trong database SQLite.",
      formTitle: "Thông tin bài viết",
      create: "Tạo bài viết",
      update: "Cập nhật theo slug",
      delete: "Xóa theo slug",
      listTitle: "Danh sách bài viết hiện tại"
    },
    common: {
      all: "Tất cả",
      dark: "Dark",
      light: "Light",
      search: "Tìm bài viết...",
      level: "Cấp độ",
      focus: "Trọng tâm",
      mustKnow: "Bắt buộc nắm",
      projects: "Dự án nên làm",
      interview: "Phỏng vấn thường hỏi",
      pitfalls: "Lỗi thường gặp",
      install: "Cách cài",
      useCases: "Dùng để làm gì",
      learnPath: "Lộ trình học",
      topics: "Nên học thêm",
      tooling: "Tool cần có",
      frameworks: "Framework phổ biến",
      firstProject: "Project đầu tiên",
      references: "Link tài liệu",
      practicePlan: "Kế hoạch luyện tập",
      commands: "Lệnh cần nhớ",
      mistakes: "Sai lầm thường gặp",
      gotchas: "Điểm dễ sai",
      codeUsage: "Cách code & sử dụng"
    },
    roadmapSteps: [
      ["Nền tảng", "Nắm chắc logic, giải thuật, Git và cách tự học hiệu quả."],
      ["Chọn hướng", "Xác định Web, Mobile, Data, Security hoặc Cloud theo mục tiêu."],
      ["Thực chiến", "Làm 3-5 dự án thật, deploy lên internet và viết case study."],
      ["Cộng đồng", "Tham gia meetup, open source và networking chất lượng."],
      ["Sự nghiệp", "Tối ưu CV, LinkedIn, portfolio và luyện interview."],
      ["Tăng tốc", "Học liên tục, cập nhật trend mới và nâng cấp tư duy."],
      ["Chuyên sâu", "Chọn một mũi nhọn: performance, security, data, hoặc architecture."],
      ["Lãnh đạo", "Học cách review code, dẫn dắt task lớn và ra quyết định kỹ thuật."]
    ],
    trackCards: [
      {
        name: "Frontend Engineer",
        summary: "Xây giao diện web nhanh, dễ dùng và tối ưu trải nghiệm người dùng.",
        skills: ["HTML/CSS nâng cao", "JavaScript/TypeScript", "State management", "Web performance", "UI testing"],
        tools: ["Figma", "Chrome DevTools", "Playwright", "Lighthouse"]
      },
      {
        name: "Backend Engineer",
        summary: "Xây API, xử lý dữ liệu, bảo mật và khả năng mở rộng hệ thống.",
        skills: ["REST/GraphQL", "Database design", "AuthN/AuthZ", "Caching", "Observability"],
        tools: ["Postman", "Redis", "OpenTelemetry", "Docker"]
      },
      {
        name: "Mobile Engineer",
        summary: "Phát triển app mobile ổn định, tiết kiệm pin và trải nghiệm mượt.",
        skills: ["Native lifecycle", "State + offline sync", "Push notifications", "App performance"],
        tools: ["Android Studio", "Xcode", "Firebase", "Fastlane"]
      },
      {
        name: "Data Engineer",
        summary: "Xây pipeline ETL/ELT, kho dữ liệu và đảm bảo chất lượng dữ liệu.",
        skills: ["SQL chuyên sâu", "Data modeling", "Batch + streaming", "Data quality"],
        tools: ["Airflow", "dbt", "Spark", "BigQuery"]
      },
      {
        name: "AI/ML Engineer",
        summary: "Xây và triển khai mô hình ML/LLM vào sản phẩm thực tế.",
        skills: ["Python + ML", "Feature engineering", "Model serving", "Prompt + evaluation"],
        tools: ["PyTorch", "TensorFlow", "MLflow", "LangChain"]
      },
      {
        name: "DevOps / Platform Engineer",
        summary: "Tự động hóa vận hành, CI/CD, hạ tầng cloud và độ tin cậy hệ thống.",
        skills: ["CI/CD design", "IaC", "Container orchestration", "SRE basics"],
        tools: ["GitHub Actions", "Terraform", "Kubernetes", "Prometheus + Grafana"]
      }
    ],
    stackCards: [
      {
        domain: "Web Frontend",
        languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
        frameworks: ["React", "Next.js", "Vue", "Nuxt", "SvelteKit"],
        note: "Tập trung component architecture, state, SSR/SSG và Web Vitals."
      },
      {
        domain: "Web Backend",
        languages: ["TypeScript", "Python", "Go", "Java", "C#"],
        frameworks: ["Express", "NestJS", "FastAPI", "Spring Boot", ".NET"],
        note: "Ưu tiên API contract, transaction, queue và observability."
      },
      {
        domain: "Mobile",
        languages: ["Kotlin", "Swift", "Dart", "TypeScript"],
        frameworks: ["Android SDK", "SwiftUI", "Flutter", "React Native"],
        note: "Nắm architecture mobile, local storage, networking và release cycle."
      },
      {
        domain: "Data Engineering",
        languages: ["SQL", "Python", "Scala"],
        frameworks: ["Spark", "dbt", "Airflow", "Kafka"],
        note: "Tập trung data modeling, partitioning, lineage và data quality checks."
      },
      {
        domain: "AI / Machine Learning",
        languages: ["Python", "SQL"],
        frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "vLLM"],
        note: "Ngoài train model, cần giám sát drift, evaluation và cost inferencing."
      },
      {
        domain: "DevOps / Cloud",
        languages: ["Bash", "Python", "Go", "YAML"],
        frameworks: ["Terraform", "Ansible", "Kubernetes", "Helm", "Argo CD"],
        note: "Hạ tầng hiện đại xoay quanh IaC, policy-as-code và GitOps."
      },
      {
        domain: "Cyber Security",
        languages: ["Python", "Bash", "PowerShell", "C"],
        frameworks: ["OWASP ASVS", "MITRE ATT&CK", "Sigma", "YARA"],
        note: "Kết hợp secure SDLC, pentest, logging và incident response."
      }
    ]
  },
  en: {
    nav: {
      home: "Home",
      explore: "Explore",
      searchPlaceholder: "Find section...",
      feed: "Feed",
      tracks: "IT Domains",
      stacks: "Languages & Frameworks",
      languages: "Language Handbook",
      knowledge: "Deep Knowledge",
      roadmap: "Roadmap",
      resources: "Resources",
      admin: "Admin"
    },
    hero: {
      chip: "All-in-one IT Platform",
      title: "Everything about IT in one focused platform",
      sub: "Follow new trends, learn faster, and build a clear career path from beginner to pro.",
      cta1: "Explore now",
      cta2: "Manage content"
    },
    home: {
      quickTitle: "Choose a page to view detailed content",
      openPage: "Open page"
    },
    feed: { tag: "Knowledge Feed", title: "Curated IT updates based on your interests", read: "Read details" },
    tracks: { tag: "IT Domains", title: "Detailed IT domains to choose your path" },
    stacks: { tag: "Language + Framework Map", title: "Languages and frameworks by career path" },
    languages: { tag: "Language Handbook", title: "Language details: learn, install, and use in real work" },
    languagesDetail: {
      learnTitle: "How to learn",
      codeTitle: "How to code",
      projectTitle: "Mini project roadmap",
      sampleTitle: "Code sample",
      checklistTitle: "Practice checklist",
      copyCode: "Copy code",
      copied: "Code copied",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      openButton: "Open learn & code guide"
    },
    tracksDetail: {
      openButton: "See what to learn",
      overviewTitle: "Core overview",
      topicsTitle: "Topics to learn",
      toolsTitle: "Tools to use",
      projectTitle: "Projects to build",
      roadmapTitle: "30-day roadmap",
      interviewTitle: "Interview questions",
      levelsTitle: "Skill levels",
      junior: "Junior",
      middle: "Middle",
      senior: "Senior",
      roleTitle: "Best-fit roles"
    },
    knowledge: { tag: "Deep Learning Path", title: "Detailed knowledge by level for each domain" },
    roadmap: { tag: "Career Path", title: "IT Pro roadmap in 6 practical steps" },
    resources: { tag: "Toolkit", title: "Resources you can use right away" },
    footer: { copy: "Build your future, one commit at a time." },
    article: { back: "Back to home", loading: "Loading content..." },
    admin: {
      home: "Home",
      title: "Post Management",
      desc: "Create, update, or delete posts in the SQLite database.",
      formTitle: "Post details",
      create: "Create post",
      update: "Update by slug",
      delete: "Delete by slug",
      listTitle: "Current post list"
    },
    common: {
      all: "All",
      dark: "Dark",
      light: "Light",
      search: "Search posts...",
      level: "Level",
      focus: "Focus",
      mustKnow: "Must know",
      projects: "Projects to build",
      interview: "Typical interview topics",
      pitfalls: "Common pitfalls",
      install: "Installation",
      useCases: "Use cases",
      learnPath: "Learning path",
      topics: "Topics to learn next",
      tooling: "Essential tools",
      frameworks: "Popular frameworks",
      firstProject: "First project",
      references: "Reference links",
      practicePlan: "Practice plan",
      commands: "Useful commands",
      mistakes: "Common mistakes",
      gotchas: "Gotchas",
      codeUsage: "How to code & use"
    },
    roadmapSteps: [
      ["Fundamentals", "Master logic, data structures, Git, and efficient self-learning."],
      ["Choose track", "Pick Web, Mobile, Data, Security, or Cloud based on goals."],
      ["Build projects", "Ship 3-5 real projects and document your case studies."],
      ["Community", "Join meetups, contribute to open source, and build network."],
      ["Career", "Polish CV, LinkedIn, portfolio, and interview communication."],
      ["Acceleration", "Keep learning and continuously update your technical perspective."]
    ],
    trackCards: [
      {
        name: "Frontend Engineer",
        summary: "Build fast, accessible interfaces with great user experience.",
        skills: ["Advanced HTML/CSS", "JavaScript/TypeScript", "State management", "Web performance", "UI testing"],
        tools: ["Figma", "Chrome DevTools", "Playwright", "Lighthouse"]
      },
      {
        name: "Backend Engineer",
        summary: "Design APIs, data systems, security, and scalable server logic.",
        skills: ["REST/GraphQL", "Database design", "AuthN/AuthZ", "Caching", "Observability"],
        tools: ["Postman", "Redis", "OpenTelemetry", "Docker"]
      },
      {
        name: "Mobile Engineer",
        summary: "Ship stable mobile apps with smooth runtime and battery efficiency.",
        skills: ["Native lifecycle", "State + offline sync", "Push notifications", "App performance"],
        tools: ["Android Studio", "Xcode", "Firebase", "Fastlane"]
      },
      {
        name: "Data Engineer",
        summary: "Build ETL/ELT pipelines and reliable, query-ready data platforms.",
        skills: ["Advanced SQL", "Data modeling", "Batch + streaming", "Data quality"],
        tools: ["Airflow", "dbt", "Spark", "BigQuery"]
      },
      {
        name: "AI/ML Engineer",
        summary: "Develop and deploy ML/LLM systems into production products.",
        skills: ["Python + ML", "Feature engineering", "Model serving", "Prompt + evaluation"],
        tools: ["PyTorch", "TensorFlow", "MLflow", "LangChain"]
      },
      {
        name: "DevOps / Platform Engineer",
        summary: "Automate delivery, infrastructure, and reliability across teams.",
        skills: ["CI/CD design", "IaC", "Container orchestration", "SRE fundamentals"],
        tools: ["GitHub Actions", "Terraform", "Kubernetes", "Prometheus + Grafana"]
      }
    ],
    stackCards: [
      {
        domain: "Web Frontend",
        languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
        frameworks: ["React", "Next.js", "Vue", "Nuxt", "SvelteKit"],
        note: "Focus on component architecture, state patterns, SSR/SSG, and Web Vitals."
      },
      {
        domain: "Web Backend",
        languages: ["TypeScript", "Python", "Go", "Java", "C#"],
        frameworks: ["Express", "NestJS", "FastAPI", "Spring Boot", ".NET"],
        note: "Prioritize API contracts, transactions, queue processing, and observability."
      },
      {
        domain: "Mobile",
        languages: ["Kotlin", "Swift", "Dart", "TypeScript"],
        frameworks: ["Android SDK", "SwiftUI", "Flutter", "React Native"],
        note: "Master architecture, local persistence, networking, and release cycles."
      },
      {
        domain: "Data Engineering",
        languages: ["SQL", "Python", "Scala"],
        frameworks: ["Spark", "dbt", "Airflow", "Kafka"],
        note: "Core focus: modeling, partition strategy, lineage, and quality checks."
      },
      {
        domain: "AI / Machine Learning",
        languages: ["Python", "SQL"],
        frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "vLLM"],
        note: "Beyond training, monitor drift, evaluation quality, and inference cost."
      },
      {
        domain: "DevOps / Cloud",
        languages: ["Bash", "Python", "Go", "YAML"],
        frameworks: ["Terraform", "Ansible", "Kubernetes", "Helm", "Argo CD"],
        note: "Modern operations rely on IaC, policy-as-code, and GitOps workflows."
      },
      {
        domain: "Cyber Security",
        languages: ["Python", "Bash", "PowerShell", "C"],
        frameworks: ["OWASP ASVS", "MITRE ATT&CK", "Sigma", "YARA"],
        note: "Combine secure SDLC, pentest practice, logging, and incident response."
      }
    ]
  }
};

const trackDeepDetails = {
  vi: {
    "Frontend Engineer": {
      overview: "Muốn làm frontend tốt thì phải nắm giao diện, luồng dữ liệu, và tối ưu trải nghiệm người dùng.",
      topics: ["Semantic HTML", "CSS layout + responsive", "JavaScript DOM + async", "React/Vue state + routing", "Accessibility + performance"],
      tools: ["VS Code", "Chrome DevTools", "Lighthouse", "Playwright"],
      projects: ["Landing page", "Dashboard admin", "E-commerce UI"],
      roles: ["UI developer", "Frontend engineer", "Design-system engineer"]
    },
    "Backend Engineer": {
      overview: "Backend cần API rõ ràng, dữ liệu đúng, bảo mật tốt và biết scale khi traffic tăng.",
      topics: ["HTTP/REST", "SQL + transaction", "Index + caching", "AuthN/AuthZ", "Logging + monitoring"],
      tools: ["Postman", "Redis", "OpenTelemetry", "Docker"],
      projects: ["Blog API", "Order service", "Auth service"],
      roles: ["Backend engineer", "API engineer", "Platform engineer"]
    },
    "Mobile Engineer": {
      overview: "Mobile tập trung app mượt, ổn định pin, và quản lý trạng thái sạch.",
      topics: ["App lifecycle", "State management", "Offline sync", "Push notification", "Release + crash handling"],
      tools: ["Android Studio", "Xcode", "Firebase", "Fastlane"],
      projects: ["To-do app", "Expense tracker", "Chat app"],
      roles: ["Android developer", "iOS developer", "Mobile engineer"]
    },
    "Data Engineer": {
      overview: "Data engineer xây pipeline dữ liệu, đảm bảo chất lượng và phục vụ phân tích/AI.",
      topics: ["SQL nâng cao", "Data modeling", "ETL/ELT", "Batch + streaming", "Data quality + lineage"],
      tools: ["Airflow", "dbt", "Spark", "BigQuery"],
      projects: ["Mini warehouse", "Sales pipeline", "Realtime dashboard"],
      roles: ["Data engineer", "Analytics engineer", "Data platform engineer"]
    },
    "AI/ML Engineer": {
      overview: "AI/ML cần nền tảng Python tốt, hiểu dữ liệu, huấn luyện model và triển khai vào sản phẩm.",
      topics: ["Python + NumPy/Pandas", "Feature engineering", "Model training", "Evaluation", "Model serving"],
      tools: ["PyTorch", "TensorFlow", "MLflow", "LangChain"],
      projects: ["Text classifier", "Recommendation engine", "LLM assistant"],
      roles: ["ML engineer", "Applied AI engineer", "LLM engineer"]
    },
    "DevOps / Platform Engineer": {
      overview: "DevOps cần hạ tầng, CI/CD, container, cloud và khả năng theo dõi hệ thống.",
      topics: ["Linux + networking", "CI/CD", "Docker + Kubernetes", "IaC", "Monitoring + incident response"],
      tools: ["GitHub Actions", "Terraform", "Kubernetes", "Prometheus + Grafana"],
      projects: ["Deploy pipeline", "Blue/green rollout", "Observability stack"],
      roles: ["DevOps engineer", "Platform engineer", "SRE"]
    },
    "Cyber Security": {
      overview: "Security phải học từ sớm để biết tìm lỗi, chặn lỗi và phản ứng khi có sự cố.",
      topics: ["OWASP Top 10", "Threat modeling", "Secure SDLC", "SIEM + IR", "Zero Trust"],
      tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Splunk"],
      projects: ["Web app audit", "Security pipeline", "Incident runbook"],
      roles: ["AppSec", "Security engineer", "SOC analyst"]
    }
  },
  en: {
    "Frontend Engineer": {
      overview: "Frontend requires strong UI fundamentals, data flow discipline, and user experience optimization.",
      topics: ["Semantic HTML", "Responsive CSS layout", "JavaScript DOM + async", "React/Vue state + routing", "Accessibility + performance"],
      tools: ["VS Code", "Chrome DevTools", "Lighthouse", "Playwright"],
      projects: ["Landing page", "Admin dashboard", "E-commerce UI"],
      roles: ["UI developer", "Frontend engineer", "Design-system engineer"]
    },
    "Backend Engineer": {
      overview: "Backend work needs clear APIs, correct data handling, security, and the ability to scale.",
      topics: ["HTTP/REST", "SQL + transactions", "Index + caching", "AuthN/AuthZ", "Logging + monitoring"],
      tools: ["Postman", "Redis", "OpenTelemetry", "Docker"],
      projects: ["Blog API", "Order service", "Auth service"],
      roles: ["Backend engineer", "API engineer", "Platform engineer"]
    },
    "Mobile Engineer": {
      overview: "Mobile development focuses on smooth apps, battery efficiency, and clean state handling.",
      topics: ["App lifecycle", "State management", "Offline sync", "Push notifications", "Release + crash handling"],
      tools: ["Android Studio", "Xcode", "Firebase", "Fastlane"],
      projects: ["To-do app", "Expense tracker", "Chat app"],
      roles: ["Android developer", "iOS developer", "Mobile engineer"]
    },
    "Data Engineer": {
      overview: "Data engineers build data pipelines, enforce quality, and serve analytics/AI needs.",
      topics: ["Advanced SQL", "Data modeling", "ETL/ELT", "Batch + streaming", "Data quality + lineage"],
      tools: ["Airflow", "dbt", "Spark", "BigQuery"],
      projects: ["Mini warehouse", "Sales pipeline", "Realtime dashboard"],
      roles: ["Data engineer", "Analytics engineer", "Data platform engineer"]
    },
    "AI/ML Engineer": {
      overview: "AI/ML needs strong Python skills, data understanding, model training, and product deployment.",
      topics: ["Python + NumPy/Pandas", "Feature engineering", "Model training", "Evaluation", "Model serving"],
      tools: ["PyTorch", "TensorFlow", "MLflow", "LangChain"],
      projects: ["Text classifier", "Recommendation engine", "LLM assistant"],
      roles: ["ML engineer", "Applied AI engineer", "LLM engineer"]
    },
    "DevOps / Platform Engineer": {
      overview: "DevOps covers infrastructure, CI/CD, containers, cloud, and system observability.",
      topics: ["Linux + networking", "CI/CD", "Docker + Kubernetes", "IaC", "Monitoring + incident response"],
      tools: ["GitHub Actions", "Terraform", "Kubernetes", "Prometheus + Grafana"],
      projects: ["Deploy pipeline", "Blue/green rollout", "Observability stack"],
      roles: ["DevOps engineer", "Platform engineer", "SRE"]
    },
    "Cyber Security": {
      overview: "Security should start early so you can find, prevent, and respond to incidents effectively.",
      topics: ["OWASP Top 10", "Threat modeling", "Secure SDLC", "SIEM + IR", "Zero Trust"],
      tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Splunk"],
      projects: ["Web app audit", "Security pipeline", "Incident runbook"],
      roles: ["AppSec", "Security engineer", "SOC analyst"]
    }
  }
};

function buildThirtyDayRoadmap(blocks) {
  return blocks.flatMap((block, blockIndex) =>
    block.tasks.map((task, taskIndex) => "Ngày " + String(blockIndex * 6 + taskIndex + 1) + ": " + task)
  );
}

function buildRoadmapWeeks(blocks) {
  return blocks.map((block, index) => ({
    title: block.week,
    startDay: index * 6 + 1,
    endDay: index * 6 + 6,
    tasks: block.tasks
  }));
}

const trackRoadmapBlocks = {
  vi: {
    "Frontend Engineer": [
      { week: "Tuần 1", tasks: ["Setup môi trường", "Nắm semantic HTML", "Làm layout responsive", "Học box model", "Luyện devtools", "Ghi chú kiến thức"] },
      { week: "Tuần 2", tasks: ["Học DOM", "Bắt sự kiện", "Fetch API", "Async/await", "Xử lý lỗi", "Mini widget"] },
      { week: "Tuần 3", tasks: ["Học component", "State/props", "Routing", "Form validation", "Tách module", "Refactor"] },
      { week: "Tuần 4", tasks: ["Accessibility audit", "Performance audit", "Code splitting", "Testing", "Fix bug", "Tối ưu UI"] },
      { week: "Tuần 5", tasks: ["Làm dashboard", "Thêm auth", "Deploy app", "Viết README", "Tạo case study", "Tổng kết"] }
    ],
    "Backend Engineer": [
      { week: "Tuần 1", tasks: ["Setup backend", "HTTP + REST", "Status code", "Input validation", "JSON schema", "Mini API"] },
      { week: "Tuần 2", tasks: ["Thiết kế DB", "SQL join", "Transaction", "Index cơ bản", "Cache nhập môn", "Auth basics"] },
      { week: "Tuần 3", tasks: ["Tách layer", "Service logic", "Logging", "Error handling", "Pagination", "Rate limit"] },
      { week: "Tuần 4", tasks: ["Testing API", "OpenAPI docs", "Queue basics", "Monitoring", "Refactor", "Deploy"] },
      { week: "Tuần 5", tasks: ["Blog API", "Order service", "Auth service", "Observability", "Case study", "Tổng kết"] }
    ],
    "Mobile Engineer": [
      { week: "Tuần 1", tasks: ["Setup Android/iOS", "App lifecycle", "Widget/View basics", "Navigation", "Local storage", "Mini screen"] },
      { week: "Tuần 2", tasks: ["State management", "Offline sync", "Networking", "API service", "Loading/error", "Reusable component"] },
      { week: "Tuần 3", tasks: ["Push notification", "Forms", "Media", "Architecture", "Code organization", "Refactor"] },
      { week: "Tuần 4", tasks: ["Testing", "Performance", "Crash handling", "Release build", "Analytics", "Bug fix"] },
      { week: "Tuần 5", tasks: ["To-do app", "Expense tracker", "Chat app", "Publish app", "README", "Tổng kết"] }
    ],
    "Data Engineer": [
      { week: "Tuần 1", tasks: ["SQL nâng cao", "SELECT/JOIN", "CTE", "Window function", "Query tuning", "Mini dataset"] },
      { week: "Tuần 2", tasks: ["Data modeling", "Star schema", "ETL basics", "ELT basics", "Data quality", "Lineage"] },
      { week: "Tuần 3", tasks: ["Airflow/dbt", "Scheduling", "Batch pipeline", "Streaming intro", "Monitoring", "Retry logic"] },
      { week: "Tuần 4", tasks: ["Spark basics", "Partitioning", "Cost optimization", "Testing data", "Alerting", "Refactor pipeline"] },
      { week: "Tuần 5", tasks: ["Mini warehouse", "Sales pipeline", "Realtime dashboard", "Documentation", "Case study", "Tổng kết"] }
    ],
    "AI/ML Engineer": [
      { week: "Tuần 1", tasks: ["Python + notebook", "NumPy/Pandas", "Data cleaning", "Feature exploration", "Metrics", "Mini experiment"] },
      { week: "Tuần 2", tasks: ["Model training", "Train/val split", "Evaluation", "Overfitting", "Hyperparameter", "Error analysis"] },
      { week: "Tuần 3", tasks: ["Feature engineering", "Pipeline build", "Model serving", "FastAPI endpoint", "Logging", "Versioning"] },
      { week: "Tuần 4", tasks: ["Prompt design", "LLM evaluation", "RAG basics", "Cost control", "Monitoring", "Safety"] },
      { week: "Tuần 5", tasks: ["Text classifier", "Recommendation engine", "LLM assistant", "Deploy", "README", "Tổng kết"] }
    ],
    "DevOps / Platform Engineer": [
      { week: "Tuần 1", tasks: ["Linux basics", "Networking", "Shell basics", "Process/port", "DNS/HTTP", "Mini script"] },
      { week: "Tuần 2", tasks: ["Docker", "Compose", "CI basics", "GitHub Actions", "Secrets", "Build pipeline"] },
      { week: "Tuần 3", tasks: ["Terraform", "IaC", "Kubernetes basics", "Helm", "Deploy app", "Rollout"] },
      { week: "Tuần 4", tasks: ["Monitoring", "Prometheus", "Grafana", "Alerting", "Incident response", "Log analysis"] },
      { week: "Tuần 5", tasks: ["Deploy pipeline", "Blue/green rollout", "Observability stack", "Runbook", "Case study", "Tổng kết"] }
    ],
    "Cyber Security": [
      { week: "Tuần 1", tasks: ["Security basics", "OWASP Top 10", "Auth basics", "Input validation", "Threat basics", "Lab setup"] },
      { week: "Tuần 2", tasks: ["Burp Suite", "OWASP ZAP", "XSS/CSRF", "SQL injection", "Vuln triage", "Report writing"] },
      { week: "Tuần 3", tasks: ["Secure SDLC", "SAST/DAST", "Dependency scan", "Secrets scan", "Hardening", "CI policy"] },
      { week: "Tuần 4", tasks: ["SIEM basics", "Incident response", "Log analysis", "Alert tuning", "Zero Trust", "Playbook"] },
      { week: "Tuần 5", tasks: ["Web app audit", "Security pipeline", "Incident runbook", "Postmortem", "Case study", "Tổng kết"] }
    ]
  },
  en: {
    "Frontend Engineer": [
      { week: "Week 1", tasks: ["Set up environment", "Learn semantic HTML", "Build responsive layout", "Study box model", "Practice DevTools", "Take notes"] },
      { week: "Week 2", tasks: ["Learn DOM", "Handle events", "Fetch API", "Async/await", "Error handling", "Mini widget"] },
      { week: "Week 3", tasks: ["Learn components", "State/props", "Routing", "Form validation", "Split modules", "Refactor"] },
      { week: "Week 4", tasks: ["Accessibility audit", "Performance audit", "Code splitting", "Testing", "Fix bugs", "Optimize UI"] },
      { week: "Week 5", tasks: ["Build dashboard", "Add auth", "Deploy app", "Write README", "Case study", "Review"] }
    ],
    "Backend Engineer": [
      { week: "Week 1", tasks: ["Set up backend", "HTTP + REST", "Status codes", "Input validation", "JSON schema", "Mini API"] },
      { week: "Week 2", tasks: ["Design DB", "SQL joins", "Transactions", "Index basics", "Cache basics", "Auth basics"] },
      { week: "Week 3", tasks: ["Split layers", "Service logic", "Logging", "Error handling", "Pagination", "Rate limiting"] },
      { week: "Week 4", tasks: ["Test API", "OpenAPI docs", "Queue basics", "Monitoring", "Refactor", "Deploy"] },
      { week: "Week 5", tasks: ["Blog API", "Order service", "Auth service", "Observability", "Case study", "Review"] }
    ],
    "Mobile Engineer": [
      { week: "Week 1", tasks: ["Set up Android/iOS", "App lifecycle", "Widget/View basics", "Navigation", "Local storage", "Mini screen"] },
      { week: "Week 2", tasks: ["State management", "Offline sync", "Networking", "API service", "Loading/error", "Reusable components"] },
      { week: "Week 3", tasks: ["Push notifications", "Forms", "Media", "Architecture", "Code organization", "Refactor"] },
      { week: "Week 4", tasks: ["Testing", "Performance", "Crash handling", "Release build", "Analytics", "Bug fix"] },
      { week: "Week 5", tasks: ["To-do app", "Expense tracker", "Chat app", "Publish app", "README", "Review"] }
    ],
    "Data Engineer": [
      { week: "Week 1", tasks: ["Advanced SQL", "SELECT/JOIN", "CTE", "Window functions", "Query tuning", "Mini dataset"] },
      { week: "Week 2", tasks: ["Data modeling", "Star schema", "ETL basics", "ELT basics", "Data quality", "Lineage"] },
      { week: "Week 3", tasks: ["Airflow/dbt", "Scheduling", "Batch pipeline", "Streaming intro", "Monitoring", "Retries"] },
      { week: "Week 4", tasks: ["Spark basics", "Partitioning", "Cost optimization", "Data testing", "Alerting", "Refactor"] },
      { week: "Week 5", tasks: ["Mini warehouse", "Sales pipeline", "Realtime dashboard", "Docs", "Case study", "Review"] }
    ],
    "AI/ML Engineer": [
      { week: "Week 1", tasks: ["Python + notebook", "NumPy/Pandas", "Data cleaning", "Feature exploration", "Metrics", "Mini experiment"] },
      { week: "Week 2", tasks: ["Model training", "Train/val split", "Evaluation", "Overfitting", "Hyperparameters", "Error analysis"] },
      { week: "Week 3", tasks: ["Feature engineering", "Pipeline build", "Model serving", "FastAPI endpoint", "Logging", "Versioning"] },
      { week: "Week 4", tasks: ["Prompt design", "LLM evaluation", "RAG basics", "Cost control", "Monitoring", "Safety"] },
      { week: "Week 5", tasks: ["Text classifier", "Recommendation engine", "LLM assistant", "Deploy", "README", "Review"] }
    ],
    "DevOps / Platform Engineer": [
      { week: "Week 1", tasks: ["Linux basics", "Networking", "Shell basics", "Process/port", "DNS/HTTP", "Mini script"] },
      { week: "Week 2", tasks: ["Docker", "Compose", "CI basics", "GitHub Actions", "Secrets", "Build pipeline"] },
      { week: "Week 3", tasks: ["Terraform", "IaC", "Kubernetes basics", "Helm", "Deploy app", "Rollout"] },
      { week: "Week 4", tasks: ["Monitoring", "Prometheus", "Grafana", "Alerting", "Incident response", "Log analysis"] },
      { week: "Week 5", tasks: ["Deploy pipeline", "Blue/green rollout", "Observability stack", "Runbook", "Case study", "Review"] }
    ],
    "Cyber Security": [
      { week: "Week 1", tasks: ["Security basics", "OWASP Top 10", "Auth basics", "Input validation", "Threat basics", "Lab setup"] },
      { week: "Week 2", tasks: ["Burp Suite", "OWASP ZAP", "XSS/CSRF", "SQL injection", "Vuln triage", "Report writing"] },
      { week: "Week 3", tasks: ["Secure SDLC", "SAST/DAST", "Dependency scan", "Secrets scan", "Hardening", "CI policy"] },
      { week: "Week 4", tasks: ["SIEM basics", "Incident response", "Log analysis", "Alert tuning", "Zero Trust", "Playbook"] },
      { week: "Week 5", tasks: ["Web app audit", "Security pipeline", "Incident runbook", "Postmortem", "Case study", "Review"] }
    ]
  }
};

const trackInterviewQuestions = {
  vi: {
    "Frontend Engineer": ["DOM diff là gì?", "Khi nào dùng memoization?", "CSR khác SSR ở đâu?", "Cách tối ưu render?", "Làm sao cải thiện accessibility?"],
    "Backend Engineer": ["Transaction khác gì session?", "Index dùng khi nào?", "Rate limit thiết kế ra sao?", "Idempotency nghĩa là gì?", "Bạn đo performance API thế nào?"],
    "Mobile Engineer": ["State quản lý thế nào?", "Làm sao xử lý offline sync?", "App crash được debug ra sao?", "Push notification hoạt động thế nào?", "Tối ưu pin trên mobile thế nào?"],
    "Data Engineer": ["Data warehouse khác data lake thế nào?", "ETL vs ELT?", "Partition chiến lược ra sao?", "Lineage quan trọng thế nào?", "Bạn đánh giá chất lượng dữ liệu bằng gì?"],
    "AI/ML Engineer": ["Overfitting là gì?", "Feature engineering là gì?", "Train/validation split vì sao cần?", "Model serving khác training thế nào?", "LLM evaluation đo bằng gì?"],
    "DevOps / Platform Engineer": ["CI/CD pipeline gồm gì?", "Terraform dùng để làm gì?", "Kubernetes service khác ingress thế nào?", "SLO và error budget là gì?", "Xử lý incident thế nào?"],
    "Cyber Security": ["OWASP Top 10 gồm gì?", "XSS khác CSRF thế nào?", "Threat modeling là gì?", "Bạn dùng Burp Suite để làm gì?", "Zero Trust là gì?"]
  },
  en: {
    "Frontend Engineer": ["What is DOM diffing?", "When do you use memoization?", "How is CSR different from SSR?", "How do you optimize rendering?", "How do you improve accessibility?"],
    "Backend Engineer": ["How is a transaction different from a session?", "When do you use an index?", "How do you design rate limiting?", "What does idempotency mean?", "How do you measure API performance?"],
    "Mobile Engineer": ["How do you manage state?", "How do you handle offline sync?", "How do you debug crashes?", "How does push notification work?", "How do you optimize battery usage?"],
    "Data Engineer": ["How is a data warehouse different from a data lake?", "ETL vs ELT?", "How do you choose partition strategy?", "Why is lineage important?", "How do you measure data quality?"],
    "AI/ML Engineer": ["What is overfitting?", "What is feature engineering?", "Why do we need train/validation split?", "How is model serving different from training?", "How do you evaluate an LLM?"],
    "DevOps / Platform Engineer": ["What does a CI/CD pipeline include?", "What is Terraform used for?", "How is a Kubernetes service different from an ingress?", "What are SLO and error budget?", "How do you handle incidents?"],
    "Cyber Security": ["What is in OWASP Top 10?", "How is XSS different from CSRF?", "What is threat modeling?", "What do you use Burp Suite for?", "What is Zero Trust?"]
  }
};

const trackLevelDetails = {
  vi: {
    "Frontend Engineer": [
      { stage: "Beginner", focus: "HTML/CSS/JS nền tảng", mustKnow: ["Semantic HTML", "Flex/Grid"], tools: ["VS Code", "Chrome DevTools"], project: "Landing page" },
      { stage: "Junior", focus: "Component + API integration", mustKnow: ["React/Vue lifecycle", "Form validation"], tools: ["Playwright", "Lighthouse"], project: "Dashboard" },
      { stage: "Middle", focus: "Architecture + performance", mustKnow: ["SSR/SSG", "State management"], tools: ["Web Vitals", "Storybook"], project: "Monorepo FE" },
      { stage: "Senior", focus: "Tech leadership + design system", mustKnow: ["Design system governance", "Performance budget"], tools: ["Figma", "Observability"], project: "Large migration" }
    ],
    "Backend Engineer": [
      { stage: "Beginner", focus: "HTTP + SQL cơ bản", mustKnow: ["REST conventions", "Input validation"], tools: ["Postman", "MySQL/PostgreSQL"], project: "Blog API" },
      { stage: "Junior", focus: "Service production-ready", mustKnow: ["RBAC", "Redis"], tools: ["Docker", "OpenAPI"], project: "Order service" },
      { stage: "Middle", focus: "Scale + reliability", mustKnow: ["Tracing", "SLO/SLA"], tools: ["OpenTelemetry", "Prometheus"], project: "Gateway split" },
      { stage: "Senior", focus: "Architecture strategy", mustKnow: ["Domain modeling", "Capacity planning"], tools: ["Kubernetes", "Cloud metrics"], project: "Platform auth" }
    ],
    "Mobile Engineer": [
      { stage: "Beginner", focus: "App lifecycle + UI basics", mustKnow: ["Navigation", "Layout"], tools: ["Android Studio", "Xcode"], project: "To-do app" },
      { stage: "Junior", focus: "State + API integration", mustKnow: ["Offline sync", "Error handling"], tools: ["Firebase", "DevTools"], project: "Expense tracker" },
      { stage: "Middle", focus: "Architecture + testing", mustKnow: ["Dependency injection", "Testing"], tools: ["Fastlane", "Crashlytics"], project: "Chat app" },
      { stage: "Senior", focus: "Performance + release strategy", mustKnow: ["Release management", "Performance budget"], tools: ["Analytics", "Monitoring"], project: "Scaled mobile product" }
    ],
    "Data Engineer": [
      { stage: "Beginner", focus: "SQL + ETL nền tảng", mustKnow: ["JOIN", "CTE"], tools: ["DBeaver", "dbt"], project: "Mini warehouse" },
      { stage: "Junior", focus: "Warehouse modeling", mustKnow: ["Partitioning", "Star schema"], tools: ["Airflow", "BigQuery"], project: "Sales pipeline" },
      { stage: "Middle", focus: "Streaming + observability", mustKnow: ["Kafka", "Data contracts"], tools: ["Spark", "Monitoring"], project: "Realtime dashboard" },
      { stage: "Senior", focus: "Governance + cost", mustKnow: ["Data mesh", "Cost optimization"], tools: ["Lineage", "Policy checks"], project: "Unified data platform" }
    ],
    "AI/ML Engineer": [
      { stage: "Beginner", focus: "Python + data analysis", mustKnow: ["NumPy/Pandas", "Metrics"], tools: ["Jupyter", "PyTorch"], project: "Text classifier" },
      { stage: "Junior", focus: "Training pipeline", mustKnow: ["Feature engineering", "Evaluation"], tools: ["MLflow", "TensorFlow"], project: "Recommendation engine" },
      { stage: "Middle", focus: "Serving + monitoring", mustKnow: ["Model serving", "Error analysis"], tools: ["FastAPI", "Observability"], project: "LLM assistant" },
      { stage: "Senior", focus: "AI strategy", mustKnow: ["RAG", "Cost control"], tools: ["LangChain", "Model registry"], project: "Production AI platform" }
    ],
    "DevOps / Platform Engineer": [
      { stage: "Beginner", focus: "Linux + networking", mustKnow: ["Process", "Ports"], tools: ["bash", "ssh"], project: "Dockerized app deployment" },
      { stage: "Junior", focus: "CI/CD + IaC", mustKnow: ["GitHub Actions", "Terraform"], tools: ["Docker", "terraform"], project: "Build-test-deploy pipeline" },
      { stage: "Middle", focus: "Kubernetes + observability", mustKnow: ["Helm", "Prometheus"], tools: ["kubectl", "Grafana"], project: "Blue/green rollout" },
      { stage: "Senior", focus: "Reliability strategy", mustKnow: ["SLO/Error budget", "Incident response"], tools: ["Runbooks", "Multi-region"], project: "Multi-region architecture" }
    ],
    "Cyber Security": [
      { stage: "Beginner", focus: "Security fundamentals", mustKnow: ["OWASP Top 10", "Auth basics"], tools: ["Nmap", "OWASP ZAP"], project: "Mini web app audit" },
      { stage: "Junior", focus: "AppSec workflow", mustKnow: ["SAST/DAST", "Dependency scanning"], tools: ["Burp Suite", "CI scanning"], project: "Secure CI pipeline" },
      { stage: "Middle", focus: "Detection + response", mustKnow: ["SIEM", "Incident triage"], tools: ["Splunk", "Alerting"], project: "Incident response runbook" },
      { stage: "Senior", focus: "Security architecture", mustKnow: ["Zero Trust", "Threat modeling"], tools: ["Policy engine", "Audit logs"], project: "Org-wide security baseline" }
    ]
  },
  en: {
    "Frontend Engineer": [
      { stage: "Beginner", focus: "HTML/CSS/JS fundamentals", mustKnow: ["Semantic HTML", "Flex/Grid"], tools: ["VS Code", "Chrome DevTools"], project: "Landing page" },
      { stage: "Junior", focus: "Component + API integration", mustKnow: ["React/Vue lifecycle", "Form validation"], tools: ["Playwright", "Lighthouse"], project: "Dashboard" },
      { stage: "Middle", focus: "Architecture + performance", mustKnow: ["SSR/SSG", "State management"], tools: ["Web Vitals", "Storybook"], project: "FE monorepo" },
      { stage: "Senior", focus: "Tech leadership + design system", mustKnow: ["Design system governance", "Performance budget"], tools: ["Figma", "Observability"], project: "Large migration" }
    ],
    "Backend Engineer": [
      { stage: "Beginner", focus: "HTTP + SQL basics", mustKnow: ["REST conventions", "Input validation"], tools: ["Postman", "MySQL/PostgreSQL"], project: "Blog API" },
      { stage: "Junior", focus: "Production-ready service", mustKnow: ["RBAC", "Redis"], tools: ["Docker", "OpenAPI"], project: "Order service" },
      { stage: "Middle", focus: "Scale + reliability", mustKnow: ["Tracing", "SLO/SLA"], tools: ["OpenTelemetry", "Prometheus"], project: "Gateway split" },
      { stage: "Senior", focus: "Architecture strategy", mustKnow: ["Domain modeling", "Capacity planning"], tools: ["Kubernetes", "Cloud metrics"], project: "Platform auth" }
    ],
    "Mobile Engineer": [
      { stage: "Beginner", focus: "App lifecycle + UI basics", mustKnow: ["Navigation", "Layout"], tools: ["Android Studio", "Xcode"], project: "To-do app" },
      { stage: "Junior", focus: "State + API integration", mustKnow: ["Offline sync", "Error handling"], tools: ["Firebase", "DevTools"], project: "Expense tracker" },
      { stage: "Middle", focus: "Architecture + testing", mustKnow: ["Dependency injection", "Testing"], tools: ["Fastlane", "Crashlytics"], project: "Chat app" },
      { stage: "Senior", focus: "Performance + release strategy", mustKnow: ["Release management", "Performance budget"], tools: ["Analytics", "Monitoring"], project: "Scaled mobile product" }
    ],
    "Data Engineer": [
      { stage: "Beginner", focus: "SQL + ETL basics", mustKnow: ["JOIN", "CTE"], tools: ["DBeaver", "dbt"], project: "Mini warehouse" },
      { stage: "Junior", focus: "Warehouse modeling", mustKnow: ["Partitioning", "Star schema"], tools: ["Airflow", "BigQuery"], project: "Sales pipeline" },
      { stage: "Middle", focus: "Streaming + observability", mustKnow: ["Kafka", "Data contracts"], tools: ["Spark", "Monitoring"], project: "Realtime dashboard" },
      { stage: "Senior", focus: "Governance + cost", mustKnow: ["Data mesh", "Cost optimization"], tools: ["Lineage", "Policy checks"], project: "Unified data platform" }
    ],
    "AI/ML Engineer": [
      { stage: "Beginner", focus: "Python + data analysis", mustKnow: ["NumPy/Pandas", "Metrics"], tools: ["Jupyter", "PyTorch"], project: "Text classifier" },
      { stage: "Junior", focus: "Training pipeline", mustKnow: ["Feature engineering", "Evaluation"], tools: ["MLflow", "TensorFlow"], project: "Recommendation engine" },
      { stage: "Middle", focus: "Serving + monitoring", mustKnow: ["Model serving", "Error analysis"], tools: ["FastAPI", "Observability"], project: "LLM assistant" },
      { stage: "Senior", focus: "AI strategy", mustKnow: ["RAG", "Cost control"], tools: ["LangChain", "Model registry"], project: "Production AI platform" }
    ],
    "DevOps / Platform Engineer": [
      { stage: "Beginner", focus: "Linux + networking", mustKnow: ["Processes", "Ports"], tools: ["bash", "ssh"], project: "Dockerized app deployment" },
      { stage: "Junior", focus: "CI/CD + IaC", mustKnow: ["GitHub Actions", "Terraform"], tools: ["Docker", "terraform"], project: "Build-test-deploy pipeline" },
      { stage: "Middle", focus: "Kubernetes + observability", mustKnow: ["Helm", "Prometheus"], tools: ["kubectl", "Grafana"], project: "Blue/green rollout" },
      { stage: "Senior", focus: "Reliability strategy", mustKnow: ["SLO/Error budget", "Incident response"], tools: ["Runbooks", "Multi-region"], project: "Multi-region architecture" }
    ],
    "Cyber Security": [
      { stage: "Beginner", focus: "Security fundamentals", mustKnow: ["OWASP Top 10", "Auth basics"], tools: ["Nmap", "OWASP ZAP"], project: "Mini web app audit" },
      { stage: "Junior", focus: "AppSec workflow", mustKnow: ["SAST/DAST", "Dependency scanning"], tools: ["Burp Suite", "CI scanning"], project: "Secure CI pipeline" },
      { stage: "Middle", focus: "Detection + response", mustKnow: ["SIEM", "Incident triage"], tools: ["Splunk", "Alerting"], project: "Incident response runbook" },
      { stage: "Senior", focus: "Security architecture", mustKnow: ["Zero Trust", "Threat modeling"], tools: ["Policy engine", "Audit logs"], project: "Org-wide security baseline" }
    ]
  }
};

Object.keys(trackDeepDetails).forEach((lang) => {
  Object.keys(trackDeepDetails[lang]).forEach((trackName) => {
    const blocks = trackRoadmapBlocks[lang][trackName];
    trackDeepDetails[lang][trackName].roadmap30 = buildThirtyDayRoadmap(blocks);
    trackDeepDetails[lang][trackName].roadmapWeeks = buildRoadmapWeeks(blocks);
    trackDeepDetails[lang][trackName].interviewQuestions = trackInterviewQuestions[lang][trackName];
    trackDeepDetails[lang][trackName].levels = trackLevelDetails[lang][trackName];
  });
});

const resourceLinks = {
  vi: [
    {
      title: "Công cụ học tập",
      items: [
        { label: "Roadmap.sh", url: "https://roadmap.sh" },
        { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { label: "freeCodeCamp", url: "https://www.freecodecamp.org" },
        { label: "Microsoft Learn", url: "https://learn.microsoft.com" }
      ]
    },
    {
      title: "Công cụ làm việc",
      items: [
        { label: "VS Code", url: "https://code.visualstudio.com" },
        { label: "Docker Docs", url: "https://docs.docker.com" },
        { label: "GitHub Actions", url: "https://docs.github.com/actions" },
        { label: "Postman Learning Center", url: "https://learning.postman.com" }
      ]
    },
    {
      title: "Cộng đồng",
      items: [
        { label: "GitHub", url: "https://github.com" },
        { label: "Stack Overflow", url: "https://stackoverflow.com" },
        { label: "Dev.to", url: "https://dev.to" },
        { label: "Hashnode", url: "https://hashnode.com" }
      ]
    }
  ],
  en: [
    {
      title: "Learning tools",
      items: [
        { label: "Roadmap.sh", url: "https://roadmap.sh" },
        { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { label: "freeCodeCamp", url: "https://www.freecodecamp.org" },
        { label: "Microsoft Learn", url: "https://learn.microsoft.com" }
      ]
    },
    {
      title: "Work tools",
      items: [
        { label: "VS Code", url: "https://code.visualstudio.com" },
        { label: "Docker Docs", url: "https://docs.docker.com" },
        { label: "GitHub Actions", url: "https://docs.github.com/actions" },
        { label: "Postman Learning Center", url: "https://learning.postman.com" }
      ]
    },
    {
      title: "Community",
      items: [
        { label: "GitHub", url: "https://github.com" },
        { label: "Stack Overflow", url: "https://stackoverflow.com" },
        { label: "Dev.to", url: "https://dev.to" },
        { label: "Hashnode", url: "https://hashnode.com" }
      ]
    }
  ]
};

const languageGuide = {
  vi: [
    {
      name: "JavaScript",
      install: "Cài Node.js LTS, kiểm tra node -v và npm -v.",
      useCases: ["Web frontend", "Node.js backend", "Script tự động hóa"],
      learnPath: ["ES6+", "DOM + Browser API", "Async/Await + Promise", "Module + Bundler"],
      tooling: ["Node.js", "npm/pnpm", "ESLint", "Prettier", "Vite"],
      frameworks: ["React", "Next.js", "Vue", "Nuxt", "Express"],
      firstProject: "Todo fullstack có auth và deploy",
      links: [
        { label: "Node.js", url: "https://nodejs.org" },
        { label: "MDN JavaScript", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
        { label: "JavaScript.info", url: "https://javascript.info" }
      ]
    },
    {
      name: "TypeScript",
      install: "Dùng npm i -g typescript hoặc npx tsc.",
      useCases: ["Ứng dụng web lớn", "API service", "SDK nội bộ"],
      learnPath: ["Type cơ bản", "Generic", "Union/Intersection", "Runtime schema validation"],
      tooling: ["tsc", "tsx", "typescript-eslint", "zod"],
      frameworks: ["Next.js", "NestJS", "Angular", "tRPC"],
      firstProject: "REST API type-safe + OpenAPI",
      links: [
        { label: "TypeScript Docs", url: "https://www.typescriptlang.org/docs" },
        { label: "Type Challenges", url: "https://github.com/type-challenges/type-challenges" }
      ]
    },
    {
      name: "Python",
      install: "Cài Python 3.12+, tạo môi trường bằng python -m venv .venv.",
      useCases: ["AI/ML", "Data engineering", "Automation", "Web API"],
      learnPath: ["Syntax + OOP", "Môi trường + package", "Testing", "Web framework"],
      tooling: ["pip", "uv hoặc poetry", "pytest", "ruff", "mypy"],
      frameworks: ["FastAPI", "Django", "Flask", "Pydantic"],
      firstProject: "FastAPI service phân loại văn bản",
      links: [
        { label: "Python Docs", url: "https://docs.python.org/3" },
        { label: "FastAPI", url: "https://fastapi.tiangolo.com" }
      ]
    },
    {
      name: "Java",
      install: "Cài JDK 21 LTS, kiểm tra bằng java -version.",
      useCases: ["Backend doanh nghiệp", "Hệ thống xử lý tải cao"],
      learnPath: ["Core Java", "Collections", "Concurrency", "Spring Boot"],
      tooling: ["Maven", "Gradle", "JUnit", "Testcontainers"],
      frameworks: ["Spring Boot", "Quarkus", "Micronaut"],
      firstProject: "Inventory service có cache Redis",
      links: [
        { label: "OpenJDK", url: "https://openjdk.org" },
        { label: "Spring Guides", url: "https://spring.io/guides" }
      ]
    },
    {
      name: "C#",
      install: "Cài .NET SDK LTS, kiểm tra bằng dotnet --info.",
      useCases: ["Web API", "Desktop app", "Cloud service"],
      learnPath: ["C# cơ bản", "LINQ", "ASP.NET Core", "Entity Framework Core"],
      tooling: ["dotnet CLI", "xUnit", "EF Core", "Serilog"],
      frameworks: ["ASP.NET Core", "Blazor", "Minimal API"],
      firstProject: "Task management API có JWT",
      links: [
        { label: ".NET Docs", url: "https://learn.microsoft.com/dotnet" },
        { label: "ASP.NET Core", url: "https://learn.microsoft.com/aspnet/core" }
      ]
    },
    {
      name: "Go",
      install: "Cài Go từ go.dev, kiểm tra bằng go version.",
      useCases: ["Microservice", "CLI", "Cloud infrastructure"],
      learnPath: ["Struct/Interface", "Error handling", "Goroutine + Channel", "Context"],
      tooling: ["go test", "go fmt", "go vet", "golangci-lint"],
      frameworks: ["Gin", "Fiber", "Echo", "gRPC"],
      firstProject: "URL shortener với rate limit",
      links: [
        { label: "Go", url: "https://go.dev" },
        { label: "Go by Example", url: "https://gobyexample.com" }
      ]
    },
    {
      name: "Rust",
      install: "Cài rustup, kiểm tra rustc -V và cargo -V.",
      useCases: ["System programming", "Service hiệu năng cao", "CLI"],
      learnPath: ["Ownership", "Borrowing", "Result/Option", "Async"],
      tooling: ["cargo", "clippy", "rustfmt", "cargo nextest"],
      frameworks: ["Axum", "Actix Web", "Tokio"],
      firstProject: "CLI tìm kiếm file đa luồng",
      links: [
        { label: "The Rust Book", url: "https://doc.rust-lang.org/book" },
        { label: "Rustlings", url: "https://github.com/rust-lang/rustlings" }
      ]
    },
    {
      name: "PHP",
      install: "Cài PHP 8.3+ và Composer.",
      useCases: ["Web backend", "CMS", "E-commerce"],
      learnPath: ["PHP cơ bản", "OOP", "MVC", "REST API"],
      tooling: ["Composer", "PHPUnit", "PHPStan", "Pint"],
      frameworks: ["Laravel", "Symfony", "Slim"],
      firstProject: "Mini CMS có quản trị nội dung",
      links: [
        { label: "PHP", url: "https://www.php.net" },
        { label: "Laravel", url: "https://laravel.com/docs" }
      ]
    },
    {
      name: "Kotlin",
      install: "Cài JDK + IntelliJ IDEA hoặc Android Studio.",
      useCases: ["Android native", "JVM backend"],
      learnPath: ["Null safety", "Data class", "Coroutines", "Architecture"],
      tooling: ["Gradle", "Detekt", "Ktlint", "JUnit"],
      frameworks: ["Ktor", "Jetpack Compose", "Spring Boot"],
      firstProject: "Ứng dụng ghi chú Android đồng bộ offline",
      links: [
        { label: "Kotlin", url: "https://kotlinlang.org" },
        { label: "Android Dev", url: "https://developer.android.com" }
      ]
    },
    {
      name: "Swift",
      install: "Cài Xcode trên macOS, kiểm tra bằng xcodebuild -version.",
      useCases: ["iOS app", "macOS app"],
      learnPath: ["Swift fundamentals", "SwiftUI", "Networking", "Persistence"],
      tooling: ["Xcode", "XCTest", "Instruments", "Swift Package Manager"],
      frameworks: ["SwiftUI", "UIKit", "Combine"],
      firstProject: "Ứng dụng quản lý công việc với SwiftUI",
      links: [
        { label: "Swift", url: "https://www.swift.org" },
        { label: "Apple Developer", url: "https://developer.apple.com" }
      ]
    },
    {
      name: "Dart",
      install: "Cài Flutter SDK và chạy flutter doctor.",
      useCases: ["Ứng dụng đa nền tảng", "Flutter web"],
      learnPath: ["Dart core", "Widget tree", "State management", "Navigation"],
      tooling: ["Flutter CLI", "Dart analyzer", "DevTools", "Melos"],
      frameworks: ["Flutter", "Riverpod", "Bloc", "GoRouter"],
      firstProject: "Expense tracker có biểu đồ thống kê",
      links: [
        { label: "Flutter", url: "https://flutter.dev" },
        { label: "Dart", url: "https://dart.dev" }
      ]
    },
    {
      name: "SQL",
      install: "Cài PostgreSQL hoặc MySQL, dùng client như DBeaver hoặc DataGrip.",
      useCases: ["Truy vấn dữ liệu", "Lưu trữ backend", "Báo cáo BI"],
      learnPath: ["JOIN", "Aggregation", "Window function", "Index + Execution plan"],
      tooling: ["psql", "DBeaver", "dbt", "Metabase"],
      frameworks: ["PostgreSQL", "MySQL", "SQLite", "DuckDB"],
      firstProject: "Dashboard phân tích đơn hàng",
      links: [
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs" },
        { label: "SQLBolt", url: "https://sqlbolt.com" }
      ]
    },
    {
      name: "C",
      install: "Cài GCC/Clang và kiểm tra bằng gcc --version.",
      useCases: ["Lập trình hệ thống", "Embedded", "Tối ưu hiệu năng thấp tầng"],
      learnPath: ["Pointer + memory", "Struct + file I/O", "Build system", "Debug + profiling"],
      tooling: ["gcc/clang", "gdb", "valgrind", "cmake"],
      frameworks: ["POSIX", "FreeRTOS", "CMake"],
      firstProject: "CLI quản lý file có parser tham số",
      links: [
        { label: "Learn C", url: "https://www.learn-c.org" },
        { label: "GCC", url: "https://gcc.gnu.org" }
      ]
    },
    {
      name: "C++",
      install: "Cài compiler hỗ trợ C++20 (MSVC/Clang/GCC).",
      useCases: ["Game engine", "High-performance backend", "Native desktop"],
      learnPath: ["STL", "RAII", "Move semantics", "Concurrency"],
      tooling: ["CMake", "vcpkg", "gdb/lldb", "clang-tidy"],
      frameworks: ["Qt", "Boost", "gRPC"],
      firstProject: "Engine mini xử lý ảnh",
      links: [
        { label: "cppreference", url: "https://en.cppreference.com" },
        { label: "CMake", url: "https://cmake.org" }
      ]
    },
    {
      name: "Bash",
      install: "Dùng shell bash trên Linux/macOS hoặc Git Bash trên Windows.",
      useCases: ["Automation", "CI/CD script", "Server maintenance"],
      learnPath: ["Biến + quoting", "Pipe + redirection", "Function", "Error handling"],
      tooling: ["bash", "shellcheck", "awk", "sed"],
      frameworks: ["GNU Coreutils", "Bats", "Make"],
      firstProject: "Script backup log theo lịch",
      links: [
        { label: "Bash Guide", url: "https://mywiki.wooledge.org/BashGuide" },
        { label: "ShellCheck", url: "https://www.shellcheck.net" }
      ]
    },
    {
      name: "PowerShell",
      install: "Cài PowerShell 7+, kiểm tra pwsh --version.",
      useCases: ["Windows automation", "Cloud scripting", "DevOps tasks"],
      learnPath: ["Cmdlet pipeline", "Object processing", "Module", "Remoting"],
      tooling: ["pwsh", "PSScriptAnalyzer", "PSReadLine", "Azure CLI"],
      frameworks: ["PowerShell SDK", "Desired State Configuration", "Azure PowerShell"],
      firstProject: "Script deploy ứng dụng lên VM",
      links: [
        { label: "PowerShell Docs", url: "https://learn.microsoft.com/powershell" },
        { label: "PSScriptAnalyzer", url: "https://github.com/PowerShell/PSScriptAnalyzer" }
      ]
    },
    {
      name: "Ruby",
      install: "Cài Ruby 3.x và Bundler (gem install bundler).",
      useCases: ["Web backend", "Automation", "Scripting"],
      learnPath: ["Ruby core", "OOP", "Gem ecosystem", "Rails MVC"],
      tooling: ["rbenv/rvm", "bundler", "rspec", "rubocop"],
      frameworks: ["Ruby on Rails", "Sinatra", "Hanami"],
      firstProject: "API quản lý sách bằng Rails",
      links: [
        { label: "Ruby Docs", url: "https://www.ruby-lang.org/en/documentation" },
        { label: "Rails Guides", url: "https://guides.rubyonrails.org" }
      ]
    },
    {
      name: "Scala",
      install: "Cài JDK + sbt và Scala CLI.",
      useCases: ["Data platform", "Functional backend", "Streaming"],
      learnPath: ["FP basics", "Collections", "Akka/Pekko", "Typelevel ecosystem"],
      tooling: ["sbt", "scala-cli", "scalatest", "scalafmt"],
      frameworks: ["Play", "Akka", "http4s", "Spark"],
      firstProject: "Service event-driven với Scala",
      links: [
        { label: "Scala Docs", url: "https://docs.scala-lang.org" },
        { label: "Typelevel", url: "https://typelevel.org" }
      ]
    },
    {
      name: "R",
      install: "Cài R và RStudio.",
      useCases: ["Data analysis", "Statistics", "Visualization"],
      learnPath: ["Data frame", "dplyr", "ggplot2", "Modeling"],
      tooling: ["RStudio", "tidyverse", "renv", "shiny"],
      frameworks: ["Shiny", "tidyverse", "caret"],
      firstProject: "Dashboard phân tích dữ liệu bán hàng",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org" },
        { label: "R for Data Science", url: "https://r4ds.hadley.nz" }
      ]
    },
    {
      name: "Julia",
      install: "Cài Julia và package manager tích hợp.",
      useCases: ["Scientific computing", "Numerical optimization", "Data science"],
      learnPath: ["Multiple dispatch", "Arrays", "DataFrames", "Performance tuning"],
      tooling: ["Julia REPL", "Pkg", "Pluto", "BenchmarkTools"],
      frameworks: ["Flux", "DifferentialEquations", "Genie"],
      firstProject: "Mô phỏng tối ưu hóa logistic",
      links: [
        { label: "Julia Docs", url: "https://docs.julialang.org" },
        { label: "Julia Data Science", url: "https://juliadatascience.io" }
      ]
    },
    {
      name: "Elixir",
      install: "Cài Erlang/OTP + Elixir, kiểm tra elixir --version.",
      useCases: ["Realtime app", "Fault-tolerant systems", "Background jobs"],
      learnPath: ["Pattern matching", "OTP", "GenServer", "Phoenix"],
      tooling: ["mix", "iex", "credo", "dialyzer"],
      frameworks: ["Phoenix", "LiveView", "Ecto"],
      firstProject: "Chat realtime với Phoenix",
      links: [
        { label: "Elixir Lang", url: "https://elixir-lang.org" },
        { label: "Phoenix", url: "https://www.phoenixframework.org" }
      ]
    },
    {
      name: "Solidity",
      install: "Cài Node.js và bộ công cụ Hardhat hoặc Foundry.",
      useCases: ["Smart contract", "DeFi", "On-chain governance"],
      learnPath: ["EVM basics", "Contract security", "Testing", "Deployment"],
      tooling: ["Hardhat", "Foundry", "OpenZeppelin", "Slither"],
      frameworks: ["Hardhat", "Foundry", "OpenZeppelin"],
      firstProject: "ERC-20 token + vesting contract",
      links: [
        { label: "Solidity Docs", url: "https://docs.soliditylang.org" },
        { label: "OpenZeppelin", url: "https://docs.openzeppelin.com" }
      ]
    }
  ],
  en: [
    {
      name: "JavaScript",
      install: "Install Node.js LTS and verify with node -v and npm -v.",
      useCases: ["Web frontend", "Node.js backend", "Automation scripts"],
      learnPath: ["ES6+", "DOM + Browser API", "Async/Await + Promise", "Modules + Bundler"],
      tooling: ["Node.js", "npm/pnpm", "ESLint", "Prettier", "Vite"],
      frameworks: ["React", "Next.js", "Vue", "Nuxt", "Express"],
      firstProject: "Fullstack todo app with auth",
      links: [
        { label: "Node.js", url: "https://nodejs.org" },
        { label: "MDN JavaScript", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
        { label: "JavaScript.info", url: "https://javascript.info" }
      ]
    },
    {
      name: "TypeScript",
      install: "Install via npm i -g typescript or use npx tsc.",
      useCases: ["Large web apps", "API services", "Internal SDKs"],
      learnPath: ["Basic types", "Generics", "Union/Intersection", "Runtime schema validation"],
      tooling: ["tsc", "tsx", "typescript-eslint", "zod"],
      frameworks: ["Next.js", "NestJS", "Angular", "tRPC"],
      firstProject: "Type-safe REST API with OpenAPI",
      links: [
        { label: "TypeScript Docs", url: "https://www.typescriptlang.org/docs" },
        { label: "Type Challenges", url: "https://github.com/type-challenges/type-challenges" }
      ]
    },
    {
      name: "Python",
      install: "Install Python 3.12+ and create a virtual environment with python -m venv .venv.",
      useCases: ["AI/ML", "Data engineering", "Automation", "Web APIs"],
      learnPath: ["Syntax + OOP", "Environment + packages", "Testing", "Web frameworks"],
      tooling: ["pip", "uv or poetry", "pytest", "ruff", "mypy"],
      frameworks: ["FastAPI", "Django", "Flask", "Pydantic"],
      firstProject: "FastAPI text classification service",
      links: [
        { label: "Python Docs", url: "https://docs.python.org/3" },
        { label: "FastAPI", url: "https://fastapi.tiangolo.com" }
      ]
    },
    {
      name: "Java",
      install: "Install JDK 21 LTS and verify with java -version.",
      useCases: ["Enterprise backend", "High-throughput systems"],
      learnPath: ["Core Java", "Collections", "Concurrency", "Spring Boot"],
      tooling: ["Maven", "Gradle", "JUnit", "Testcontainers"],
      frameworks: ["Spring Boot", "Quarkus", "Micronaut"],
      firstProject: "Inventory service with Redis cache",
      links: [
        { label: "OpenJDK", url: "https://openjdk.org" },
        { label: "Spring Guides", url: "https://spring.io/guides" }
      ]
    },
    {
      name: "C#",
      install: "Install the latest .NET LTS SDK and verify with dotnet --info.",
      useCases: ["Web API", "Desktop apps", "Cloud services"],
      learnPath: ["C# fundamentals", "LINQ", "ASP.NET Core", "Entity Framework Core"],
      tooling: ["dotnet CLI", "xUnit", "EF Core", "Serilog"],
      frameworks: ["ASP.NET Core", "Blazor", "Minimal API"],
      firstProject: "Task management API with JWT",
      links: [
        { label: ".NET Docs", url: "https://learn.microsoft.com/dotnet" },
        { label: "ASP.NET Core", url: "https://learn.microsoft.com/aspnet/core" }
      ]
    },
    {
      name: "Go",
      install: "Install Go from go.dev and verify with go version.",
      useCases: ["Microservices", "CLI tools", "Cloud infrastructure"],
      learnPath: ["Struct/Interface", "Error handling", "Goroutines + Channels", "Context"],
      tooling: ["go test", "go fmt", "go vet", "golangci-lint"],
      frameworks: ["Gin", "Fiber", "Echo", "gRPC"],
      firstProject: "URL shortener with rate limiting",
      links: [
        { label: "Go", url: "https://go.dev" },
        { label: "Go by Example", url: "https://gobyexample.com" }
      ]
    },
    {
      name: "Rust",
      install: "Install rustup and verify with rustc -V and cargo -V.",
      useCases: ["Systems programming", "High-performance services", "CLI tools"],
      learnPath: ["Ownership", "Borrowing", "Result/Option", "Async"],
      tooling: ["cargo", "clippy", "rustfmt", "cargo nextest"],
      frameworks: ["Axum", "Actix Web", "Tokio"],
      firstProject: "Multithreaded file search CLI",
      links: [
        { label: "The Rust Book", url: "https://doc.rust-lang.org/book" },
        { label: "Rustlings", url: "https://github.com/rust-lang/rustlings" }
      ]
    },
    {
      name: "PHP",
      install: "Install PHP 8.3+ and Composer.",
      useCases: ["Web backend", "CMS", "E-commerce"],
      learnPath: ["PHP basics", "OOP", "MVC", "REST APIs"],
      tooling: ["Composer", "PHPUnit", "PHPStan", "Pint"],
      frameworks: ["Laravel", "Symfony", "Slim"],
      firstProject: "Mini CMS with admin panel",
      links: [
        { label: "PHP", url: "https://www.php.net" },
        { label: "Laravel", url: "https://laravel.com/docs" }
      ]
    },
    {
      name: "Kotlin",
      install: "Install JDK with IntelliJ IDEA or Android Studio.",
      useCases: ["Android native", "JVM backend"],
      learnPath: ["Null safety", "Data classes", "Coroutines", "Architecture"],
      tooling: ["Gradle", "Detekt", "Ktlint", "JUnit"],
      frameworks: ["Ktor", "Jetpack Compose", "Spring Boot"],
      firstProject: "Offline-first Android notes app",
      links: [
        { label: "Kotlin", url: "https://kotlinlang.org" },
        { label: "Android Dev", url: "https://developer.android.com" }
      ]
    },
    {
      name: "Swift",
      install: "Install Xcode on macOS and verify with xcodebuild -version.",
      useCases: ["iOS apps", "macOS apps"],
      learnPath: ["Swift fundamentals", "SwiftUI", "Networking", "Persistence"],
      tooling: ["Xcode", "XCTest", "Instruments", "Swift Package Manager"],
      frameworks: ["SwiftUI", "UIKit", "Combine"],
      firstProject: "Task planner built with SwiftUI",
      links: [
        { label: "Swift", url: "https://www.swift.org" },
        { label: "Apple Developer", url: "https://developer.apple.com" }
      ]
    },
    {
      name: "Dart",
      install: "Install Flutter SDK and run flutter doctor.",
      useCases: ["Cross-platform apps", "Flutter web"],
      learnPath: ["Dart core", "Widget tree", "State management", "Navigation"],
      tooling: ["Flutter CLI", "Dart analyzer", "DevTools", "Melos"],
      frameworks: ["Flutter", "Riverpod", "Bloc", "GoRouter"],
      firstProject: "Expense tracker with analytics charts",
      links: [
        { label: "Flutter", url: "https://flutter.dev" },
        { label: "Dart", url: "https://dart.dev" }
      ]
    },
    {
      name: "SQL",
      install: "Install PostgreSQL or MySQL and use DBeaver or DataGrip for querying.",
      useCases: ["Data querying", "Backend persistence", "BI reporting"],
      learnPath: ["JOIN", "Aggregation", "Window functions", "Index + Execution plans"],
      tooling: ["psql", "DBeaver", "dbt", "Metabase"],
      frameworks: ["PostgreSQL", "MySQL", "SQLite", "DuckDB"],
      firstProject: "Order analytics dashboard",
      links: [
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs" },
        { label: "SQLBolt", url: "https://sqlbolt.com" }
      ]
    },
    {
      name: "C",
      install: "Install GCC or Clang and verify with gcc --version.",
      useCases: ["Systems programming", "Embedded software", "Low-level optimization"],
      learnPath: ["Pointers + memory", "Structs + file I/O", "Build systems", "Debugging + profiling"],
      tooling: ["gcc/clang", "gdb", "valgrind", "cmake"],
      frameworks: ["POSIX", "FreeRTOS", "CMake"],
      firstProject: "CLI file manager with argument parser",
      links: [
        { label: "Learn C", url: "https://www.learn-c.org" },
        { label: "GCC", url: "https://gcc.gnu.org" }
      ]
    },
    {
      name: "C++",
      install: "Install a C++20-capable compiler (MSVC, Clang, or GCC).",
      useCases: ["Game engines", "High-performance backend", "Native desktop apps"],
      learnPath: ["STL", "RAII", "Move semantics", "Concurrency"],
      tooling: ["CMake", "vcpkg", "gdb/lldb", "clang-tidy"],
      frameworks: ["Qt", "Boost", "gRPC"],
      firstProject: "Mini image processing engine",
      links: [
        { label: "cppreference", url: "https://en.cppreference.com" },
        { label: "CMake", url: "https://cmake.org" }
      ]
    },
    {
      name: "Bash",
      install: "Use bash on Linux/macOS or Git Bash on Windows.",
      useCases: ["Automation", "CI/CD scripting", "Server maintenance"],
      learnPath: ["Variables + quoting", "Pipes + redirection", "Functions", "Error handling"],
      tooling: ["bash", "shellcheck", "awk", "sed"],
      frameworks: ["GNU Coreutils", "Bats", "Make"],
      firstProject: "Scheduled log backup script",
      links: [
        { label: "Bash Guide", url: "https://mywiki.wooledge.org/BashGuide" },
        { label: "ShellCheck", url: "https://www.shellcheck.net" }
      ]
    },
    {
      name: "PowerShell",
      install: "Install PowerShell 7+ and verify with pwsh --version.",
      useCases: ["Windows automation", "Cloud scripting", "DevOps tasks"],
      learnPath: ["Cmdlet pipelines", "Object processing", "Modules", "Remoting"],
      tooling: ["pwsh", "PSScriptAnalyzer", "PSReadLine", "Azure CLI"],
      frameworks: ["PowerShell SDK", "Desired State Configuration", "Azure PowerShell"],
      firstProject: "VM app deployment script",
      links: [
        { label: "PowerShell Docs", url: "https://learn.microsoft.com/powershell" },
        { label: "PSScriptAnalyzer", url: "https://github.com/PowerShell/PSScriptAnalyzer" }
      ]
    },
    {
      name: "Ruby",
      install: "Install Ruby 3.x and Bundler (gem install bundler).",
      useCases: ["Web backend", "Automation", "Scripting"],
      learnPath: ["Ruby core", "OOP", "Gem ecosystem", "Rails MVC"],
      tooling: ["rbenv/rvm", "bundler", "rspec", "rubocop"],
      frameworks: ["Ruby on Rails", "Sinatra", "Hanami"],
      firstProject: "Books API with Rails",
      links: [
        { label: "Ruby Docs", url: "https://www.ruby-lang.org/en/documentation" },
        { label: "Rails Guides", url: "https://guides.rubyonrails.org" }
      ]
    },
    {
      name: "Scala",
      install: "Install JDK, sbt, and Scala CLI.",
      useCases: ["Data platforms", "Functional backend", "Streaming systems"],
      learnPath: ["FP basics", "Collections", "Akka/Pekko", "Typelevel ecosystem"],
      tooling: ["sbt", "scala-cli", "scalatest", "scalafmt"],
      frameworks: ["Play", "Akka", "http4s", "Spark"],
      firstProject: "Event-driven service in Scala",
      links: [
        { label: "Scala Docs", url: "https://docs.scala-lang.org" },
        { label: "Typelevel", url: "https://typelevel.org" }
      ]
    },
    {
      name: "R",
      install: "Install R and RStudio.",
      useCases: ["Data analysis", "Statistics", "Visualization"],
      learnPath: ["Data frames", "dplyr", "ggplot2", "Modeling"],
      tooling: ["RStudio", "tidyverse", "renv", "shiny"],
      frameworks: ["Shiny", "tidyverse", "caret"],
      firstProject: "Sales analytics dashboard",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org" },
        { label: "R for Data Science", url: "https://r4ds.hadley.nz" }
      ]
    },
    {
      name: "Julia",
      install: "Install Julia and use its built-in package manager.",
      useCases: ["Scientific computing", "Numerical optimization", "Data science"],
      learnPath: ["Multiple dispatch", "Arrays", "DataFrames", "Performance tuning"],
      tooling: ["Julia REPL", "Pkg", "Pluto", "BenchmarkTools"],
      frameworks: ["Flux", "DifferentialEquations", "Genie"],
      firstProject: "Logistics optimization simulation",
      links: [
        { label: "Julia Docs", url: "https://docs.julialang.org" },
        { label: "Julia Data Science", url: "https://juliadatascience.io" }
      ]
    },
    {
      name: "Elixir",
      install: "Install Erlang/OTP + Elixir and verify with elixir --version.",
      useCases: ["Realtime apps", "Fault-tolerant systems", "Background jobs"],
      learnPath: ["Pattern matching", "OTP", "GenServer", "Phoenix"],
      tooling: ["mix", "iex", "credo", "dialyzer"],
      frameworks: ["Phoenix", "LiveView", "Ecto"],
      firstProject: "Realtime chat with Phoenix",
      links: [
        { label: "Elixir Lang", url: "https://elixir-lang.org" },
        { label: "Phoenix", url: "https://www.phoenixframework.org" }
      ]
    },
    {
      name: "Solidity",
      install: "Install Node.js and use Hardhat or Foundry toolchain.",
      useCases: ["Smart contracts", "DeFi", "On-chain governance"],
      learnPath: ["EVM basics", "Contract security", "Testing", "Deployment"],
      tooling: ["Hardhat", "Foundry", "OpenZeppelin", "Slither"],
      frameworks: ["Hardhat", "Foundry", "OpenZeppelin"],
      firstProject: "ERC-20 token + vesting contract",
      links: [
        { label: "Solidity Docs", url: "https://docs.soliditylang.org" },
        { label: "OpenZeppelin", url: "https://docs.openzeppelin.com" }
      ]
    }
  ]
};

const languageLearningTopics = {
  JavaScript: ["Array methods", "Event loop", "Fetch/API", "Module system"],
  TypeScript: ["Strict mode", "Mapped types", "Conditional types", "Type narrowing"],
  Python: ["Data classes", "Context manager", "AsyncIO", "Packaging"],
  Java: ["JVM basics", "Records", "Streams", "Spring DI"],
  "C#": ["Nullable reference types", "Generics", "Async/await", "Dependency injection"],
  Go: ["Interfaces", "Concurrency patterns", "Error wrapping", "Testing"],
  Rust: ["Borrow checker", "Lifetimes", "Traits", "Async runtime"],
  PHP: ["Composer", "PSR standards", "Eloquent ORM", "Blade templates"],
  Kotlin: ["Coroutines", "Flow", "Sealed classes", "Clean architecture"],
  Swift: ["Optionals", "SwiftUI state", "Combine", "Dependency injection"],
  Dart: ["Null safety", "Isolates", "State management", "Routing"],
  SQL: ["Indexes", "Execution plans", "Transactions", "Window functions"],
  C: ["Pointers", "Memory layout", "Preprocessor", "Makefile"],
  "C++": ["STL algorithms", "Templates", "RAII", "Move semantics"],
  Bash: ["Quoting rules", "Pipe/redirect", "set -euo pipefail", "shellcheck"],
  PowerShell: ["Cmdlets", "Pipelines", "Modules", "Remoting"],
  Ruby: ["Blocks", "Enumerables", "Metaprogramming", "ActiveRecord"],
  Scala: ["Pure functions", "Higher-order functions", "Pattern matching", "Type classes"],
  R: ["Tidyverse", "ggplot2", "Statistics basics", "Reproducible reports"],
  Julia: ["Multiple dispatch", "Type stability", "Benchmarking", "Packages"],
  Elixir: ["Pattern matching", "Processes", "Supervision trees", "LiveView"],
  Solidity: ["Storage/memory", "Access control", "Gas optimization", "Security patterns"]
};

function buildInterviewQuestions(languageName, lang) {
  if (lang === "vi") {
    return [
      `Khi nào nên chọn ${languageName} thay vì giải pháp khác?`,
      `Ba khái niệm cốt lõi nhất của ${languageName} là gì?`,
      `Tooling hoặc framework nào nên đi kèm ${languageName}?`,
      `Sai lầm phổ biến nhất khi làm project bằng ${languageName} là gì?`
    ];
  }

  return [
    `When should you choose ${languageName} over another option?`,
    `What are the three core concepts you must know in ${languageName}?`,
    `Which tools or frameworks are commonly paired with ${languageName}?`,
    `What is the most common mistake when building projects with ${languageName}?`
  ];
}

const languageLearningExtras = {
  JavaScript: ["Performance profiling", "Testing patterns", "Accessibility basics"],
  TypeScript: ["Declaration files", "Monorepos", "API typing"],
  Python: ["Virtual environments", "Dependency pinning", "Async web APIs"],
  Java: ["JIT + JVM tuning", "Spring Boot testing", "Concurrency utilities"],
  "C#": ["Nullable annotations", "Minimal APIs", "Background services"],
  Go: ["Interfaces in practice", "Concurrency patterns", "Profiling"],
  Rust: ["Lifetimes", "Async runtimes", "Unsafe boundaries"],
  PHP: ["Laravel ecosystem", "ORM patterns", "Queues and jobs"],
  Kotlin: ["Flow", "Multiplatform basics", "Testing coroutines"],
  Swift: ["State management", "Combine basics", "App lifecycle"],
  Dart: ["Custom widgets", "State orchestration", "Platform channels"],
  SQL: ["Query plans", "Transaction isolation", "Normalization"],
  C: ["Memory alignment", "Linking", "Preprocessor macros"],
  "C++": ["Templates", "Move semantics", "Compile-time design"],
  Bash: ["Shell quoting", "Process substitution", "Portable scripting"],
  PowerShell: ["Pipeline objects", "Module design", "Remote automation"],
  Ruby: ["Enumerable", "Metaprogramming", "Rails conventions"],
  Scala: ["Type system", "Functional composition", "Streaming"],
  R: ["Statistical modeling", "Reproducibility", "Reporting"],
  Julia: ["Performance tuning", "Multiple dispatch", "Scientific packages"],
  Elixir: ["OTP supervision", "Distributed systems", "LiveView patterns"],
  Solidity: ["Reentrancy defenses", "Upgradeable contracts", "Gas patterns"]
};

const languageGotchas = {
  JavaScript: ["Hoisting và scope dễ gây lỗi ngầm", "Promise chain xử lý lỗi sai sẽ khó debug", "Lạm dụng any và global state"],
  TypeScript: ["Dùng any quá nhiều làm mất ý nghĩa type", "Quên runtime validation", "Union type phức tạp nhưng không có guard"],
  Python: ["Không tách virtual env rõ ràng", "Phụ thuộc package không pin version", "Dùng mutable default sai cách"],
  Java: ["Transaction boundary mơ hồ", "Entity và DTO lẫn nhau", "Bỏ qua test tích hợp với DB"],
  "C#": ["Đẩy business logic vào controller", "Không quản lý async/await đúng", "Thiếu layer cho dự án lớn"],
  Go: ["Nuốt lỗi thay vì trả về rõ ràng", "Thiết kế package vòng lặp phụ thuộc", "Bỏ qua context trong request dài"],
  Rust: ["Lạm dụng unwrap", "Clone dữ liệu không cần thiết", "Hiểu sai ownership trong async"],
  PHP: ["Để logic ở route/controller quá nhiều", "Bỏ qua migration", "Không validate input trước khi dùng"],
  Kotlin: ["Mutable state khó kiểm soát", "Không tách layer rõ", "Bỏ qua lifecycle của Android"],
  Swift: ["Cập nhật state sai thread", "View quá nhiều logic", "Không tách view model"],
  Dart: ["Widget tree quá sâu", "State management thiếu kỷ luật", "Không xử lý responsive"],
  SQL: ["Dùng SELECT * trong production", "Không đọc execution plan", "Thiếu index cho truy vấn hot"],
  C: ["Quản lý bộ nhớ sai", "Không kiểm tra return code", "Buffer overflow từ input"],
  "C++": ["Raw pointer bừa bãi", "Copy không cần thiết", "Không dùng const-correctness"],
  Bash: ["Không quote biến", "Bỏ set -euo pipefail", "Parse text thay vì dùng option chuẩn"],
  PowerShell: ["Xử lý chuỗi thay vì object", "Hardcode path", "Thiếu try/catch cho script dài"],
  Ruby: ["N+1 query", "Model quá phình", "Thiếu validation và test"],
  Scala: ["Mutable state quá nhiều", "Kiểu dữ liệu phức tạp không cần thiết", "Thiếu test property-based"],
  R: ["Không cố định seed", "Không làm sạch NA", "Biểu đồ thiếu ngữ cảnh"],
  Julia: ["Type instability", "Global variable trong loop", "Tối ưu trước khi benchmark"],
  Elixir: ["Stateful process khó kiểm soát", "Supervision tree yếu", "Không tách context rõ"],
  Solidity: ["Reentrancy", "Thiếu access control", "Không fuzz test trước khi deploy"]
};

const languageCodeUsage = {
  JavaScript: ["UI interaction và browser app", "Node API và automation", "Tooling, scripts và prototype nhanh"],
  TypeScript: ["Dự án web lớn cần type an toàn", "Backend service và SDK", "Monorepo có nhiều package"],
  Python: ["AI/ML pipeline và data tooling", "API backend nhỏ gọn", "Automation script và task runner"],
  Java: ["Enterprise backend", "Service xử lý tải lớn", "Hệ sinh thái Spring và JVM"],
  "C#": ["Web API và cloud service", "Desktop app trên Windows", "Game và enterprise tooling"],
  Go: ["Microservice và CLI", "Infrastructure tooling", "Service cần concurrency gọn"],
  Rust: ["Hệ thống cần hiệu năng cao", "CLI an toàn bộ nhớ", "Library low-level"],
  PHP: ["Web backend và CMS", "E-commerce", "Dự án cần tốc độ triển khai nhanh"],
  Kotlin: ["Android native", "JVM backend", "Codebase muốn ngắn gọn và an toàn null"],
  Swift: ["iOS/macOS app", "UI hiện đại với SwiftUI", "Ứng dụng cần trải nghiệm mượt"],
  Dart: ["Flutter app đa nền tảng", "Prototype nhanh cho mobile", "Dự án cần codebase đồng nhất"],
  SQL: ["Phân tích dữ liệu", "Backend persistence", "Báo cáo BI và data warehouse"],
  C: ["Embedded", "Tool hệ thống", "Xử lý bộ nhớ thấp tầng"],
  "C++": ["Game engine", "Native desktop app", "High-performance system"],
  Bash: ["Automation và CI/CD", "Script vận hành server", "Xử lý file và text nhanh"],
  PowerShell: ["Windows automation", "DevOps script", "Quản lý hệ thống bằng object pipeline"],
  Ruby: ["Rails web app", "Automation script", "API nội bộ nhỏ"],
  Scala: ["Data platform", "Streaming backend", "Functional service"],
  R: ["Phân tích thống kê", "Dashboard nghiên cứu", "Data visualization"],
  Julia: ["Scientific computing", "Optimization", "Data science hiệu năng cao"],
  Elixir: ["Realtime app", "Fault-tolerant backend", "Background jobs"],
  Solidity: ["Smart contract", "DeFi", "On-chain governance"]
};

Object.keys(languageLearningTopics).forEach((name) => {
  const extraTopics = languageLearningExtras[name] || [];
  languageLearningTopics[name] = [...new Set([...(languageLearningTopics[name] || []), ...extraTopics])];
});

languageGuide.vi = languageGuide.vi.map((item) => ({
  ...item,
  topics: languageLearningTopics[item.name] || []
  , interviewQuestions: buildInterviewQuestions(item.name, "vi")
  , gotchas: languageGotchas[item.name] || []
  , codeUsage: languageCodeUsage[item.name] || []
}));

languageGuide.en = languageGuide.en.map((item) => ({
  ...item,
  topics: languageLearningTopics[item.name] || []
  , interviewQuestions: buildInterviewQuestions(item.name, "en")
  , gotchas: languageGotchas[item.name] || []
  , codeUsage: languageCodeUsage[item.name] || []
}));

const languageDeepDetails = {
  vi: {
    JavaScript: {
      practicePlan: ["Tuần 1: JS nền tảng + DOM", "Tuần 2: Async + API", "Tuần 3: SPA nhỏ", "Tuần 4: tối ưu và test"],
      commands: ["npm create vite@latest", "npm run dev", "npm run build"],
      mistakes: ["Lạm dụng global state", "Không xử lý lỗi mạng", "Không tách component hợp lý"]
    },
    TypeScript: {
      practicePlan: ["Tuần 1: type system", "Tuần 2: generic + utility types", "Tuần 3: backend TS", "Tuần 4: validation + refactor"],
      commands: ["npx tsc --init", "npx tsc --noEmit", "npm run lint"],
      mistakes: ["Dùng any quá nhiều", "Bỏ qua strict mode", "Không validate dữ liệu runtime"]
    },
    Python: {
      practicePlan: ["Tuần 1: syntax + venv", "Tuần 2: API FastAPI", "Tuần 3: test + lint", "Tuần 4: deploy"],
      commands: ["python -m venv .venv", "pip install -r requirements.txt", "pytest -q"],
      mistakes: ["Không pin version package", "Thiếu type hint", "Không tách settings theo môi trường"]
    },
    Java: {
      practicePlan: ["Tuần 1: core Java", "Tuần 2: Spring Boot", "Tuần 3: JPA + transaction", "Tuần 4: test integration"],
      commands: ["mvn spring-boot:run", "mvn test", "mvn package"],
      mistakes: ["Thiếu connection pooling", "Transaction boundary không rõ", "Entity thiết kế kém"]
    },
    "C#": {
      practicePlan: ["Tuần 1: C# nền tảng", "Tuần 2: ASP.NET Core", "Tuần 3: EF Core", "Tuần 4: auth + logging"],
      commands: ["dotnet new webapi", "dotnet test", "dotnet watch run"],
      mistakes: ["Đưa business logic vào controller", "Bỏ qua async/await", "Thiếu phân lớp dự án"]
    },
    Go: {
      practicePlan: ["Tuần 1: syntax + package", "Tuần 2: HTTP server", "Tuần 3: goroutine + channel", "Tuần 4: profiling"],
      commands: ["go mod init app", "go test ./...", "go run ./cmd/api"],
      mistakes: ["Nuốt lỗi", "Không dùng context", "Thiết kế package vòng lặp phụ thuộc"]
    },
    Rust: {
      practicePlan: ["Tuần 1: ownership", "Tuần 2: enum + error", "Tuần 3: tokio + axum", "Tuần 4: benchmark"],
      commands: ["cargo new app", "cargo test", "cargo clippy -- -D warnings"],
      mistakes: ["Clone dữ liệu không cần thiết", "Lạm dụng unwrap", "Không tách crate rõ ràng"]
    },
    PHP: {
      practicePlan: ["Tuần 1: PHP cơ bản", "Tuần 2: OOP + Composer", "Tuần 3: Laravel CRUD", "Tuần 4: test + queue"],
      commands: ["composer install", "php artisan serve", "php artisan test"],
      mistakes: ["Code business logic ở route", "Không dùng migration", "Thiếu input validation"]
    },
    Kotlin: {
      practicePlan: ["Tuần 1: Kotlin core", "Tuần 2: coroutines", "Tuần 3: Android architecture", "Tuần 4: test UI"],
      commands: ["./gradlew test", "./gradlew assembleDebug", "./gradlew lint"],
      mistakes: ["Không tách layer", "Lạm dụng mutable state", "Thiếu lifecycle awareness"]
    },
    Swift: {
      practicePlan: ["Tuần 1: Swift core", "Tuần 2: SwiftUI layout", "Tuần 3: networking", "Tuần 4: persistence + test"],
      commands: ["xcodebuild -list", "xcodebuild test", "swift build"],
      mistakes: ["Cập nhật state sai luồng", "Không tách view model", "Bỏ qua profiling"]
    },
    Dart: {
      practicePlan: ["Tuần 1: Dart core", "Tuần 2: Flutter UI", "Tuần 3: state management", "Tuần 4: release build"],
      commands: ["flutter pub get", "flutter test", "flutter build apk"],
      mistakes: ["Widget tree quá sâu", "Không tách state", "Không xử lý responsive"]
    },
    SQL: {
      practicePlan: ["Tuần 1: SELECT + JOIN", "Tuần 2: aggregate", "Tuần 3: window function", "Tuần 4: index tuning"],
      commands: ["psql -U postgres", "EXPLAIN ANALYZE <query>", "\dt"],
      mistakes: ["SELECT * trong production", "Thiếu index đúng cột", "Không đọc execution plan"]
    },
    C: {
      practicePlan: ["Tuần 1: biến + con trỏ", "Tuần 2: file I/O", "Tuần 3: cấu trúc dữ liệu", "Tuần 4: debug + tối ưu"],
      commands: ["gcc main.c -o app", "./app", "gdb ./app"],
      mistakes: ["Quản lý bộ nhớ sai", "Buffer overflow", "Không kiểm tra return code"]
    },
    "C++": {
      practicePlan: ["Tuần 1: STL", "Tuần 2: OOP + RAII", "Tuần 3: move semantics", "Tuần 4: concurrency"],
      commands: ["cmake -S . -B build", "cmake --build build", "ctest --test-dir build"],
      mistakes: ["Lạm dụng raw pointer", "Copy không cần thiết", "Không dùng const-correctness"]
    },
    Bash: {
      practicePlan: ["Tuần 1: shell basics", "Tuần 2: pipe + text tools", "Tuần 3: automation script", "Tuần 4: cron + monitoring"],
      commands: ["bash script.sh", "shellcheck script.sh", "chmod +x script.sh"],
      mistakes: ["Không quote biến", "Không set -euo pipefail", "Dùng parsing mong manh"]
    },
    PowerShell: {
      practicePlan: ["Tuần 1: cmdlet", "Tuần 2: object pipeline", "Tuần 3: module script", "Tuần 4: remoting"],
      commands: ["pwsh -File deploy.ps1", "Invoke-ScriptAnalyzer deploy.ps1", "Get-Help Get-Process"],
      mistakes: ["Xử lý chuỗi thay vì object", "Không bắt lỗi try/catch", "Hardcode đường dẫn"]
    },
    Ruby: {
      practicePlan: ["Tuần 1: Ruby core", "Tuần 2: OOP", "Tuần 3: Rails CRUD", "Tuần 4: test + background job"],
      commands: ["bundle install", "rails s", "bundle exec rspec"],
      mistakes: ["N+1 query", "Fat model quá lớn", "Thiếu validation"]
    },
    Scala: {
      practicePlan: ["Tuần 1: functional basics", "Tuần 2: collection", "Tuần 3: HTTP service", "Tuần 4: stream processing"],
      commands: ["sbt run", "sbt test", "scala-cli run ."],
      mistakes: ["Dùng mutable state quá nhiều", "Type inference rối", "Thiếu test property-based"]
    },
    R: {
      practicePlan: ["Tuần 1: data frame", "Tuần 2: wrangling", "Tuần 3: visualization", "Tuần 4: model đánh giá"],
      commands: ["Rscript analysis.R", "install.packages('tidyverse')", "rmarkdown::render('report.Rmd')"],
      mistakes: ["Không cố định seed", "Vẽ chart thiếu context", "Không làm sạch NA"]
    },
    Julia: {
      practicePlan: ["Tuần 1: syntax + array", "Tuần 2: data frame", "Tuần 3: optimization", "Tuần 4: benchmark"],
      commands: ["julia --project", "using Pkg; Pkg.instantiate()", "using BenchmarkTools"],
      mistakes: ["Type instability", "Global variable trong vòng lặp", "Không benchmark trước tối ưu"]
    },
    Elixir: {
      practicePlan: ["Tuần 1: pattern matching", "Tuần 2: OTP", "Tuần 3: Phoenix", "Tuần 4: LiveView"],
      commands: ["mix deps.get", "mix phx.server", "mix test"],
      mistakes: ["Stateful process khó kiểm soát", "Không supervision đầy đủ", "Không tách context"]
    },
    Solidity: {
      practicePlan: ["Tuần 1: Solidity basics", "Tuần 2: contract test", "Tuần 3: security pattern", "Tuần 4: deploy testnet"],
      commands: ["npx hardhat test", "forge test", "npx hardhat run scripts/deploy.js"],
      mistakes: ["Reentrancy", "Không kiểm soát quyền", "Thiếu fuzz test"]
    }
  },
  en: {
    JavaScript: {
      practicePlan: ["Week 1: JS basics + DOM", "Week 2: Async + API", "Week 3: small SPA", "Week 4: optimization and tests"],
      commands: ["npm create vite@latest", "npm run dev", "npm run build"],
      mistakes: ["Overusing global state", "No network error handling", "Poor component boundaries"]
    },
    TypeScript: {
      practicePlan: ["Week 1: type system", "Week 2: generics + utility types", "Week 3: TS backend", "Week 4: validation + refactor"],
      commands: ["npx tsc --init", "npx tsc --noEmit", "npm run lint"],
      mistakes: ["Too much any", "Skipping strict mode", "No runtime validation"]
    },
    Python: {
      practicePlan: ["Week 1: syntax + venv", "Week 2: FastAPI", "Week 3: tests + lint", "Week 4: deploy"],
      commands: ["python -m venv .venv", "pip install -r requirements.txt", "pytest -q"],
      mistakes: ["Unpinned dependencies", "Missing type hints", "No environment separation"]
    },
    Java: {
      practicePlan: ["Week 1: core Java", "Week 2: Spring Boot", "Week 3: JPA + transactions", "Week 4: integration tests"],
      commands: ["mvn spring-boot:run", "mvn test", "mvn package"],
      mistakes: ["No connection pooling strategy", "Unclear transaction boundaries", "Weak entity design"]
    },
    "C#": {
      practicePlan: ["Week 1: C# fundamentals", "Week 2: ASP.NET Core", "Week 3: EF Core", "Week 4: auth + logging"],
      commands: ["dotnet new webapi", "dotnet test", "dotnet watch run"],
      mistakes: ["Business logic in controllers", "Ignoring async/await", "No clean project layers"]
    },
    Go: {
      practicePlan: ["Week 1: syntax + packages", "Week 2: HTTP service", "Week 3: goroutines + channels", "Week 4: profiling"],
      commands: ["go mod init app", "go test ./...", "go run ./cmd/api"],
      mistakes: ["Swallowing errors", "Not using context", "Cyclic package dependencies"]
    },
    Rust: {
      practicePlan: ["Week 1: ownership", "Week 2: error handling", "Week 3: tokio + axum", "Week 4: benchmarking"],
      commands: ["cargo new app", "cargo test", "cargo clippy -- -D warnings"],
      mistakes: ["Unnecessary cloning", "Overusing unwrap", "Unclear crate boundaries"]
    },
    PHP: {
      practicePlan: ["Week 1: PHP basics", "Week 2: OOP + Composer", "Week 3: Laravel CRUD", "Week 4: tests + queue"],
      commands: ["composer install", "php artisan serve", "php artisan test"],
      mistakes: ["Business logic in routes", "Skipping migrations", "Weak input validation"]
    },
    Kotlin: {
      practicePlan: ["Week 1: Kotlin core", "Week 2: coroutines", "Week 3: Android architecture", "Week 4: UI testing"],
      commands: ["./gradlew test", "./gradlew assembleDebug", "./gradlew lint"],
      mistakes: ["No layer separation", "Overusing mutable state", "Missing lifecycle awareness"]
    },
    Swift: {
      practicePlan: ["Week 1: Swift core", "Week 2: SwiftUI layout", "Week 3: networking", "Week 4: persistence + tests"],
      commands: ["xcodebuild -list", "xcodebuild test", "swift build"],
      mistakes: ["Wrong-thread state updates", "No view model structure", "Skipping profiling"]
    },
    Dart: {
      practicePlan: ["Week 1: Dart core", "Week 2: Flutter UI", "Week 3: state management", "Week 4: release build"],
      commands: ["flutter pub get", "flutter test", "flutter build apk"],
      mistakes: ["Overly deep widget tree", "No state separation", "No responsive handling"]
    },
    SQL: {
      practicePlan: ["Week 1: SELECT + JOIN", "Week 2: aggregation", "Week 3: window functions", "Week 4: index tuning"],
      commands: ["psql -U postgres", "EXPLAIN ANALYZE <query>", "\\dt"],
      mistakes: ["Using SELECT * in production", "Missing indexes", "Ignoring execution plans"]
    },
    C: {
      practicePlan: ["Week 1: variables + pointers", "Week 2: file I/O", "Week 3: data structures", "Week 4: debugging + optimization"],
      commands: ["gcc main.c -o app", "./app", "gdb ./app"],
      mistakes: ["Incorrect memory management", "Buffer overflows", "Ignoring return codes"]
    },
    "C++": {
      practicePlan: ["Week 1: STL", "Week 2: OOP + RAII", "Week 3: move semantics", "Week 4: concurrency"],
      commands: ["cmake -S . -B build", "cmake --build build", "ctest --test-dir build"],
      mistakes: ["Overusing raw pointers", "Unnecessary copies", "Weak const-correctness"]
    },
    Bash: {
      practicePlan: ["Week 1: shell basics", "Week 2: pipes + text tools", "Week 3: automation scripts", "Week 4: cron + monitoring"],
      commands: ["bash script.sh", "shellcheck script.sh", "chmod +x script.sh"],
      mistakes: ["Unquoted variables", "No set -euo pipefail", "Fragile text parsing"]
    },
    PowerShell: {
      practicePlan: ["Week 1: cmdlets", "Week 2: object pipeline", "Week 3: modules", "Week 4: remoting"],
      commands: ["pwsh -File deploy.ps1", "Invoke-ScriptAnalyzer deploy.ps1", "Get-Help Get-Process"],
      mistakes: ["String-based processing instead of objects", "No try/catch boundaries", "Hardcoded paths"]
    },
    Ruby: {
      practicePlan: ["Week 1: Ruby core", "Week 2: OOP", "Week 3: Rails CRUD", "Week 4: tests + background jobs"],
      commands: ["bundle install", "rails s", "bundle exec rspec"],
      mistakes: ["N+1 queries", "Overgrown models", "Missing validations"]
    },
    Scala: {
      practicePlan: ["Week 1: functional basics", "Week 2: collections", "Week 3: HTTP service", "Week 4: stream processing"],
      commands: ["sbt run", "sbt test", "scala-cli run ."],
      mistakes: ["Too much mutable state", "Overly complex type signatures", "Missing property-based tests"]
    },
    R: {
      practicePlan: ["Week 1: data frames", "Week 2: wrangling", "Week 3: visualization", "Week 4: model evaluation"],
      commands: ["Rscript analysis.R", "install.packages('tidyverse')", "rmarkdown::render('report.Rmd')"],
      mistakes: ["No fixed random seed", "Charts without context", "Poor NA handling"]
    },
    Julia: {
      practicePlan: ["Week 1: syntax + arrays", "Week 2: data frames", "Week 3: optimization", "Week 4: benchmarking"],
      commands: ["julia --project", "using Pkg; Pkg.instantiate()", "using BenchmarkTools"],
      mistakes: ["Type instability", "Global variables in loops", "Optimizing before profiling"]
    },
    Elixir: {
      practicePlan: ["Week 1: pattern matching", "Week 2: OTP", "Week 3: Phoenix", "Week 4: LiveView"],
      commands: ["mix deps.get", "mix phx.server", "mix test"],
      mistakes: ["Uncontrolled stateful processes", "Weak supervision trees", "No context boundaries"]
    },
    Solidity: {
      practicePlan: ["Week 1: Solidity basics", "Week 2: contract tests", "Week 3: security patterns", "Week 4: testnet deployment"],
      commands: ["npx hardhat test", "forge test", "npx hardhat run scripts/deploy.js"],
      mistakes: ["Reentrancy vulnerabilities", "Missing access control", "No fuzz testing"]
    }
  }
};

const languageSampleCodeMap = {
  JavaScript: "const sum = (a, b) => a + b;\nconsole.log(sum(2, 3));",
  TypeScript: "type User = { id: number; name: string };\nconst user: User = { id: 1, name: 'IT' };\nconsole.log(user.name);",
  Python: "def greet(name: str) -> str:\n    return f'Hello, {name}'\n\nprint(greet('IT'))",
  Java: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello IT\");\n  }\n}",
  "C#": "using System;\n\nConsole.WriteLine(\"Hello IT\");",
  Go: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello IT\")\n}",
  Rust: "fn main() {\n    println!(\"Hello IT\");\n}",
  PHP: "<?php\nfunction greet($name) { return \"Hello, $name\"; }\necho greet('IT');",
  Kotlin: "fun main() {\n    println(\"Hello IT\")\n}",
  Swift: "import Foundation\nprint(\"Hello IT\")",
  Dart: "void main() {\n  print('Hello IT');\n}",
  SQL: "SELECT user_id, COUNT(*) AS total\nFROM orders\nGROUP BY user_id\nORDER BY total DESC\nLIMIT 5;",
  C: "#include <stdio.h>\nint main() {\n  printf(\"Hello IT\\n\");\n  return 0;\n}",
  "C++": "#include <iostream>\nint main() {\n  std::cout << \"Hello IT\\n\";\n}",
  Bash: "#!/usr/bin/env bash\nset -euo pipefail\necho \"Hello IT\"",
  PowerShell: "Write-Output \"Hello IT\"",
  Ruby: "def greet(name)\n  \"Hello, #{name}\"\nend\n\nputs greet('IT')",
  Scala: "object Main extends App {\n  println(\"Hello IT\")\n}",
  R: "greet <- function(name) { paste('Hello', name) }\nprint(greet('IT'))",
  Julia: "println(\"Hello IT\")",
  Elixir: "IO.puts(\"Hello IT\")",
  Solidity: "pragma solidity ^0.8.20;\n\ncontract Hello {\n  function hi() external pure returns (string memory) {\n    return \"Hello IT\";\n  }\n}"
};

const languagePlaybook = {
  vi: Object.fromEntries(
    languageGuide.vi.map((l) => [
      l.name,
      {
        intro: "Học theo hướng làm dự án thật, mỗi tuần có đầu ra cụ thể và review lại chất lượng code.",
        learnPhases: [
          "Beginner: nắm cú pháp, toolchain và cấu trúc dự án cơ bản",
          "Intermediate: xây feature hoàn chỉnh có test và logging",
          "Advanced: tối ưu kiến trúc, bảo mật và hiệu năng"
        ],
        codingGuide: ["Tách module theo domain", "Viết code dễ đọc trước khi tối ưu", "Luôn có test cho luồng quan trọng"],
        projectPlan: ["Dự án 1: CRUD cơ bản", "Dự án 2: auth + deploy", "Dự án 3: cache + monitoring + CI"],
        sampleCode: languageSampleCodeMap[l.name] || "function hello(name) {\n  return `Hello, ${name}`;\n}\n\nconsole.log(hello('IT'));"
      }
    ])
  ),
  en: Object.fromEntries(
    languageGuide.en.map((l) => [
      l.name,
      {
        intro: "Learn through real projects, define weekly outputs, and review code quality continuously.",
        learnPhases: [
          "Beginner: syntax, toolchain, and baseline project structure",
          "Intermediate: complete features with tests and logs",
          "Advanced: architecture, security, and performance tuning"
        ],
        codingGuide: ["Split modules by domain", "Prefer readability before optimization", "Test critical paths first"],
        projectPlan: ["Project 1: basic CRUD", "Project 2: auth + deploy", "Project 3: cache + monitoring + CI"],
        sampleCode: languageSampleCodeMap[l.name] || "function hello(name) {\n  return `Hello, ${name}`;\n}\n\nconsole.log(hello('IT'));"
      }
    ])
  )
};

const knowledgeData = {
  vi: [
    {
      role: "Frontend Engineer",
      overview: "Tập trung xây UI nhanh, dễ dùng, dễ bảo trì và đo được hiệu năng.",
      pitfalls: ["Bỏ qua accessibility", "Không theo dõi Core Web Vitals", "State management thiếu kỷ luật"],
      levels: [
        { stage: "Fresher", focus: "HTML/CSS/JS nền tảng", mustKnow: ["Semantic HTML", "Flex/Grid"], projects: ["Landing page"], interview: ["Event loop"] },
        { stage: "Junior", focus: "SPA và API integration", mustKnow: ["React/Vue lifecycle", "Form validation"], projects: ["Dashboard"], interview: ["Re-render"] },
        { stage: "Middle", focus: "Architecture và performance", mustKnow: ["SSR/SSG", "Testing strategy"], projects: ["Monorepo FE"], interview: ["CSR vs SSR"] },
        { stage: "Senior", focus: "Tech leadership", mustKnow: ["Design system governance", "Performance budget"], projects: ["Large migration"], interview: ["Decision records"] }
      ]
    },
    {
      role: "Backend Engineer",
      overview: "Tập trung API ổn định, bảo mật, dễ mở rộng và dễ quan sát production.",
      pitfalls: ["Thiếu tracing/logging", "Boundary transaction không rõ", "Versioning API thiếu chiến lược"],
      levels: [
        { stage: "Fresher", focus: "HTTP + SQL cơ bản", mustKnow: ["REST conventions", "Input validation"], projects: ["Blog API"], interview: ["Idempotency"] },
        { stage: "Junior", focus: "Service production-ready", mustKnow: ["RBAC", "Redis"], projects: ["Order service"], interview: ["Rate limiting"] },
        { stage: "Middle", focus: "Scale + reliability", mustKnow: ["Distributed tracing", "SLO/SLA"], projects: ["Gateway split"], interview: ["Backpressure"] },
        { stage: "Senior", focus: "Architecture strategy", mustKnow: ["Domain modeling", "Capacity planning"], projects: ["Platform auth"], interview: ["CAP trade-offs"] }
      ]
    },
    {
      role: "Data Engineer",
      overview: "Thiết kế pipeline dữ liệu ổn định, có lineage rõ ràng và phục vụ phân tích gần thời gian thực.",
      pitfalls: ["Thiếu data quality check", "Schema drift không giám sát", "Chi phí query tăng mất kiểm soát"],
      levels: [
        { stage: "Fresher", focus: "SQL + ETL nền tảng", mustKnow: ["JOIN", "CTE", "Batch basics"], projects: ["Mini ETL pipeline"], interview: ["Star schema"] },
        { stage: "Junior", focus: "Data warehouse", mustKnow: ["Partitioning", "dbt models"], projects: ["Warehouse cho sales"], interview: ["Slowly changing dimensions"] },
        { stage: "Middle", focus: "Streaming + observability", mustKnow: ["Kafka", "Data contracts"], projects: ["Realtime dashboard"], interview: ["Exactly-once semantics"] },
        { stage: "Senior", focus: "Platform governance", mustKnow: ["Data mesh", "Cost optimization"], projects: ["Unified data platform"], interview: ["Lakehouse trade-offs"] }
      ]
    },
    {
      role: "DevOps / Platform Engineer",
      overview: "Xây nền tảng triển khai và vận hành tự động, tối ưu tốc độ release và độ tin cậy hệ thống.",
      pitfalls: ["CI/CD thiếu chuẩn hóa", "Hạ tầng không version hóa", "Alert nhiều nhưng không hữu ích"],
      levels: [
        { stage: "Fresher", focus: "Linux + networking cơ bản", mustKnow: ["Process", "Ports", "DNS"], projects: ["Deploy app bằng Docker"], interview: ["Layer của Docker image"] },
        { stage: "Junior", focus: "CI/CD và IaC", mustKnow: ["GitHub Actions", "Terraform"], projects: ["Pipeline build-test-deploy"], interview: ["Immutable infrastructure"] },
        { stage: "Middle", focus: "Kubernetes + observability", mustKnow: ["Helm", "Prometheus", "Grafana"], projects: ["Blue/Green rollout"], interview: ["HPA vs VPA"] },
        { stage: "Senior", focus: "Reliability strategy", mustKnow: ["SLO/Error budget", "Incident response"], projects: ["Multi-region architecture"], interview: ["Disaster recovery"] }
      ]
    },
    {
      role: "Security Engineer",
      overview: "Tập trung phòng ngừa lỗ hổng từ sớm, xây secure SDLC và nâng cao khả năng phản ứng sự cố.",
      pitfalls: ["Security check chỉ làm cuối kỳ", "Thiếu threat modeling", "Log không đủ forensic"],
      levels: [
        { stage: "Fresher", focus: "Security fundamentals", mustKnow: ["OWASP Top 10", "Auth basics"], projects: ["Audit web app mini"], interview: ["SQL injection"] },
        { stage: "Junior", focus: "AppSec workflow", mustKnow: ["SAST/DAST", "Dependency scanning"], projects: ["Secure CI pipeline"], interview: ["CSRF vs XSS"] },
        { stage: "Middle", focus: "Detection & response", mustKnow: ["SIEM", "Incident triage"], projects: ["Runbook xử lý sự cố"], interview: ["MITRE ATT&CK mapping"] },
        { stage: "Senior", focus: "Security architecture", mustKnow: ["Zero Trust", "Threat modeling"], projects: ["Security baseline toàn hệ thống"], interview: ["Defense in depth"] }
      ]
    },
    {
      role: "QA / Automation Engineer",
      overview: "Thiết kế chiến lược kiểm thử, tự động hóa regression và giữ chất lượng sản phẩm ổn định qua từng release.",
      pitfalls: ["Test case chồng chéo", "Automation thiếu dữ liệu ổn định", "Bỏ qua kiểm thử không chức năng"],
      levels: [
        { stage: "Fresher", focus: "Manual testing + bug report", mustKnow: ["Test case", "Boundary value", "Repro steps"], projects: ["Test checklist cho web app"], interview: ["Severity vs priority"] },
        { stage: "Junior", focus: "Automation cơ bản", mustKnow: ["Playwright/Cypress", "Page object pattern"], projects: ["Regression suite"], interview: ["Flaky test"] },
        { stage: "Middle", focus: "CI quality gate", mustKnow: ["API test", "Contract test"], projects: ["Quality pipeline"], interview: ["Test pyramid"] },
        { stage: "Senior", focus: "Quality strategy", mustKnow: ["Shift-left", "Risk-based testing"], projects: ["Org-wide QA strategy"], interview: ["E2E vs integration trade-offs"] }
      ]
    },
    {
      role: "Cloud Architect",
      overview: "Thiết kế hạ tầng cloud có thể mở rộng, tối ưu chi phí và đảm bảo độ tin cậy lâu dài.",
      pitfalls: ["Mở rộng cloud mà không kiểm soát chi phí", "Thiếu landing zone", "Không chuẩn hóa network/security"],
      levels: [
        { stage: "Fresher", focus: "Cloud fundamentals", mustKnow: ["IAM", "VPC/VNet", "Compute basics"], projects: ["Deploy app lên cloud"], interview: ["Shared responsibility model"] },
        { stage: "Junior", focus: "Infra as code", mustKnow: ["Terraform", "Managed database"], projects: ["Infrastructure template"], interview: ["Auto scaling"] },
        { stage: "Middle", focus: "Architecture and reliability", mustKnow: ["Multi-AZ", "Backup/restore", "Observability"], projects: ["Production landing zone"], interview: ["Fault tolerance"] },
        { stage: "Senior", focus: "Cost + governance", mustKnow: ["FinOps", "Policy as code"], projects: ["Cloud governance framework"], interview: ["Sovereignty and compliance"] }
      ]
    },
    {
      role: "Product Engineer",
      overview: "Kết hợp coding với tư duy sản phẩm để ra feature có tác động thật lên người dùng và business.",
      pitfalls: ["Code xong nhưng không đo kết quả", "Thiếu trao đổi với PM/Design", "Tối ưu kỹ thuật trước nhu cầu"],
      levels: [
        { stage: "Fresher", focus: "Build feature end-to-end", mustKnow: ["User story", "Acceptance criteria"], projects: ["Feature nhỏ có analytics"], interview: ["How to estimate impact?"] },
        { stage: "Junior", focus: "Iteration nhanh", mustKnow: ["Experiment", "A/B testing basics"], projects: ["Feature flag rollout"], interview: ["How to measure success?"] },
        { stage: "Middle", focus: "Data-informed decisions", mustKnow: ["Telemetry", "Event design"], projects: ["Usage analytics dashboard"], interview: ["North Star metric"] },
        { stage: "Senior", focus: "Product strategy", mustKnow: ["Trade-off framing", "Roadmap thinking"], projects: ["Cross-team initiative"], interview: ["Build vs buy"] }
      ]
    }
  ],
  en: [
    {
      role: "Frontend Engineer",
      overview: "Build fast, accessible UI with maintainable architecture and measurable performance.",
      pitfalls: ["Ignoring accessibility", "No Core Web Vitals tracking", "Undisciplined state management"],
      levels: [
        { stage: "Fresher", focus: "HTML/CSS/JS fundamentals", mustKnow: ["Semantic HTML", "Flex/Grid"], projects: ["Landing page"], interview: ["Event loop"] },
        { stage: "Junior", focus: "SPA and API integration", mustKnow: ["React/Vue lifecycle", "Form validation"], projects: ["Dashboard"], interview: ["Re-render"] },
        { stage: "Middle", focus: "Architecture and performance", mustKnow: ["SSR/SSG", "Testing strategy"], projects: ["FE monorepo"], interview: ["CSR vs SSR"] },
        { stage: "Senior", focus: "Technical leadership", mustKnow: ["Design system governance", "Performance budget"], projects: ["Large migration"], interview: ["Decision records"] }
      ]
    },
    {
      role: "Backend Engineer",
      overview: "Build secure, reliable APIs and systems that scale with product growth.",
      pitfalls: ["Missing tracing/logging", "Unclear transaction boundaries", "Weak API versioning strategy"],
      levels: [
        { stage: "Fresher", focus: "HTTP + SQL basics", mustKnow: ["REST conventions", "Input validation"], projects: ["Blog API"], interview: ["Idempotency"] },
        { stage: "Junior", focus: "Production-ready services", mustKnow: ["RBAC", "Redis"], projects: ["Order service"], interview: ["Rate limiting"] },
        { stage: "Middle", focus: "Scale + reliability", mustKnow: ["Distributed tracing", "SLO/SLA"], projects: ["Gateway split"], interview: ["Backpressure"] },
        { stage: "Senior", focus: "Architecture strategy", mustKnow: ["Domain modeling", "Capacity planning"], projects: ["Platform auth"], interview: ["CAP trade-offs"] }
      ]
    },
    {
      role: "Data Engineer",
      overview: "Design robust data pipelines with clear lineage and near real-time analytics capability.",
      pitfalls: ["No data quality checks", "Unmonitored schema drift", "Uncontrolled query costs"],
      levels: [
        { stage: "Fresher", focus: "SQL + ETL basics", mustKnow: ["JOIN", "CTE", "Batch basics"], projects: ["Mini ETL pipeline"], interview: ["Star schema"] },
        { stage: "Junior", focus: "Data warehouse", mustKnow: ["Partitioning", "dbt models"], projects: ["Sales warehouse"], interview: ["Slowly changing dimensions"] },
        { stage: "Middle", focus: "Streaming + observability", mustKnow: ["Kafka", "Data contracts"], projects: ["Realtime dashboard"], interview: ["Exactly-once semantics"] },
        { stage: "Senior", focus: "Platform governance", mustKnow: ["Data mesh", "Cost optimization"], projects: ["Unified data platform"], interview: ["Lakehouse trade-offs"] }
      ]
    },
    {
      role: "DevOps / Platform Engineer",
      overview: "Build deployment and operations platforms that improve release speed and system reliability.",
      pitfalls: ["Unstandardized CI/CD", "Infrastructure not versioned", "Noisy but low-value alerts"],
      levels: [
        { stage: "Fresher", focus: "Linux + networking basics", mustKnow: ["Processes", "Ports", "DNS"], projects: ["Dockerized app deployment"], interview: ["Docker image layers"] },
        { stage: "Junior", focus: "CI/CD and IaC", mustKnow: ["GitHub Actions", "Terraform"], projects: ["Build-test-deploy pipeline"], interview: ["Immutable infrastructure"] },
        { stage: "Middle", focus: "Kubernetes + observability", mustKnow: ["Helm", "Prometheus", "Grafana"], projects: ["Blue/Green rollout"], interview: ["HPA vs VPA"] },
        { stage: "Senior", focus: "Reliability strategy", mustKnow: ["SLO/Error budget", "Incident response"], projects: ["Multi-region architecture"], interview: ["Disaster recovery"] }
      ]
    },
    {
      role: "Security Engineer",
      overview: "Shift security left, establish secure SDLC, and improve incident response readiness.",
      pitfalls: ["Security checks only at release time", "No threat modeling", "Insufficient forensic logging"],
      levels: [
        { stage: "Fresher", focus: "Security fundamentals", mustKnow: ["OWASP Top 10", "Auth basics"], projects: ["Mini web app audit"], interview: ["SQL injection"] },
        { stage: "Junior", focus: "AppSec workflow", mustKnow: ["SAST/DAST", "Dependency scanning"], projects: ["Secure CI pipeline"], interview: ["CSRF vs XSS"] },
        { stage: "Middle", focus: "Detection & response", mustKnow: ["SIEM", "Incident triage"], projects: ["Incident response runbook"], interview: ["MITRE ATT&CK mapping"] },
        { stage: "Senior", focus: "Security architecture", mustKnow: ["Zero Trust", "Threat modeling"], projects: ["Org-wide security baseline"], interview: ["Defense in depth"] }
      ]
    },
    {
      role: "QA / Automation Engineer",
      overview: "Design test strategy, automate regressions, and keep product quality stable across releases.",
      pitfalls: ["Overlapping test cases", "Automation with unstable data", "Ignoring non-functional testing"],
      levels: [
        { stage: "Fresher", focus: "Manual testing + bug reports", mustKnow: ["Test cases", "Boundary values", "Repro steps"], projects: ["Web app test checklist"], interview: ["Severity vs priority"] },
        { stage: "Junior", focus: "Basic automation", mustKnow: ["Playwright/Cypress", "Page object pattern"], projects: ["Regression suite"], interview: ["Flaky test"] },
        { stage: "Middle", focus: "CI quality gate", mustKnow: ["API tests", "Contract tests"], projects: ["Quality pipeline"], interview: ["Test pyramid"] },
        { stage: "Senior", focus: "Quality strategy", mustKnow: ["Shift-left", "Risk-based testing"], projects: ["Org-wide QA strategy"], interview: ["E2E vs integration trade-offs"] }
      ]
    },
    {
      role: "Cloud Architect",
      overview: "Design scalable cloud infrastructure that balances reliability, cost, and governance.",
      pitfalls: ["Scaling cloud without cost control", "No landing zone", "Unstandardized network/security"],
      levels: [
        { stage: "Fresher", focus: "Cloud fundamentals", mustKnow: ["IAM", "VPC/VNet", "Compute basics"], projects: ["Deploy app to cloud"], interview: ["Shared responsibility model"] },
        { stage: "Junior", focus: "Infrastructure as code", mustKnow: ["Terraform", "Managed databases"], projects: ["Infrastructure template"], interview: ["Auto scaling"] },
        { stage: "Middle", focus: "Architecture and reliability", mustKnow: ["Multi-AZ", "Backup/restore", "Observability"], projects: ["Production landing zone"], interview: ["Fault tolerance"] },
        { stage: "Senior", focus: "Cost + governance", mustKnow: ["FinOps", "Policy as code"], projects: ["Cloud governance framework"], interview: ["Sovereignty and compliance"] }
      ]
    },
    {
      role: "Product Engineer",
      overview: "Combine coding with product thinking to ship features that move real user and business metrics.",
      pitfalls: ["Shipping code without measuring impact", "Not aligning with PM/Design", "Over-optimizing technical elegance"],
      levels: [
        { stage: "Fresher", focus: "End-to-end feature delivery", mustKnow: ["User stories", "Acceptance criteria"], projects: ["Small feature with analytics"], interview: ["How do you estimate impact?"] },
        { stage: "Junior", focus: "Fast iteration", mustKnow: ["Experiment design", "A/B testing basics"], projects: ["Feature flag rollout"], interview: ["How do you measure success?"] },
        { stage: "Middle", focus: "Data-informed decisions", mustKnow: ["Telemetry", "Event design"], projects: ["Usage analytics dashboard"], interview: ["North Star metric"] },
        { stage: "Senior", focus: "Product strategy", mustKnow: ["Trade-off framing", "Roadmap thinking"], projects: ["Cross-team initiative"], interview: ["Build vs buy"] }
      ]
    }
  ]
};

function getCurrentLang() {
  const value = localStorage.getItem("lang");
  return value === "en" ? "en" : "vi";
}

function setCurrentLang(lang) {
  localStorage.setItem("lang", lang === "en" ? "en" : "vi");
}

function getCurrentTheme() {
  const value = localStorage.getItem("theme");
  return value === "dark" ? "dark" : "light";
}

function setCurrentTheme(theme) {
  localStorage.setItem("theme", theme === "dark" ? "dark" : "light");
}

function applyTheme() {
  const theme = getCurrentTheme();
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  const btn = document.getElementById("themeToggle");
  if (btn) {
    const lang = getCurrentLang();
    btn.textContent = theme === "dark" ? i18n[lang].common.light : i18n[lang].common.dark;
  }
}

function applyTranslations() {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const parts = key.split(".");
    let value = i18n[lang];

    for (const p of parts) {
      value = value && value[p];
    }

    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    const parts = key.split(".");
    let value = i18n[lang];

    for (const p of parts) {
      value = value && value[p];
    }

    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  const search = document.getElementById("searchInput");
  if (search) {
    search.placeholder = i18n[lang].common.search;
  }

  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.textContent = lang === "vi" ? "EN" : "VI";
  }

  applyTheme();
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = getCurrentLang() === "vi" ? "en" : "vi";
      setCurrentLang(next);
      applyTranslations();
      if (window.onLanguageChanged) {
        window.onLanguageChanged(next);
      }
    });
  }

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = getCurrentTheme() === "dark" ? "light" : "dark";
      setCurrentTheme(next);
      applyTheme();
    });
  }

  applyTranslations();
});
