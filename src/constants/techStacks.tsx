import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
  SiBun,
  SiC,
  SiSolidity,
  SiHtml5,
  SiDocker,
  SiWeb3Dotjs,
  SiShadcnui,
  SiMongodb,
} from "react-icons/si";

export type stacksProps = Record<
  string,
  {
    Icon: IconType;
    className: string;
  }
>;

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400" },
  TypeScript: { Icon: SiTypescript, className: "text-blue-400" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "text-sky-500" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-cyan-300" },
  Bootstrap: { Icon: BsFillBootstrapFill, className: "text-purple-500" },
  "C++": { Icon: SiCplusplus, className: "text-blue-500" },
  CSS: { Icon: SiCss3, className: "text-blue-500" },
  C: { Icon: SiC, className: "text-sky-400" },
  Web3js:{Icon:SiWeb3Dotjs,className:""},
  Solidity: { Icon: SiSolidity, className: "text-stone-500" },
  HTML: { Icon: SiHtml5, className: "text-orange-600" },
  MUI: { Icon: SiMui, className: "text-blue-400" },
  Shadcn: { Icon: SiShadcnui, className: "text-white-200" },
};

export const BACKEND_STACKS = {
  postgreSql: { Icon: BiLogoPostgresql, className: "text-blue-500" },
  Prisma: { Icon: SiPrisma, className: "text-emerald-500" },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Nginx: { Icon: SiNginx, className: "text-green-500" },
  Express: { Icon: SiExpress, className: "" },
  Bun: { Icon: SiBun, className: "text-yellow-50" },
  MongoDB: { Icon: SiMongodb, className: "text-green-400" },
  Docker: { Icon: SiDocker, className: "text-blue-400" },
};