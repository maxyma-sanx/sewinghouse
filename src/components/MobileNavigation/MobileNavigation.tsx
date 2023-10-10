"use client";

import { AiOutlineHome } from "react-icons/ai";

import { Burger, CartIcon, FavoriteIcon } from "../shared";

import { MEDIA_QUERIES } from "@/constants";
import { ICONS } from "@/constants/sizes";

import { useMediaQuery } from "@/hooks";

interface MobileNavigationProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ handleBurgerClick, isOpen }) => {
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  return (
    <>
      <div
        onClick={handleBurgerClick}
        className={`
          absolute 
          bottom-0 
          left-0 
          right-0 
          top-0 
          ${!isOpen ? "-translate-x-full" : "translate-x-0"}
          bg-black
          opacity-50
          transition
          dark:bg-white
          ${!isOpen ? "delay-500" : "delay-0"}
          duration-0
        `}
      ></div>
      <div
        className={`
          absolute 
          left-0
          top-0 
          h-full 
          w-2/3 
          shadow-2xl 
          shadow-black
          transition
          duration-500
          ${!isOpen ? "-translate-x-full" : "translate-x-0"}
          bg-white
          dark:bg-zinc-900
        `}
      >
        <div className="border-b-2 px-4 pb-3 pt-5">
          <Burger
            isOpen={isOpen}
            handleBurgerClick={handleBurgerClick}
          />
        </div>
        <ul className="flex flex-col">
          <li>
            <div className="flex border-b-[1px]">
              <button className="flex items-center gap-4 p-4">
                <AiOutlineHome size={`${matches ? ICONS.default : ICONS.small}`} />
                Головна
              </button>
            </div>
          </li>
          <li>
            <div className="flex border-b-[1px] p-4">
              <FavoriteIcon nav>Відкладені</FavoriteIcon>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 border-b-[1px] p-4">
              <CartIcon />
              <p>Кошик</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
