"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks";

interface ThemeIconProps {
  children?: React.ReactNode;
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  return (
    <div className="flex">
      <button
        className="relative transition hover:opacity-80"
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        {theme === "light" ? (
          <MdOutlineLightMode size={`${matches ? ICONS.default : ICONS.small}`} />
        ) : (
          <MdOutlineDarkMode size={`${matches ? ICONS.default : ICONS.small}`} />
        )}
      </button>
      {children}
    </div>
  );
};

export default ThemeIcon;
