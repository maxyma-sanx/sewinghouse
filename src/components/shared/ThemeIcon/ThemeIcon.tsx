"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { MEDIA_QUERIES } from "@/constants";
import { ICONS } from "@/constants/sizes";

import { useMediaQuery } from "@/hooks";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  return (
    <div className="flex">
      <button
        className="relative"
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
    </div>
  );
};

export default ThemeIcon;
