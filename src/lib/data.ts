import { Github, Linkedin, Mail } from "lucide-react";

export const projects: Project[] = [
  {
    title: "React Portfolio Template",
    description: "A modern portfolio template built with React and Next.js.",
    image: "/images/projects/project1.png",
    tech: [
      "React",
      "Typescript",
      "Next.js",
      "Tailwind",
      "shadcn",
      "Vercel",
      "Copilot",
      "OpenAI",
    ],
    link: "https://github.com/4kyl-biz/react-portfolio-template",
    status: "Done",
  },
  {
    title: "Enjoy Life Healthcare",
    description: "A marketing website for a healthcare company.",
    image: "/images/projects/project2.png",
    tech: [
      "Next.js",
      "Tailwind",
      "shadcn",
      "React Hook Form",
      "Next Intl",
      "Vercel",
      "Copilot",
      "OpenAI",
    ],
    link: "https://www.enjoylifehealthcare.com.au",
    status: "Done",
  },
  {
    title: "Sweet Nest Curtains & Blinds",
    description: "A website for a local curtains and blinds business.",
    image: "/images/projects/project3.png",
    tech: [
      "Next.js",
      "Tailwind",
      "shadcn",
      "React Hook Form",
      "Next Intl",
      "Vercel",
      "Copilot",
      "OpenAI",
    ],
    link: "https://www.sweetnestcurtains.com.au",
    status: "Done",
  },
  {
    title: "Self-Management Calendar",
    description: "An app to plan and reflect on your weekly habits and goals.",
    image: "/images/projects/project4.png",
    tech: [
      "Next.js",
      "Tailwind",
      "shadcn",
      "Vercel",
      "Copilot",
      "OpenAI",
      "and more",
    ],
    status: "In Progress",
  },
  {
    title: "Small Business Showcase",
    description:
      "A showcase for small businesses to display their products and services.",
    image: "/images/projects/project5.png",
    tech: [
      "Figma",
      "JIRA",
      "Github",
      "Vercel",
      "Copilot",
      "OpenAI",
      "and more",
    ],
    status: "Planning",
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ka-yuen-li-b39669147/" },
  { icon: Github, href: "https://github.com/4kyl-biz" },
  { icon: Mail, href: "mailto:lee.li1993wow@gmail.com" },
];
