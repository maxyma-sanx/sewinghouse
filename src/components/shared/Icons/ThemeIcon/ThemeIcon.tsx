"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks";

const ThemeIcon: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

  return (
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
  );
};

export default ThemeIcon;
