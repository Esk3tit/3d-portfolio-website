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
  weaviate,
  shopify,
  java,
  aws,
  alpinejs,
  cuehealth,
  leetcodetracker,
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
    title: "Embedded Systems Developer",
    icon: creator,
  },
  {
    title: "Full-stack Developer",
    icon: web,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Spring Framework/Spring Boot",
    icon: spring,
  },
  {
    name: "Weaviate",
    icon: weaviate,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "Alpine.js",
    icon: alpinejs,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Cue Health",
    icon: cuehealth,
    iconBg: "#FFFFFF",
    date: "June 2023 - August 2023",
    points: [
      "Reduced the time to treatment recommendation (in seconds) for customers by 21.7% by implementing multi-select widget answers in the health concierge chatbot.",
      "Enabled thousands of users to efficiently query their subscriptions and orders using product names through the refinement of MongoDB queries in the Java and Spring framework backend.",
      "Enhanced the chatbot's recommendation capabilities by researching, comparing, and integrating three distinct vector databases, ensuring that the best vector database is used to suggest blog posts that align closely with the customer's input.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "ShowingGuide",
    icon: showingguide,
    iconBg: "#FFFFFF",
    date: "April 2023 - June 2023",
    points: [
      "Uncovered and resolved 34 UI/UX issues during comprehensive usability testing, significantly enhancing overall user experience.",
      "Led the design and architecture of a client dashboard using Angular, iteratively incorporating relevant features based on client feedback and needs.",
      "Integrated a client-centric dashboard and API into the web application, providing seamless support for the entire client workflow.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Garmin",
    icon: garmin,
    iconBg: "#FFFFFF",
    date: "March 2022 - September 2022",
    points: [
      "Developed new software update for the GPS175 navigator using C.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality code and tests.",
      "Implemented unit tests in C and Python for new features and bug fixes.",
      "Resolved 83% of faulting or failing unit tests, saving valuable development time near the deadline.",
    ],
  }
];

const projects = [
  {
    name: "L33tC0de Tracker",
    description:
      "*Work In Progress* This is an all-in-one central location to keep track of notes on leetcode problems solved and problems to be solved for later review as interview prep.",
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
