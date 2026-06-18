import React, { useEffect, useState } from "react";
import { siteConfig } from "../../data/site";
import { PhoneCall } from "lucide-react";

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the floating button after scrolling down 150px to reduce visual noise on load
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="floating-cta-container"
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-90 pointer-events-none"
      } md:bottom-8 md:right-8`}
    >
      <a
        id="floating-cta"
        href="#consult"
        className="flex items-center gap-2 px-5 py-3.5 bg-brand-coral hover:bg-brand-coral-hover text-white font-extrabold rounded-full shadow-lg shadow-brand-coral/25 hover:shadow-brand-coral/40 active:scale-95 transition-all duration-250 min-h-[48px] text-sm sm:text-base tracking-wide border-2 border-white/20"
      >
        <PhoneCall id="floating-cta-icon" className="w-4 h-4 animate-bounce" />
        <span>{siteConfig.ctaLabel}</span>
      </a>
    </div>
  );
};
