import { ReactNode } from "react";

interface PageBackgroundProps {
  children: ReactNode;
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6f6f6f2e_1px,transparent_1px),linear-gradient(to_bottom,#6f6f6f2e_1px,transparent_1px)] bg-[size:12px_12px] z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground