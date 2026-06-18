import React from "react";
import { siteConfig } from "../../data/site";

interface CTAButtonProps {
  id: string;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  className = "",
  variant = "accent",
  size = "md",
  onClick,
}) => {
  // Base classes for the button
  const baseStyle =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 shadow-md cursor-pointer";

  // Variant color definitions mapped to our Tailwind v4 custom theme classes
  const variantStyles = {
    primary: "bg-brand-purple text-white hover:bg-brand-purple-hover focus:ring-brand-purple",
    secondary: "bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple-light focus:ring-brand-purple",
    accent: "bg-brand-coral text-white hover:bg-brand-coral-hover focus:ring-brand-coral shadow-lg shadow-brand-coral/20",
  };

  // Size constraints ensuring 44px+ touch targets for mobile accessibility
  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px] w-full sm:w-auto",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      id={id}
      href="#consult"
      onClick={handleClick}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {siteConfig.ctaLabel}
    </a>
  );
};
