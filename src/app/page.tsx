
import dynamic from 'next/dynamic';
import { BlurFade } from "@/components/magicui/blur-fade";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import Image from "next/image";
import ProjectList from '@/components/Project/project-list';
import projects from '@/components/Project/project-data';
import Fading from '@/components/fading';
const BLUR_FADE_DELAY = 0.04;


const GithubContributions = dynamic(() => import("@/components/github-contributions").then(mod => mod.GithubContributions), {
  ssr: true,
  loading: () => <GithubSkeleton />
});

export default function Home() {
  return (
     <div className="relative z-10 max-w-4xl mx-auto py-12 sm:py-24 px-6">
     <main className="flex flex-col  space-y-10">
      <Fading></Fading>
       <section id="contributions">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold mb-2">GitHub Contributions</h2>
            <GithubContributions />
          </BlurFade>
        </section>
         <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold mb-2">GitHub Contributions</h2>
            <ProjectList projects={projects.slice(0, 4)} metadata />
          </BlurFade>
    </main>
    </div>
  );
}
