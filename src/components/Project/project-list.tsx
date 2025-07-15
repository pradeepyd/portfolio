// import ContentNotFound from "../ui/content-not-found";
import { typo } from "../ui/typography";
import { TProject } from "@/components/Project/project-data";

import ProjectItem from "./project-item";

const ProjectList = ({ projects, metadata }: { projects: TProject[]; metadata?: boolean }) => {
  return (
    <section aria-label="projects" className="mt-8 space-y-6" id="main-content">
      {metadata && <h2 className={typo({ variant: "h2" })}>Featured Projects</h2>}

      <div className="!mt-4">
        {projects.length > 0 ? (
          <ol className="grid gap-8 md:grid-cols-2" role="list">
            {projects.map((project) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </ol>
        ) : (
        //   <ContentNotFound text="No Projects Found" />
        ""
        )}
      </div>
    </section>
  );
};

export default ProjectList;