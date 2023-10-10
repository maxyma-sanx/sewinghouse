"use client";

import { BurgerIcon, Overlay, SocialIcons } from "..";
import { MobileNavigationList } from "./MobileNavigationList";

import { DIRECTION } from "@/constants";

interface MobileNavigationProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ handleBurgerClick, isOpen }) => {
  return (
    <>
      <Overlay
        isOpen={isOpen}
        direction={DIRECTION.right}
        onClose={handleBurgerClick}
      />
      <div
        className={`
          absolute 
          left-0
          top-0 
          h-full 
          w-2/3 
          ${isOpen && "shadow-2xl shadow-black"}
          transition
          duration-500
          ${!isOpen ? "-translate-x-full" : "translate-x-0"}
          flex
          flex-col
          justify-between
          bg-white
          dark:bg-zinc-900
        `}
      >
        <div>
          <div className="border-b-2 px-4 pb-3 pt-5 dark:border-b-gray-500">
            <BurgerIcon
              isOpen={isOpen}
              handleBurgerClick={handleBurgerClick}
            />
          </div>
          <MobileNavigationList />
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default MobileNavigation;
