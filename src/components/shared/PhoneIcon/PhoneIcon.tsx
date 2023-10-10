"use client";

import { useMemo, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import { MEDIA_QUERIES } from "@/constants";
import { ICONS } from "@/constants/sizes";

import { useMediaQuery } from "@/hooks";

interface PhoneIconProps {
  children?: React.ReactNode;
  nav?: boolean;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({ children, nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  const handlePhoneClick = useMemo(() => {
    return () => setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative flex">
      <button
        onClick={handlePhoneClick}
        className="flex items-center gap-4 transition hover:opacity-80"
      >
        <AiOutlinePhone
          className="scale-x-[-1]"
          size={`${matches ? ICONS.default : ICONS.small}`}
        />
        {!nav && (
          <span
            className={`
            absolute 
            ${nav ? "left-4" : "-right-1"}
            ${matches ? "-top-1" : "-top-[2px]"}
            flex 
            ${matches ? "h-4 w-4" : "h-3 w-3"}
            items-center 
            justify-center 
            rounded-full 
            transition
            ${isOpen ? "bg-red-500" : "bg-black"}
            ${isOpen ? "dark:bg-red-500" : "dark:bg-white"}
            ${isOpen ? "dark:text-white" : "dark:text-black"}
            ${matches ? "text-xs" : "text-[10px]"}
            text-white   
          `}
          >
            <MdKeyboardArrowDown size={12} />
          </span>
        )}
        {children}
      </button>
    </div>
  );
};

export default PhoneIcon;
