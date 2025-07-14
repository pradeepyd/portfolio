"use client"
import { useEffect, useState } from 'react';

interface ScrollSVGPathProps {
  className?: string;
}

export const ScrollSVGPath = ({ className = "" }: ScrollSVGPathProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);

      // Optional: ease-in-out for smoothness
      const easedProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setScrollProgress(easedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const svgHeight = 3148;

  // Adjust these for your desired minimal & max length
  const minGradientLength = 10; // almost invisible at top
  const maxGradientLength = svgHeight; // full coverage at bottom

  const currentGradientLength = minGradientLength + (maxGradientLength - minGradientLength) * scrollProgress;

  const gradientY1 = 0; // start from top
  const gradientY2 = gradientY1 + currentGradientLength;

  return (
    <div className={`fixed top-3 left-4 z-50 ${className}`}>
      <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
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
          <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={gradientY1} y2={gradientY2}>
            <stop offset="0" stopColor="#AE48FF" stopOpacity="0" />
            <stop offset="0.3" stopColor="#6344F5" stopOpacity="0.3" />
            <stop offset="0.8" stopColor="#18CCFC" stopOpacity="1" />
            <stop offset="1" stopColor="#18CCFC" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
