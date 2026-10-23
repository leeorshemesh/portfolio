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
  location: "Tarzana, CA",
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
    years: "2024 – 2028",
    gpa: "3.88",
    honors: [
      "Regents Scholar",
      "College of Engineering Honors Program",
    ],
    coursework: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Discrete Mathematics",
      "Linear Algebra",
      "Probability and Statistics",
      "Multivariable Calculus",
    ],
  },
  experience: [
    {
      org: "Early Research Scholars Program",
      role: "Undergraduate Researcher",
      dates: "Sep. 2025 – Jun. 2026",
      location: "Isla Vista, CA",
      bullets: [
        "Developed a mobile application using Flutter and Dart to classify and analyze screen time behavior utilizing neural networks.",
        "Designed core application workflows and system architecture for collecting user input, processing classification data, and visualizing behavioral feedback.",
        "Applied machine learning, mobile development, and data visualization techniques to support user-focused research and interactive analytics.",
        "Presented the project at a research symposium through a technical poster presentation, communicating methodology, machine learning approach, and findings.",
      ],
    },
  ],
  projects: [
    {
      title: "Pop Up Puzzles",
      year: "2026",
      description:
        "A static puzzle site with nine playable games, daily challenges, trophies, a shop, and a customizable profile — with progress stored in the browser.",
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/leeorshemesh/pop-up-puzzles",
        live: "https://leeorshemesh.github.io/pop-up-puzzles/",
      },
    },
    {
      title: "ClassifAI",
      year: "2026",
      description:
        "Mobile app for analyzing and classifying screen-time behavior with neural network models, plus behavioral analytics visualization and interactive feedback for research insights.",
      tech: ["Flutter", "Dart", "Neural Networks", "Mobile"],
      links: {},
    },
    {
      title: "KOS",
      year: "2026",
      description:
        "Custom MIPS-based operating system focused on low-level systems programming: memory management, process handling, and kernel architecture.",
      tech: ["C", "Linux", "MIPS", "Systems"],
      links: {},
    },
    {
      title: "Media Outreach Automation Platform",
      year: "2025",
      description:
        "Automation tools for magazine social media operations, advertisement distribution, and community engagement — reducing repetitive outreach and posting work.",
      tech: ["Python", "Playwright", "Automation"],
      links: {},
    },
  ] satisfies Project[],
  skills: {
    Languages: ["C", "C++", "Python", "Java", "JavaScript", "HTML/CSS", "Dart"],
    "Frameworks / Libraries": [
      "React",
      "Next.js",
      "Node.js",
      "Flask",
      "Tailwind CSS",
      "Flutter",
    ],
    "Tools / Systems": ["Docker", "Git", "Linux", "Playwright", "OpenAI API"],
  },
} as const;
