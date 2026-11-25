export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Connect", "Resume"];

export const PERSONAL_INFO = {
  name: "Harsh vardhan Singh",
  title: "Full Stack & Backend Developer",
  tagline: "I build production-grade backend systems and full-stack applications — from architecting .NET APIs to crafting responsive React UIs.",
  location: "Indore, India",
  email: "harshvardhansingh45b@gmail.com",
  phone: "+91 9589956389",
  linkedin: "https://linkedin.com/in/harshvardhansingh45",
  linkedinDisplay: "linkedin.com/in/harshvardhansingh45",
  github: "https://github.com/harshv45",
  githubDisplay: "github.com/harshv45",
  leetcode: "https://leetcode.com/u/harshvardhansingh451112/",
  leetcodeDisplay: "leetcode.com/harshvardhansingh451112",
  resume: "https://drive.google.com/file/d/1_Nz6FXqMTAL7dLedDyjdiEN3M5VtnEDe/view?usp=drivesdk",
};

export const SKILLS = [
  { category: "Languages", items: ["C#", "JavaScript (ES6+)", "TypeScript", "SQL", "C++", "HTML", "CSS"] },
  { category: "Backend", items: ["ASP.NET Core", ".NET Framework", "Node.js", "Express.js", "RESTful APIs", "Web APIs"] },
  { category: "Frontend", items: ["React.js", "Responsive Design", "Styled Components", "Bootstrap", "TypeScript"] },
  { category: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB", "Query Optimization"] },
  { category: "Tools", items: ["Git", "GitHub", "CI/CD", "Entity Framework", "Code Review", "Debugging"] },
  { category: "Focus Areas", items: ["API Design", "Performance Optimization", "Scalable Architecture", "Agile", "Data Structures"] },
];

export const ACHIEVEMENTS = [
  { stat: "80%", label: "API response time reduction via query tuning & stored procedure optimization" },
  { stat: "30%", label: "Reduction in production downtime through performance upgrades" },
  { stat: "25%", label: "Faster bug resolution by implementing structured debugging workflows" },
  { stat: "99.9%", label: "Uptime maintained on enterprise .NET backend as sole architect" },
];

export const EXPERIENCE = [
  {
    title: "Back End Developer",
    company: "Supersourcing",
    location: "Indore, India",
    period: "January 2026 – July 2026",
    current: false,
    bullets: [
      "Independently developed and enhanced a production-grade .NET Web API backend for enterprise clients, owning complete backend architecture, APIs, and SQL Server databases — maintaining 99.9% uptime.",
      "Optimized high-volume APIs and database queries, achieving 80% reduction in average response time through indexing, query tuning, and stored procedure optimization.",
      "Led performance upgrades across the stack, reducing production incidents and downtime by 30%.",
      "Architected RESTful APIs following best practices for security, scalability, and maintainability.",
      "Collaborated with UI/UX teams, developers, and clients to translate requirements into robust solutions.",
      // "Developed and maintained APIs and backend services using .NET and MERN stack for client-facing applications.",
      // "Built responsive and intuitive frontend features using React.js.",
      // "Resolved complex full-stack bugs, reducing average bug resolution time by 25%.",
      // "Collaborated in an Agile environment to deliver features; mentored junior developers.",
    ],
  },
  {
    title: "Trainee – Full Stack Developer",
    company: "Easyrewardz Software Services",
    location: "Gurugram, India",
    period: "Jun 2025 – Dec 2025",
    current: false,
    bullets: [
      "Developed and maintained APIs and backend services using .NET and MERN stack for client-facing applications.",
      "Built responsive and intuitive frontend features using React.js.",
      "Resolved complex full-stack bugs, reducing average bug resolution time by 25%.",
      "Collaborated in an Agile environment to deliver features; mentored junior developers.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech — Computer Science (Data Science)",
  institution: "Acropolis Institute of Technology and Research, Indore",
  period: "Nov 2021 – May 2025",
  coursework: "Data Structures · Algorithms · DBMS · Web Technologies · Software Engineering",
};

export const CERTIFICATIONS = [
  "Prompt Engineering Hands On – Mastering AI Prompting Techniques",
  "The Web Developer Bootcamp 2025 – Full-stack development comprehensive training",
  "Project Management: Predictive and Adaptive Approach – Agile & Waterfall methodologies",
];

export const PROJECTS = [
  {
    name: "Anvirx",
    stack: ["React.js", "Tanstack", "Supabase"],
    period: "June 2026",
    description: "A web application built for a BPO hiring and outsourcing client to improve online brand visibility and streamline candidate acquisition workflows.",
    highlights: ["React + TypeScript frontend","RESTful API backend", "Supabase for authentication and database"],
    github: "",
  },
  {
    name: "Mini CRM",
    stack: ["ASP.NET Core 8", "Entity Framework", "PostgreSQL", "React.js", "TypeScript", "Bootstrap"],
    period: "Oct 2025",
    description: "Full-stack CRM application enabling seamless customer and contact management with complete CRUD operations, real-time contact count, and a fully responsive UI.",
    highlights: ["RESTful API backend", "Entity Framework + PostgreSQL", "React + TypeScript frontend"],
    github: "",
  },
  {
    name: "Foody Zone",
    stack: ["React.js", "Node.js", "Express.js", "Styled Components"],
    period: "Jan – Feb 2025",
    description: "Dynamic food ordering web app featuring item cards with pricing, search, and toggle functionality, backed by an Express.js server. Designed in Figma, built with Styled Components.",
    highlights: ["Figma UI/UX design", "Express.js REST server", "Styled Components"],
    github: "",
  },
  {
    name: "Contact Application",
    stack: ["React.js", "Firebase"],
    period: "Dec 2024 – Jan 2025",
    description: "Contact management app with full CRUD, Firebase real-time storage, search capabilities, and toast notifications for instant feedback.",
    highlights: ["Firebase real-time DB", "Search & filter", "Toast notifications"],
    github: "",
  },
];
