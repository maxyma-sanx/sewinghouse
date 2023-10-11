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
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

  return (
    <div className="flex">
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        {theme === "light" ? (
          <MdOutlineLightMode
            className="fill-gray-500 transition hover:fill-black dark:fill-white dark:hover:fill-gray-400"
            size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
          />
        ) : (
          <MdOutlineDarkMode
            className="fill-gray-500 transition hover:fill-black dark:fill-white dark:hover:fill-gray-400"
            size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
          />
        )}
      </button>
      {children}
    </div>
  );
};

export default ThemeIcon;
