import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { typo } from "../ui/typography";
import { TProject } from "@/components/Project/project-data"
import Link from "next/link";

type ProjectItemProps = {} & TProject;

const linkClass = "!p-0 h-full !text-[#00ADB5] hover:!text-[#25dde5] !flex items-center gap-2 !text-sm ";

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  href,
  images,
  stacks,
  isRepo,
  repoUrl,
}) => {
  return (
    <li role="listitem">
      <div className="grid gap-8 rounded-md ">
        <Link href={href || "#"}>
          <div className="relative aspect-video overflow-hidden rounded-md  transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
                alt={`${title} not found`}
                priority
                placeholder="blur"
                //@ts-ignore
                src={images}
                className="size-full rounded-md object-cover "
            />
          </div>
        </Link>
        <hgroup className="space-y-2 sm:space-y-1">
          <h2 className="font-ubuntu text-base font-medium ">{title}</h2>

          <p className={"text-xs text-[#00ADB5] "} aria-label="project stacks">
            {stacks.join(" / ")}
          </p>

          <p className={cn(typo({ variant: "paragraph", size: "sm" }), "!mt-4 line-clamp-2")}>
            {description}
          </p>

          <div className="!mt-2 flex items-center gap-4 mb-4">
            {href && (
              <Link
                aria-label={`visit ${title} live URL}`}
                href={href}
                className={linkClass}
              >
                <FaExternalLinkAlt size={12} />
                <span> Live Preview</span>
              </Link>
            )}

            {isRepo && (
              <Link
                aria-label={`visit ${title} Github Repo`}
                href={repoUrl as string}
                className={linkClass}
              >
                <FaGithub />
                <span> Repo Url</span>
              </Link>
            )}
          </div>
        </hgroup>
      </div>
    </li>
  );
};
export default ProjectItem;