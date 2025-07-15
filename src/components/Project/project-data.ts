import postmail from "@/assets/projects/postmail.png"
import jobportal from "@/assets/projects/jobportal.png"
import fanmix from "@/assets/projects/fanmix.png"
import khata from "@/assets/projects/khata.png"
import musictech from "@/assets/projects/musictech.png"
import paytm from "@/assets/projects/paytm.png"
const projects = [
  {
    title: `PostMail`,
    description:
      "AI-Powered Cold Email Generator & Sender.Generate personalized cold emails instantly with AI and send them in one click — all without signing in.",
    href: "https://postmail-one.vercel.app/",
    images: postmail,
    stacks: ["Nextjs", "Framer-motion", "Tailwind CSS", "Resend", "Gemini"],
    isRepo: true,
    repoUrl: "https://github.com/pradeepyd/postmail",
  },

  {
    title: `Fanmix`,
    description:
      "Collaborative music platform where listeners vote and choose the next song in real-time, creating the perfect mix for every group vibe.",
    stacks: ["Next.js", "Tailwind CSS", "WebSocket", "Postgres", "Clerk"],
    images: fanmix,
    isRepo: true,
    repoUrl: "https://github.com/pradeepyd/fanmix",
    href: "https://fanmix-zeta.vercel.app/",
  },

  {
    title: `musictech`,
    images: musictech,
    description:
      "Landing page for an Interactive Music Learning Platform with a modern design and smooth animations",
    stacks: ["Next.js", "Typescript", "Framer", "Tailwind CSS"],
    isRepo: true,
    repoUrl: "https://github.com/pradeepyd/musicTech",
    href: "https://musictech-steel.vercel.app/",
  },

  {
    title: `Khata`,
    description:
      "Lightweight wallet tool to generate seed phrases and create Solana and Ethereum accounts effortlessly.",
    stacks: ["Next.js", "Web3", "Tailwind CSS", "etherjs"],
    images: khata,
    isRepo: true,
    repoUrl: "https://github.com/pradeepyd/khata",
    href: "https://khata-liard.vercel.app/",
  },

  {
    title: `Jobportal`,
    description:
      "Platform that connects job seekers with employers, making it easy to find and post opportunities efficiently",
    stacks: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript",],
    images:jobportal,
    isRepo: true,
    repoUrl: "https://github.com/pradeepyd/HireMe",
    deployedURL: "https://job-portal-ashy-delta.vercel.app/",
  },

  {
    title: `PayTM clone`,
    description:
      "Web terminal interface that replicates my home build's st terminal. Supports over 50 unique commands.",
    stacks: ["Next.js","Turborepo","Web-hook", "Tailwind CSS", "PostgreSQL"],
    images:paytm,
    isRepo: true,
    repoUrl: "https://github.com/pradeepyd/paytmWallet",
    href:""
  },

];

export default projects;
export type TProject = (typeof projects)[0];