"use client"
import { useEffect, useState } from "react";

interface ScrollSVGPathProps {
  className?: string;
}

 const Fading = ({ className = "" }: ScrollSVGPathProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const rawProgress = Math.min(scrollTop / docHeight, 1);

          // Slow down animation speed to 40% of actual scroll
          const slowProgress = rawProgress * 0.4;

          setScrollProgress(slowProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use the scrollProgress to calculate gradient positions
  // Your example had y1=1266.7 and y2=960.5 (y1 > y2)
  // That means the gradient is reversed or something is off — 
  // usually y1 < y2. Let's keep consistent with your original direction:

  // Let's define gradient height (distance between y1 and y2)
  const gradientHeight = 1000;

  // We'll map scrollProgress (0 to 1) to y1 from 0 to 1266 (example)
  // So slower means progress * maxPosition * 0.4 (already slowed above)
  const maxGradientStart = 1266;
  const gradientY1 = scrollProgress * maxGradientStart;
  const gradientY2 = gradientY1 - gradientHeight; // gradient going upwards

  // Circle scale and shadow, less aggressive because slower animation
  const circleScale = 0.8 + scrollProgress * 0.6; // smaller growth
  const circleShadow = 6 + scrollProgress * 6; // smaller shadow increase

  // Container shadow opacity
  const containerShadowAlpha = 0.24 + scrollProgress * 0.2;

  return (
    <div
      className={`absolute top-3 -left-4 md:-left-20 hidden md:block ${className}`}
      style={{ boxShadow: `0px 3px 8px rgba(0, 0, 0, ${containerShadowAlpha})` }}
    >
      <div className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm">
        <div
          className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          style={{
            backgroundColor: "rgb(16, 185, 129)",
            borderColor: "rgb(5, 150, 105)",
            transform: `scale(${circleScale})`,
            boxShadow: `0 0 ${circleShadow}px rgba(16, 185, 129, 0.6)`,
          }}
        />
      </div>

      <svg
        viewBox="0 0 20 3148"
        width="20"
        height="3148"
        className="ml-4 block"
        aria-hidden="true"
      >
        <path
          d="M 1 0V -36 l 18 24 V 2518.4 l -18 24V 3148"
          fill="none"
          stroke="#9091A0"
          strokeOpacity="0.16"
        />
        <path
          d="M 1 0V -36 l 18 24 V 2518.4 l -18 24V 3148"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.25"
          className="motion-reduce:hidden"
        />
        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={gradientY1}
            y2={gradientY2}
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="0.325" stopColor="#6344F5" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Fading