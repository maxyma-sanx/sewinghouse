"use client";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks";

interface BurgerIconProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ handleBurgerClick, isOpen }) => {
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

  return (
    <button
      className="md:hidden"
      onClick={handleBurgerClick}
    >
      {isOpen ? (
        <AiOutlineClose
          className="fill-gray-500 transition duration-700 hover:rotate-180 hover:fill-black dark:fill-white dark:hover:fill-gray-400"
          size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
        />
      ) : (
        <HiOutlineMenuAlt2
          className="rotate-180 stroke-gray-500 transition duration-700 hover:rotate-0 hover:stroke-black dark:stroke-white dark:hover:stroke-gray-400"
          size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
        />
      )}
    </button>
  );
};

export default BurgerIcon;
