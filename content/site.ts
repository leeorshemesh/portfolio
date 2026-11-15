export type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  /** Path under `public/`, e.g. `/images/projects/pop-up-puzzles.jpg` */
  image?: string;
  imageAlt?: string;
  links: {
    github?: string;
    live?: string;
  };
};

export const site = {
  name: "Leeor Shemesh",
  title: "Computer Science · UC Santa Barbara",
  location: "Los Angeles, CA",
  tagline:
    "Detail oriented software engineer with a passion for creative problem solving",
  siteUrl: "https://leeor-shemesh.vercel.app",
  email: "leeorshemesh1@gmail.com",
  github: "https://github.com/leeorshemesh",
  linkedin: "https://www.linkedin.com/in/leeor-shemesh",
  resumePath: "/resume.pdf",
  education: {
    school: "University of California, Santa Barbara",
    degree: "Bachelor of Science, Computer Science",
    minor: "Applied Psychology",
    minorSchool: "Gevirtz Graduate School of Education",
    years: "Sep. 2024 – Jun. 2028",
    gpa: "3.88",
    honors: [
      "Regents Scholar",
      "College of Engineering Honors Program",
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Distributed Systems",
      "Artificial Intelligence",
      "Computer Architecture",
      "Linear Algebra",
      "Probability and Statistics",
    ],
  },
  experience: [
    {
      org: "Early Research Scholars Program (ERSP)",
      role: "Undergraduate Researcher",
      dates: "Sep. 2025 – Present",
      location: "UC Santa Barbara",
      bullets: [
        "Developed ClassifAI, a Flutter/Dart application that analyzes screen-time behavior using neural network models, integrating screen capture, machine learning classification, and behavioral data visualization.",
        "Designed core system architecture and session-based workflows connecting user input, screen captures, classification results, and behavioral feedback.",
        "Continued research and development in Fall 2026, resolving session bugs, conducting user testing and feedback collection, and expanding platform compatibility through macOS and Windows ports.",
        "Presented the project’s architecture, machine learning methodology, and research findings at the ERSP Research Symposium to 200+ attendees.",
      ],
    },
  ],
  projects: [
    {
      title: "KOS",
      year: "2026",
      description:
        "MIPS-based operating system written in C, with process management, multiprogramming, memory management, and inter-process communication via pipes and file descriptors.",
      tech: ["C", "Linux", "MIPS", "Systems"],
      links: {},
    },
    {
      title: "Facebook Post Sharing Automation",
      year: "2025",
      description:
        "Chrome extension that automates sharing Facebook posts across predefined groups with a background queue, configurable delays, and a 100-share daily cap — improving distribution efficiency by 75%.",
      tech: ["JavaScript", "Chrome Extensions API", "HTML/CSS"],
      links: {},
    },
    {
      title: "Pop Up Puzzles",
      year: "2026",
      description:
        "Browser-based puzzle platform with nine playable games, modular game registration, and persistent progression — daily challenges, trophies, shop, and inventory stored in the browser.",
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/leeorshemesh/pop-up-puzzles",
        live: "https://leeorshemesh.github.io/pop-up-puzzles/",
      },
    },
  ] satisfies Project[],
  skills: {
    Languages: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Dart",
      "SQL",
      "Assembly",
      "HTML/CSS",
    ],
    "Frameworks / Libraries": [
      "React",
      "Expo",
      "Next.js",
      "Node.js",
      "Flutter",
      "Electron",
      "Tailwind CSS",
      "React Native",
    ],
    "Tools / Systems": [
      "Git",
      "GitHub",
      "Linux",
      "SQLite",
      "Ollama",
      "Vercel",
      "Core ML",
      "Chrome Extensions API",
    ],
  },
  interests: [
    "Climbing",
    "Guitar",
    "Reading",
    "Basketball",
    "Photography",
    "Cooking",
  ],
} as const;
