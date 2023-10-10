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
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  return (
    <button
      className="transition hover:opacity-80 sm:hidden"
      onClick={handleBurgerClick}
    >
      {isOpen ? (
        <AiOutlineClose
          className="transition duration-700 hover:rotate-180"
          size={`${matches ? ICONS.default : ICONS.small}`}
        />
      ) : (
        <HiOutlineMenuAlt2 size={`${matches ? ICONS.default : ICONS.small}`} />
      )}
    </button>
  );
};

export default BurgerIcon;
