import React, { useState } from "react";
import officialLogo from "../assets/images/images/logo.png";

interface LogoProps {
  variant?: "full" | "badge" | "transparent";
  theme?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showContainerOnDark?: boolean;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
}

const fallbackSources = [
  officialLogo,
  "/images/logo.png?v=20261018",
  "/logo.png?v=20261018",
  "/images/IMG_4830.png?v=20261018",
];

export const Logo: React.FC<LogoProps> = ({
  theme = "dark",
  className = "",
  size = "md",
  showContainerOnDark = true,
  imgClassName = "",
  imgStyle,
}) => {
  // Height definitions for preserving exact aspect ratio without distortion
  const heightClasses = {
    sm: "h-11 sm:h-12",
    md: "h-16 sm:h-20",
    lg: "h-24 sm:h-28",
    xl: "h-36 sm:h-44",
  };

  const [srcIndex, setSrcIndex] = useState(0);

  const handleError = () => {
    if (srcIndex < fallbackSources.length - 1) {
      setSrcIndex((prev) => prev + 1);
    }
  };

  const currentSrc = fallbackSources[srcIndex];

  if (theme === "dark" && showContainerOnDark) {
    return (
      <div
        className={`inline-flex items-center justify-center p-1 sm:p-1.5 bg-white/95 rounded-lg shadow-sm border border-white/20 transition-all duration-200 hover:bg-white hover:shadow-md ${className}`}
      >
        <img
          src={currentSrc}
          alt="Prospecta X"
          className={`${imgStyle ? "" : heightClasses[size]} w-auto object-contain ${imgClassName}`}
          style={imgStyle}
          loading="eager"
          referrerPolicy="no-referrer"
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={currentSrc}
        alt="Prospecta X"
        className={`${imgStyle ? "" : heightClasses[size]} w-auto object-contain ${imgClassName}`}
        style={imgStyle}
        loading="eager"
        referrerPolicy="no-referrer"
        onError={handleError}
      />
    </div>
  );
};
