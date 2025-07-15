import Link from "next/link"
import { ClassValue } from "clsx";
import { Linkedin, Mail } from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { typo } from "./ui/typography";
import { cn } from "@/lib/utils";

const socialsIcons = [
    {
        id: 1,
        label: "Github",
        icon: <FiGithub className="size-[1.8rem]" />,
        href: "https://github.com/pradeepyd",
        className: "hover:bg-gray-400 hover:text-black" as ClassValue,
    },
    {
        id: 2,
        label: "Linkedin",
        icon: <Linkedin className="size-[1.8rem]" />,
        href: "https://www.linkedin.com/in/pradeep-yadav-7b205b280",
        className: "text-blue-400 hover:bg-blue-700 hover:text-white" as ClassValue,
    },
    {
        id: 3,
        label: "Instagram",
        icon: <FaInstagram className="size-[1.8rem]" />,
        href: "https://www.instagram.com/im_pradeep_ydv",
        className: "text-pink-500 hover:bg-gradient-to-r from-rose-400 to-red-500 hover:text-white" as ClassValue,
    },
    {
        id: 6,
        label: "Twitter",
        icon: <FaXTwitter className="size-[1.8rem]" />,
        href: "https://x.com/pradeep100xdev",
        className: "hover:bg-[#1DA1F2] hover:text-white" as ClassValue,
    },
];
const email = "pradeep20020102@gmail.com"
const ContactUs = () => {
    return (
        <section aria-label="contact" className="mt-6">
            <div className="flex w-full flex-col items-center gap-4 ">
                <div className="size-full w-full space-y-4 ">
                    <h2 className={typo({ variant: "h2" })}>Contact</h2>
                    <p className="text-base text-muted-foreground">
                        Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        If you have any inquiries, please feel free to reach out.
                    </p>
                    <p className="mt-4 text-base text-muted-foreground">
                        You can contact me via email at
                        <Link href={`mailto:${email}`} aria-label={email} className="!text-[#25dde5] flex mt-2 gap-2 mb-2">
                          <Mail/>{email}
                        </Link>
                    </p>

                    <h3 className="text-semibold mb-5 mt-4">Follow me </h3>
                    <div className="gap-6 flex">
                        {socialsIcons.map((social, index) => (
                            <div key={index} className="flex ">
                                <a
                                    href={social.href}
                                    className={cn(
                                        "flex size-9 items-center justify-center rounded-md gap-4 border border-input bg-background ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                        social.className
                                    )}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="external"
                                >
                                    {social.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs