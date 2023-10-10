"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
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
        {theme === "light" ? <MdOutlineLightMode size={28} /> : <MdOutlineDarkMode size={28} />}
      </button>
    </div>
  );
};

export default ThemeIcon;
