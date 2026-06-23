/**
 * Shared data: projects and career timeline.
 * Keep content updates here so pages stay clean.
 */

export const PROJECTS = [
  {
    id: 1,
    category: "femtech",
    image: "/SisterCircle.jpg",
    badge: "WOMEN HEALTH & EMPOWERMENT / AI in Healthcare",
    title: "SisterCircle+",
    description:
      "SisterCircle+ is an AI-powered menstrual health platform providing symptom tracking, triage, education, and early diagnosis support for women and girls.",
    problem:
      "Millions of women and girls suffer undiagnosed menstrual health conditions due to stigma, limited awareness, delayed diagnosis, and healthcare access barriers.",
    solution:
      "SisterCircle+ uses AI-powered symptom analysis, triage, and tracking to enable earlier diagnosis, informed decisions, and timely care.",
    outcome: null,
    featured: true,
    size: "large", // large | small | wide | tall | medium
    link: "https://sister-circle-plus.vercel.app/",
  },
  {
    id: 2,
    category: "climatetech",
    image: "/WasteLoop.png",
    badge: "ClimateTech",
    title: "WasteLoop",
    description:
      "B2B circular supply chain collecting and sorting recyclables for manufacturing.",
    problem: 
      "Massive volumes of valuable recyclable waste end up unsorted, choking landfills and cutting off manufacturers from reliable circular materials.",
    solution: 
      "WasteLoop creates an efficient B2B circular supply chain, collecting and sorting recyclable waste to supply manufacturers with reliable raw materials.",
    outcome: "Diverting tons, powering circular manufacturing.",
    tags: ["Circular Economy", "B2B", "Sustainability"],
    featured: true,
    size: "small",
    link: "https://wasteloop.onrender.com/",
  },
  {
    id: 3,
    category: "african culture",
    image: "/576.39.png",
    badge: "African Culture",
    title: "576.39 Portfolio",
    description:
      "A systems architecture institution focused on unlocking underutilized economic and cultural sectors across Africa through designing scalable operational frameworks that connect infrastructure, logistics, governance, and cultural production.",
    problem: null,
    solution: null,
    outcome: "African Continuity ✦ Cultural Renaissance",
    tags: ["REACT", "POSTGRESQL", "DJANGO"],
    featured: false,
    size: "tall",
    link: "https://57639-theta.vercel.app/",
  },
  {
    id: 4,
    category: "healthtech",
    image: "/JamiiAfya.png",
    badge: "FINTECH/HEALTHTECH",
    title: "JamiiAfya",
    description:
      "JamiiAfya is a digital community health financing platform enabling families and communities to collectively fund healthcare emergencies quickly.",
    problem:
      "Millions lack affordable emergency healthcare financing, forcing families into financial hardship and delaying critical treatment due to high medical costs.",
    solution:
      "JamiiAfya enables communities to pool healthcare funds digitally, providing accessible, timely financial support for medical emergencies and reducing healthcare barriers.",
    outcome: "Empowering communities, saving lives.",
    tags: ["REACT", "DJANGO", "POSTGRESQL"],
    featured: true,
    size: "wide",
    link: "https://jamii-afya-fan1.vercel.app/",
  },
  /**{
    id: 5,
    category: "blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&q=80",
    badge: "BLOCKCHAIN",
    title: "DeFi Yield Engine",
    description:
      "Automated yield optimisation across 15 DeFi protocols with minimal gas costs.",
    problem: null,
    solution: null,
    outcome: "2.4x APY Improvement",
    tags: ["SOLIDITY", "TYPESCRIPT"],
    featured: false,
    size: "medium",
  },*/
  /**{
    id: 6,
    category: "ai",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=700&q=80",
    badge: "AI / ML",
    title: "Sentinel Threat Model",
    description:
      "ML-based anomaly detection for enterprise network security, reducing false positives by 60%.",
    problem: null,
    solution: null,
    outcome: "60% Fewer False Positives",
    tags: ["PYTHON", "TENSORFLOW", "KAFKA"],
    featured: false,
    size: "medium",
  },*/
];

export const TIMELINE = [
  {
    year: "June 2026 – Present",
    role: "Founder & CEO",
    company: "SisterCircle+",
    description:
      "AI-powered menstrual health platform providing symptom tracking, triage, education, and early diagnosis support for adolescent girls and women aged 13-51.",
  },
  {
    year: "April 2026 – Present",
    role: "CEO & Co-Founder",
    company: "WasteLoop",
    description:
      "Driving the strategic vision, forge critical manufacturing partnerships, and scale the B2B circular supply chain operations.",
  },
  {
    year: "March 2026 – Present",
    role: "Co-founder & Full-stack Developer",
    company: "JamiiAfya",
    description:
      "Developed the full-stack architecture and core features of a digital community health financing platform, enabling families to collectively fund healthcare emergencies.",
  },
  {
    year: "March 2026 – Present",
    role: "Full-stack Web Developer",
    company: "PurpleArk Enterprises",
    description:
      "Developing and maintaining full-stack web applications for various clients, focusing on scalable architectures and responsive designs.",
  },
];

export const SKILLS = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    items: [
      "React",
      "Django / Python",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    num: "02",
    title: "WEB & SYSTEMS",
    items: [
      "API Integration",
      "Git & GitHub",
      "Docker",
    ],
  },
  {
    num: "03",
    title: "DATA & DB",
    items: [
      "PostgreSQL",
      "MongoDB/MariaDB",
      "MySQL",
      "SQL",
      "Database Design",
      "User Research",
    ],
  },
  {
    num: "04",
    title: "PRODUCT",
    items: [
      "MVP Development",
      "User Research",
      "User-Centered Design",
    ],
  },
  {
    num: "05",
    title: "ENTREPRENEURSHIP",
    items: [
      "Startup Building",
      "Market Research",
      "Pitch Development",
    ],
  },
  {
    num: "06",
    title: "SOCIAL IMPACT",
    items: [
      "ClimateTech",
      "Women's HealthTech",
      "Digital Health",
    ],
  },
  {
    num: "07",
    title: "COMPUTER ENGINEERING JOURNEY",
    items: [
      "Programming Fundamentals",
      "Emerging Technology",
      "Electronics & Hardware Interest",
      "Continuous Learning",
    ],
  },
];

export const METRICS = [
  { label: "SUCCESSFUL DEPLOYMENTS", value: "4+", color: "var(--primary-fixed-dim)" },
  { label: "LEADERSHIP", value: "1", suffix: "yr", color: "var(--primary-fixed-dim)" },
  { label: "TECH STACKS", value: "10+", color: "var(--primary-fixed-dim)" },
  { label: "TECH INDUSTRIES", value: "3", color: "var(--primary-fixed-dim)" },
];

export const VALUES = [
  {
    icon: "psychology",
    title: "Human-Centered Engineering",
    description:
      "Technology should start with people, not features. I prioritize understanding user needs, lived experiences, and real-world challenges through empathy, research, and inclusive design.",
  },
  {
    icon: "lightbulb",
    title: "Purpose-Driven Innovation",
    description:
      "I build technology with intention — creating solutions that address meaningful problems and generate positive social, environmental, and community impact.",
  },
  {
    icon: "auto_awesome",
    title: "Iterative Development",
    description:
      "The best solutions are shaped through continuous learning. I embrace research, prototyping, feedback, and refinement to improve every product I build.",
  },
  {
    icon: "verified_user",
    title: "Responsible Engineering",
    description:
      "I believe technology should be built ethically and thoughtfully, prioritizing privacy, accessibility, sustainability, and long-term value.",
  },
];
