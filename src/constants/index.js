import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aiphone,
  realassist,
  garmin,
  pytype,
  python,
  cpp,
  c,
  flask,
  sql,
  showingguide,
  angular,
  spring,
  java,
  aws,
  alpinejs,
  cuehealth,
  leetcodetracker,
  tesla,
  cypress,
  go,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    external: false,
    downloadable: false,
    title: "About",
  },
  {
    id: "work",
    external: false,
    downloadable: false,
    title: "Work",
  },
  {
    id: "contact",
    external: false,
    downloadable: false,
    title: "Contact",
  },
  {
    id: "./Khai_Phan_Resume.pdf",
    external: true,
    downloadable: true,
    title: "Resume",
  },
  {
    id: "https://github.com/Esk3tit",
    external: true,
    downloadable: false,
    title: "GitHub",
  },
  {
    id: "https://www.linkedin.com/in/khai-phan/",
    external: true,
    downloadable: false,
    title: "LinkedIn",
  },
];

const services = [
  {
    title: "Full-stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Golang",
    icon: go,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Alpine.js",
    icon: alpinejs,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "January 2024 - Present",
    points: [
      "Launched a Jenkins pipeline parallelizing all tests by running them in Docker containers on shared VMs, decreasing total execution time by 56.6% compared to prior sequential pipeline",
      "Integrated automated screenshot capture into automated test reports, reclaiming 16 team-hours weekly for 4 engineers by streamlining debugging processes and accelerating release cycles",
      "Developed and rapidly iterated on 12 REST API endpoints using Golang in collaboration with CATL, integrating Tesla's employee data with CATL's user management system",
      "Implemented an AI Test Automation agent using Python and the Agno library to reduce time spent writing boilerplate end-to-end test code for Tesla One Vision team by 1.5 hours per week",
      "Created 6 form screens with tooltips for Tesla Vision app to help internal users understand how to create new factory vision workflows"
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "September 2023 - December 2023",
    points: [
      "Reduced execution time of end-to-end Cypress tests by 33% by refactoring tests to follow best practices and migrating to Cypress v13",
      "Developed a flake-safe typing test command used in 3 full test suites to make the test suites produce consistent results",
      "Increased the pass rate of regression tests by 20% by fixing flaky and outdated test cases, minimizing time spent re-running tests"
    ]
  },
  {
    title: "Software Development Intern",
    company_name: "Cue Health",
    icon: cuehealth,
    iconBg: "#FFFFFF",
    date: "June 2023 - August 2023",
    points: [
      "Reduced the time to treatment recommendation (in seconds) for customers by 21.7% by implementing multi-select widget answers in the health chatbot using OpenAI API and Java",
      "Enabled thousands of users to efficiently query their subscriptions and orders using product names through the refinement of MongoDB queries in the Java and Spring framework backend",
      "Enhanced the chatbot's recommendation capabilities by researching, comparing, and integrating the best of 3 vector databases for suggesting relevant company blog posts to end users",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "ShowingGuide",
    icon: showingguide,
    iconBg: "#FFFFFF",
    date: "April 2023 - June 2023",
    points: [
      "Integrated a client-centric dashboard and API into the web application, allow clients to use the web application to manage their listings and appointments (previously only realtors could use the web application)",
      "Uncovered and resolved 34 UI/UX issues during comprehensive usability testing, significantly enhancing overall user experience",
      "Led the design and architecture of a client dashboard using Angular, iteratively incorporating relevant features based on client feedback and needs",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Garmin",
    icon: garmin,
    iconBg: "#FFFFFF",
    date: "March 2022 - September 2022",
    points: [
      "Developed new software update for the GPS175 navigator using C",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality code and tests that meet requirements",
      "Contributed to enhanced product performance by creating new fuel onboard capabilities and flyover waypoints, as well as diagnosing and fixing over 12 issues like excessive waypoints in flight plans",
      "Implemented unit tests in C and Python for new features and bug fixes, increasing code coverage by 10%",
      "Improved user flows and overall UX by constructing fuel buttons and implementing auto-saving functionality",
      "Resolved 83% of all failing/faulting tests for G2N navigator products by updating old test cases and designing and documenting new test cases following requirements",
    ],
  }
];

const projects = [
  {
    name: "L33tC0de Tracker",
    description:
      "*Work In Progress* This is an all-in-one central location to keep track of notes on leetcode problems solved to assist in interview prep and review.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: leetcodetracker,
    source_code_link: "https://github.com/Esk3tit/l33tc0de-tracker",
  },
  {
    name: "AIPhone But Better",
    description:
      "Gartic Telephone... But now with AI generated images using Stable Diffusion!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: aiphone,
    source_code_link: "https://github.com/Esk3tit/AIphone-but-better",
  },
  {
    name: "PyType",
    description:
      "Python application that allows users to practice touch typing on the keys they want rather than having to settle for predefined collections of keys found on online typing websites.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "curses",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: pytype,
    source_code_link: "https://github.com/Esk3tit/py-type",
  },
  {
    name: "RealAssist.AI - Real Estate Assistant",
    description:
      "An AI Assistant utilizing ChatGPT language models to help users with all things real estate; created with MERN stack.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "openaiAPI",
        color: "pink-text-gradient",
      },
    ],
    image: realassist,
    source_code_link: "https://github.com/Esk3tit/realassist-mern-prototype",
  },
];

export { services, technologies, experiences, projects };
