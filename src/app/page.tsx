
import dynamic from 'next/dynamic';
import { BlurFade } from "@/components/magicui/blur-fade";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import Image from "next/image";
import ProjectList from '@/components/Project/project-list';
import projects from '@/components/Project/project-data';
import { ScrollSVGPath } from '@/components/fading';
import PageBackground from '@/components/background';
import Skills from '@/components/skillSection';
import Hero from '@/components/hero';
import { typo } from '@/components/ui/typography';
import ContactUs from '@/components/contactUs';
const BLUR_FADE_DELAY = 0.04;
import Footer from '@/components/footer';

const GithubContributions = dynamic(() => import("@/components/github-contributions").then(mod => mod.GithubContributions), {
  ssr: true,
  loading: () => <GithubSkeleton />
});

export default function Home() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto py-12 sm:py-24 px-6 h-[2600px]">
   
        <main className="flex flex-col  space-y-10">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <Hero />
            <Skills/>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            {/* <h2 className="text-xl font-bold mb-2">GitHub Contributions</h2> */}
            <ProjectList projects={projects.slice(0, 4)} metadata />
          </BlurFade>
          <section id="contributions" className='py-10'>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="my-4 space-y-8 bg-background">
              <h2 className={typo({ variant: "h2" })}>GitHub Contributions</h2>
              <GithubContributions />

              </div>
            </BlurFade>
          </section>
          <ContactUs></ContactUs>
          <Footer/>
        </main>
    </div>
  );
}
