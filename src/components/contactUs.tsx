import Link from "next/link"
import { ClassValue } from "clsx";
import { Linkedin } from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { typo } from "./ui/typography";
import { cn } from "@/lib/utils";

const socialsIcons = [
  {
    id: 1,
    label: "Github",
    icon: <FiGithub className="size-[1.2rem]" />,
    href: "",
    className: "hover:bg-gray-400 hover:text-black" as ClassValue,
  },
  {
    id: 2,
    label: "Linkedin",
    icon: <Linkedin className="size-[1.2rem]" />,
    href: "",
    className: "hover:bg-blue-700 hover:text-white" as ClassValue,
  },
  {
    id: 3,
    label: "Instagram",
    icon: <FaInstagram className="size-[1.2rem]" />,
    href: "",
    className: " hover:bg-gradient-to-r from-rose-400 to-red-500 hover:text-white" as ClassValue,
  },
  {
    id: 6,
    label: "Twitter",
    icon: <FaXTwitter className="size-[1.2rem]" />,
    href: "",
    className: "hover:bg-[#1DA1F2] hover:text-white" as ClassValue,
  },
];
const email="pradeep20020102@gmail.com"
const ContactUs =() => {
    return (
    <section aria-label="contact" className="!mt-5">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <div className="size-full space-y-4 md:max-w-xs">
          <h2 className={typo({ variant: "h2" })}>Contact</h2>
          <p className="text-base text-muted-foreground">
            If you have any inquiries, please feel free to reach out. You can contact me via email
            at{" "}
            <Link href={`mailto:${email}`} aria-label={email}>
              {email}
            </Link>{" "}
          </p>

          <div className="space-y-3 flex ">
            <h3>Follow me </h3>
            {socialsIcons.map((social,index)=>(
                <div key={index} className="flex items-center">
                <a
                                href={social.href}
                                className={cn(
                                  "flex size-9 items-center justify-center rounded-md border border-input bg-background ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
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