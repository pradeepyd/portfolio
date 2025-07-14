import projects from "@/components/Project/project-data";
import ProjectList  from "@/components/Project/project-list";

export const metadata= ({
  title: `All Projects `,
  description:
    "Explore a digital garden of my projects, where I showcase insights on shipping exceptional products, advancing as a developer, and thriving in the tech industry",
  canonicalUrlRelative: "/projects",
  keywords: ["JavaScript", "TypeScript", "React", "Testing", "Career", "Software Development"],
});

const ProjectsPage = () => {

  return (
    <div className="!mt-8 max-w-4xl mx-auto mb-8">
      <div className="flex flex-col flex-wrap justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-left text-xl font-medium"> All Projects </h1>
      </div>

      <div className="mt-6">
        <ProjectList projects={projects} metadata={false} />
      </div>
    </div>
  );
};

export default ProjectsPage;