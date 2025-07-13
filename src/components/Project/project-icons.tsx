import Image from "next/image";
import { cn } from "@/lib/utils";

const DEFAULT_CLASS = "size-16 border bg-[#11117c] grid place-content-center rounded-md p-3";

export const Postmail = () => {
  return (
    <div className={cn(DEFAULT_CLASS, "bg-[#11117c]")}>
      <Image alt="Power up brain battles" src="projects/postmail" placeholder="blur" />
    </div>
  );
};
export const Fanmix = () => {
  return (
    <div className={cn(DEFAULT_CLASS, "overflow-hidden bg-transparent p-0")}>
      <Image
        alt="Unlocking the Potential of Kuto Digital Characters"
        src="projects/fanmix"
        placeholder="blur"
      />
    </div>
  );
};
export const Musictech = () => {
  return (
    <div className={cn(DEFAULT_CLASS, "bg-transparent bg-white p-2")}>
      <Image
        alt="Unlocking the Potential of Kuto Digital Characters"
        src="projects/musictech"
        placeholder="blur"
      />
    </div>
  );
};

export const JobPortal = () => {
  return (
    <div className={cn(DEFAULT_CLASS, "bg-neutral-900 bg-transparent p-2")}>
      <h3 className="font-ubuntu text-5xl font-semibold">P</h3>
    </div>
  );
};

export const Paytm = () => {
  return (
    <div className={cn(DEFAULT_CLASS, "border-0 bg-transparent p-0")}>
      <Image alt="ultimate source for country rankings" src="projects/paytm" placeholder="blur" />
    </div>
  );
};