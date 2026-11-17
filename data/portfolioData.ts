export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  featured?: boolean;
  type: "Full-Time" | "Internship";
  overview: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  companyCategory: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  status: "In Progress" | "Completed";
  description: string;
  coursework: string[];
  badge?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  contributions: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    context?: string;
    tag?: string;
  }[];
}

export const PERSONAL_INFO = {
  fullName: "KASUNI NAVODYA HEGODA MAKALANDAGE",
  shortName: "Kasuni Makalanda",
  headline: "Software Engineer & M.Sc. Student in Software Engineering & Management",
  location: "Göteborg, Sweden",
  origin: "Sri Lanka",
  phone: "+46 123 1234",
  email: "kasuni.makalanda@gmail.com",
  linkedin: "https://linkedin.com/in/kasuni-makalanda",
  linkedinDisplay: "linkedin.com/kasuni-makalanda",
  github: "https://github.com/kasunavodya",
  githubDisplay: "github.com/kasunavodya",
  website: "https://kasunimakalanda.com",
  websiteDisplay: "kasunimakalanda.com",
  currentRole: "M.Sc. Student @ University of Gothenburg & Software Engineer",
  availability: "Open to Software Engineer, Full-Stack & Frontend Roles in Sweden & Remote",
  bio: "Software Engineer with extensive experience in Next.js, React, TypeScript, and AI-driven platforms. Currently pursuing an M.Sc. in Software Engineering and Management at the University of Gothenburg in Sweden. Dedicated to engineering robust web architectures, intuitive user experiences, and innovative AI workflows.",
  stats: [
    { label: "Industry Experience", value: "3+ Years" },
    { label: "Location", value: "Göteborg, Sweden" },
    { label: "Current Focus", value: "M.Sc. & AI Systems" },
    { label: "Community", value: "IEEE WIE & FOSS" },
  ],
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "hc-se",
    role: "Software Engineer",
    company: "Happy Chimps",
    location: "Nugegoda, Sri Lanka",
    period: "Aug 2025 – Sep 2026",
    startDate: "Aug 2025",
    endDate: "Sep 2026",
    featured: true,
    type: "Full-Time",
    companyCategory: "Software & AI Solutions",
    overview:
      "Led full-stack feature engineering, architectural enhancements, and AI integration across enterprise web applications and customer-facing platforms.",
    highlights: [
      "Enhanced and maintained the Business Hub, a high-performance web-based restaurant and retail management platform built with Next.js.",
      "Engineered responsive components, state management workflows, and API layers to elevate operational efficiency for hospitality clients.",
      "Collaborated closely with the UI/UX team in Figma to translate intricate design systems into accessible, performant React/Next.js interfaces.",
      "Spearheaded and contributed to Antigravity AI projects, implementing modern agentic paradigms and AI workflow automation.",
      "Developed and maintained performant WordPress web solutions with custom styling and CMS integrations for international clients.",
      "Improved and maintained the company's public digital presence using React and Next.js, boosting page load speeds and SEO metrics.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Antigravity AI", "Redux", "Figma", "WordPress", "Tailwind CSS", "Node.js"],
    metrics: "Core contributor to Business Hub & AI initiatives",
  },
  {
    id: "hc-ase",
    role: "Associate Software Engineer",
    company: "Happy Chimps",
    location: "Nugegoda, Sri Lanka",
    period: "Nov 2023 – Aug 2025",
    startDate: "Nov 2023",
    endDate: "Aug 2025",
    type: "Full-Time",
    companyCategory: "Software & AI Solutions",
    overview:
      "Joined the core development team as a Full-Stack Developer, playing a foundational role in building the initial Business Hub product for hospitality and retail businesses.",
    highlights: [
      "Helped build the initial Business Hub platform for hospitality and retail businesses.",
      "Developed and maintained the company website using React and Next.js.",
      "Built and maintained client websites using WordPress and Laravel.",
    ],
    technologies: ["Next.js", "React", "JavaScript", "WordPress", "Laravel"],
    metrics: "Initial foundation of Business Hub platform",
  },
  {
    id: "tm-ase",
    role: "Associate Software Engineer",
    company: "TOLD MEDIA",
    location: "Borella, Sri Lanka",
    period: "April 2023 – Nov 2023",
    startDate: "Apr 2023",
    endDate: "Nov 2023",
    type: "Full-Time",
    companyCategory: "Digital Media & Web Agency",
    overview:
      "Developed dynamic full-stack web applications using the MERN stack and PHP, while contributing cross-functional leadership in corporate tech event management.",
    highlights: [
      "Built dynamic, database-driven web applications leveraging MongoDB, Express.js, React, and Node.js (MERN stack).",
      "Engineered PHP backend micro-services, form handlers, and data integration pipelines.",
      "Developed, maintained, and optimized company website infrastructure using custom WordPress implementations.",
      "Demonstrated versatile leadership and organization skills by participating in managing a major corporate quiz event in Colombo, coordinating technical setups and live scoring.",
    ],
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "PHP", "WordPress", "Event Tech"],
    metrics: "Full-stack delivery & corporate event orchestration",
  },
  {
    id: "rir-intern",
    role: "Software Engineer Intern",
    company: "REACH IT RIGHT (PVT) LTD",
    location: "Colombo, Sri Lanka",
    period: "March 2021 – Oct 2021",
    startDate: "Mar 2021",
    endDate: "Oct 2021",
    type: "Internship",
    companyCategory: "IT Services & Consultancy",
    overview:
      "Gained hands-on professional software engineering experience across full-stack development, server operations, and international client requirement gathering.",
    highlights: [
      "Developed full-stack web applications utilizing MERN stack and PHP backend logic.",
      "Managed website hosting, server provisioning, SSL certificates, and DNS domain routing on GoDaddy.",
      "Engaged in direct communication with international clients to gather, analyze, and document project requirements.",
      "Participated in testing, bug tracking, and staging deployments.",
    ],
    technologies: ["MERN Stack", "React", "Node.js", "PHP", "GoDaddy", "DNS & Hosting", "Requirement Engineering"],
    metrics: "International client communications & live hosting deployments",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "M.Sc. in Software Engineering and Management",
    institution: "University of Gothenburg",
    location: "Gothenburg, Sweden",
    period: "Sep 2026 – Present",
    status: "In Progress",
    badge: "Current Master's Degree",
    description:
      "Advanced postgraduate studies focusing on empirical software engineering, quality assurance, system architectures, and agile project leadership in global engineering contexts.",
    coursework: [
      "Advanced Requirements Engineering",
      "Empirical Software Engineering",
      "Quality Assurance and Testing",
      "Software Project Management",
    ],
  },
  {
    degree: "B.Sc. (Hons) in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Malabe, Sri Lanka",
    period: "Jan 2019 – Mar 2023",
    gpa: "3.09 / 4.00",
    status: "Completed",
    badge: "Honours Degree",
    description:
      "Comprehensive four-year honors program with rigorous foundation in computer science, system design, data structures, and enterprise software engineering principles.",
    coursework: [
      "Object-Oriented Programming",
      "Software Engineering",
      "Data Structures and Algorithms",
      "System Design & Enterprise Architecture",
    ],
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: "WIF Volunteer",
    organization: "SLIIT Women in FOSS Community",
    location: "Malabe, Sri Lanka",
    period: "Jan 2020 – Mar 2023",
    description:
      "Active volunteer promoting Open Source software culture, community building, and technical literacy among female undergraduate engineers.",
    contributions: [
      "Organized workshops, hackathons, and technical mentoring circles on Git, Linux, and Open Source contributions.",
      "Mentored junior female students in foundational web programming and collaborative engineering practices.",
      "Advocated for inclusive tech spaces and diversity in software engineering initiatives.",
    ],
  },
  {
    role: "WIE Committee Member",
    organization: "IEEE Women in Engineering (WIE), Sri Lanka Section",
    location: "Colombo / National, Sri Lanka",
    period: "Active Member",
    description:
      "Committee member collaborating with national IEEE leaders to champion women engineers, organize professional conferences, and host skill-building symposia.",
    contributions: [
      "Assisted in coordinating national IEEE WIE workshops, student summits, and panel discussions.",
      "Fostered professional networking bridges between university engineering graduates and tech industry leaders.",
      "Promoted STEM education and engineering pathways for young women across Sri Lanka.",
    ],
  },
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    category: "Frontend & Web Architecture",
    icon: "code",
    skills: [
      { name: "Next.js", level: "Advanced", context: "Business Hub, company web platforms, App Router & SSR", tag: "Primary" },
      { name: "React", level: "Advanced", context: "Component design, custom hooks, virtual DOM optimization", tag: "Primary" },
      { name: "TypeScript", level: "Advanced", context: "Strict type safety, enterprise schemas & interfaces", tag: "Primary" },
      { name: "JavaScript (ES6+)", level: "Advanced", context: "Async/await, closures, modern web APIs", tag: "Core" },
      { name: "Redux & State Management", level: "Proficient", context: "Complex client-side caching & state sync", tag: "State" },
      { name: "Tailwind CSS", level: "Advanced", context: "Responsive utility styling, custom themes & animations", tag: "Styling" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Advanced", context: "REST APIs, asynchronous event processing", tag: "Backend" },
      { name: "NestJS", level: "Proficient", context: "Modular enterprise architecture & TypeScript services", tag: "Backend" },
      { name: "PHP", level: "Proficient", context: "Custom plugins, server-side data handling & scripts", tag: "Backend" },
      { name: "Java", level: "Proficient", context: "Object-oriented design, algorithms & academic foundations", tag: "Languages" },
      { name: "MongoDB", level: "Proficient", context: "MERN stack document modelling, aggregation queries", tag: "Database" },
      { name: "MySQL", level: "Proficient", context: "Relational schema design, normalization, indexing", tag: "Database" },
    ],
  },
  {
    category: "AI, Tools & Cloud",
    icon: "cpu",
    skills: [
      { name: "Antigravity AI", level: "Advanced", context: "Hands-on projects, agent orchestration & workflows", tag: "AI Tooling" },
      { name: "Docker", level: "Proficient", context: "Containerized environments & reproducible setups", tag: "DevOps" },
      { name: "Git & GitHub", level: "Advanced", context: "Branch workflows, code reviews, semantic versioning", tag: "VCS" },
      { name: "Figma", level: "Advanced", context: "UI/UX collaboration, wireframing & design system handoffs", tag: "Design" },
      { name: "WordPress", level: "Advanced", context: "Custom theme creation, client site maintenance & CMS", tag: "CMS" },
      { name: "Hosting & DNS", level: "Proficient", context: "GoDaddy, domain routing, SSL & production setups", tag: "Infra" },
    ],
  },
  {
    category: "Engineering Leadership & Soft Skills",
    icon: "users",
    skills: [
      { name: "Requirement Gathering", level: "Advanced", context: "International client communication & user stories", tag: "Management" },
      { name: "Problem-Solving", level: "Advanced", context: "Analytical debugging & systematic issue resolution", tag: "Soft Skill" },
      { name: "Teamwork & Collaboration", level: "Advanced", context: "Cross-functional engineering with UI/UX & PMs", tag: "Soft Skill" },
      { name: "Time Management", level: "Advanced", context: "Sprint deadlines, milestone pacing & deliverables", tag: "Soft Skill" },
      { name: "Adaptability", level: "Advanced", context: "Thriving across international team cultures & technologies", tag: "Soft Skill" },
      { name: "Quality Assurance & Testing", level: "Proficient", context: "M.Sc. focus on empirical testing & validation", tag: "QA" },
    ],
  },
];

