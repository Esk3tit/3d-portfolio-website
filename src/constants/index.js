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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
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
  },
];

const projects = [
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
