

import Image from "next/image";
import profile from "@/assets/projects/pp.jpg"
const Hero = () => {
    return (
        <section className="pt-5 mb-20 font-geist text-base">
            {/* Top row: profile + socials */}
            <div className="flex justify-between items-start mb-8">
                {/* Profile picture */}
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
                    <Image
                        src={profile}
                        alt="Profile picture"
                        fill
                        className="rounded-2xl object-cover"
                        sizes="128px"
                    />
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                    <SocialLink
                        href="https://x.com/pradeep100xdev"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-twitter text-sky-500"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        }
                    />

                    <SocialLink
                        href="https://www.linkedin.com/in/pradeep-yadav-7b205b280/"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-linkedin text-blue-600" 
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        }
                    />

                    <SocialLink
                        href="https://github.com/pradeepyd"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github text-neutral-400 hover:text-white"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        }
                    />
                    <SocialLink
                        href="http://localhost:3000/projects" // replace with your actual projects section or page link
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-folder text-emerald-500"
                            >
                                <path d="M3 7V5a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v2"></path>
                                <path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path>
                            </svg>
                        }
                    />

                </div>
            </div>

            {/* Hero text */}
            <h1 className="text-3xl leading-none font-medium text-primary mb-2">
                Hi, I'm Pradeep
            </h1>
            <p className="text-[#8B8B8B] text-base mb-4">
                Full Stack Developer
            </p>
            <p className="text-[#8B8B8B] max-w-xl">
                I'm a Full Stack Developer from Nepal. I enjoy building things that mostly works.I break things ,build fast. Fascinated about space ,science and ideas that expand the mind.
            </p>
            <p className="text-[#8B8B8B] max-w-xl">I am <span className="text-neutral-200 underline">open to work</span>, freelance or collaborate</p>
        </section>
    );
};

export default Hero;

/**
 * Reusable social link button
 */
const SocialLink = ({
    href,
    icon,
}: {
    href: string;
    icon: React.ReactNode;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-700"
    >
        {icon}
    </a>
);