export const STORY_CHAPTERS = [
  {
    chapter: 1,
    title: "Foundations & The Open Source Spark",
    timeframe: "2019 – 2021",
    tagline: "Building core software principles and giving back to the community",
    location: "SLIIT & Reach It Right, Sri Lanka",
    narrative:
      "Kasuni began her software engineering odyssey at SLIIT, delving deeply into object-oriented programming, data structures, algorithms, and system design. During this era, her commitment to empowerment ignited through volunteering with SLIIT Women in FOSS, mentoring junior women in coding and open source tools. She launched her industry journey with an internship at REACH IT RIGHT, engineering MERN applications and directly communicating with international clients to translate real-world requirements into code.",
    takeaway: "Mastered fundamental CS disciplines, DNS/hosting infrastructure, and client communication.",
    tech: ["MERN Stack", "PHP", "Data Structures", "GoDaddy", "FOSS Volunteering"],
  },
  {
    chapter: 2,
    title: "Full-Stack Agency & Corporate Agility",
    timeframe: "2023",
    tagline: "Rapid delivery, MERN stack mastery, and cross-functional leadership",
    location: "TOLD MEDIA, Colombo",
    narrative:
      "Stepping into TOLD MEDIA as an Associate Software Engineer, Kasuni built versatile web applications using MongoDB, Express, React, Node.js, and PHP. She bridged technical development with cross-functional event execution—participating in organizing and managing a high-stakes corporate quiz event in Colombo. This demonstrated her rare blend of rigorous engineering and calm, proactive project coordination.",
    takeaway: "Honed rapid full-stack delivery, WordPress architecture, and organizational event agility.",
    tech: ["MERN Stack", "PHP", "WordPress", "Corporate Event Leadership"],
  },
  {
    chapter: 3,
    title: "Scaling Business Hub & Pioneering Antigravity AI",
    timeframe: "2023 – 2026",
    tagline: "Next.js architecture, enterprise restaurant management, and AI frontiers",
    location: "Happy Chimps, Nugegoda",
    narrative:
      "At Happy Chimps, Kasuni rose from Associate Software Engineer to Software Engineer. She was an instrumental engineer behind the Business Hub platform—a high-stakes Next.js web application for restaurant and retail businesses. She collaborated closely with Figma design teams, managed intricate state, and elevated the company's public platforms. Crucially, she was among the pioneers implementing Antigravity AI projects, exploring agentic workflows and automated developer intelligence.",
    takeaway: "Led enterprise Next.js engineering, Figma-to-code design systems, and modern AI agent integrations.",
    tech: ["Next.js", "React", "TypeScript", "Antigravity AI", "Redux", "Figma", "Tailwind CSS"],
  },
  {
    chapter: 4,
    title: "Global Horizons & Master's in Sweden",
    timeframe: "2026 – Present",
    tagline: "Empirical software engineering, advanced testing, and international growth",
    location: "University of Gothenburg, Sweden",
    narrative:
      "Now based in Gothenburg, Sweden, Kasuni is pursuing her M.Sc. in Software Engineering and Management at the prestigious University of Gothenburg. Her current focus combines academic rigor in Advanced Requirements Engineering, Empirical Software Engineering, Quality Assurance, and Testing with hands-on full-stack development. She is actively open to software engineering opportunities in Sweden and globally.",
    takeaway: "Combining cutting-edge European academic research with 3+ years of production engineering experience.",
    tech: ["Requirements Engineering", "Empirical SE", "QA & Testing", "Distributed Systems"],
  },
];

