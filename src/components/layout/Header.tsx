import React from "react";
import { siteConfig } from "../../data/site";
import { CTAButton } from "../ui/CTAButton";

export const Header: React.FC = () => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <a
              id="header-logo"
              href="#"
              className="text-lg sm:text-xl font-black text-brand-purple tracking-tight flex items-center gap-1.5"
            >
              <span className="bg-brand-purple text-white p-1 rounded-lg text-xs sm:text-sm inline-flex items-center justify-center font-bold">
                1:1
              </span>
              <span>{siteConfig.name}</span>
            </a>
          </div>

          {/* Center: Desktop Navigation (Disabled on Mobile) */}
          <nav id="desktop-navigation" className="hidden md:flex space-x-8">
            {siteConfig.navItems.map((item, index) => (
              <a
                key={index}
                id={`nav-item-${index}`}
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-brand-purple transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA Area (Always visible on mobile) */}
          <div className="flex items-center">
            <CTAButton
              id="header-cta"
              variant="accent"
              size="sm"
              className="text-xs sm:text-sm animate-pulse hover:animate-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
