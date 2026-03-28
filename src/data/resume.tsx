import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Murali Puvvada",
  initials: "MP",
  url: "https://muralipuvvada.cv",
  location: "Stockholm, Sweden",
  locationLink: "https://www.google.com/maps/place/stockholm",
  description:
    "Software Engineer. I build high-impact, customer-facing web applications at scale — from micro-frontends to macOS utilities.",
  summary:
    "Frontend-focused Software Engineer with 4+ years of experience delivering high-impact, customer-facing web applications at scale. Experienced with A/B testing, CI/CD, shared component libraries, and analytics at scale, I am passionate about creating clean, performant micro-frontends and tools that enhance both developer and user experience.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "React Query",
    "REST APIs",
    "GraphQL",
    "Cypress",
    "Rollup",
    "Storybook",
    "CI/CD",
    "Jenkins",
    "Tauri",
    "PostgreSQL",
    "AWS S3",
    "Stripe",
    "Tailwind CSS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "saipuvvada81299@gmail.com",
    tel: "+46 767519626",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Murali-Puvvada",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/murali-puvvada",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:saipuvvada81299@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Kindred Group",
      href: "https://www.kindredgroup.com/",
      badges: [],
      location: "Stockholm, Sweden",
      title: "Software Engineer, Frontend",
      logoUrl: "/kindred.svg",
      start: "Sep 2022",
      end: "Present",
    },
    {
      company: "Inspire Chits",
      badges: [],
      href: "https://www.inspirechits.in/",
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/inspirechits.png",
      start: "Jan 2022",
      end: "Apr 2022",
    },
    {
      company: "Exposys",
      href: "http://www.exposysdata.org/",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/exposys.png",
      start: "Jan 2021",
      end: "Mar 2021",
    },
  ],
  education: [
    {
      school: "Blekinge Tekniska Högskola",
      href: "https://www.bth.se/",
      degree: "Master's Degree, Telecommunication Systems",
      logoUrl: "/bth.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Jawaharlal Nehru Technological University Hyderabad",
      href: "https://jntuh.ac.in/",
      degree: "Bachelor's Degree, Electronics and Communication Engineering",
      logoUrl: "/jntuhlogo.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Dock Digits",
      href: "https://github.com/Murali-Puvvada/dock-digits",
      dates: "2025",
      active: true,
      description:
        "A macOS utility app that brings Windows-style positional app launching (e.g. Option + 1) to macOS, allowing users to instantly launch or focus apps via keyboard shortcuts. Automatically mirrors the user's macOS Dock order, with persistent configuration and optional launch at login.",
      technologies: ["Rust", "Tauri", "React", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Murali-Puvvada/dock-digits",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dockdigits.png",
      video: "",
    },
    {
      title: "AI Icon Generator",
      href: "https://github.com/Murali-Puvvada/icon-generator-dalle",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "A full-stack AI icon generation app where users can sign up, generate custom icons using a prompt-based form, and purchase credits via Stripe Checkout — with webhooks automatically updating balances. Includes cloud storage via AWS S3, a personal gallery, and a public community feed.",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "Prisma",
        "NextAuth.js",
        "Stripe",
        "AWS S3",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Murali-Puvvada/icon-generator-dalle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blank.png",
      video: "",
    },
    {
      title: "Mini YouTube",
      href: "https://youtube-api-with-react.vercel.app/",
      dates: "May 2022",
      active: true,
      description:
        "A React web app that lets users search for YouTube videos and watch them in an embedded player, with trending videos loaded on initial visit. Integrated YouTube Data API v3 using a reusable Axios client to fetch video results, titles, and descriptions.",
      technologies: ["React", "Axios", "YouTube Data API v3", "Semantic UI"],
      links: [
        {
          type: "Website",
          href: "https://youtube-api-with-react.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Murali-Puvvada/YoutubeAPI-with-React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/youtube.png",
      video: "",
    },
  ],
} as const;
