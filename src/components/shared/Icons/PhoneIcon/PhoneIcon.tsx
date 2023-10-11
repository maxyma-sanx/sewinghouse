"use client";

import { AiOutlinePhone } from "react-icons/ai";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks";

interface PhoneIconProps {
  children?: React.ReactNode;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({ children }) => {
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

  return (
    <div className="relative flex">
      <a
        href="tel:+380676952127"
        className="group flex items-center gap-2"
      >
        <AiOutlinePhone
          className="scale-x-[-1] fill-gray-500 transition group-hover:fill-black dark:fill-white dark:group-hover:fill-gray-400"
          size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
        />
        {children}
      </a>
    </div>
  );
};

export default PhoneIcon;
