"use client";

import { Burger } from "..";

interface MobileNavigationProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ handleBurgerClick, isOpen }) => {
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
          ${!isOpen ? "delay-500" : "delay-0"}
          duration-0
          `}
      ></div>
      <div
        className={`
          min-w-2/3 
          absolute 
          left-0 
          top-0 
          h-full 
          transition
          duration-500
          ${!isOpen ? "-translate-x-full" : "translate-x-0"}
          bg-white
          p-4`}
      >
        <Burger
          isOpen={isOpen}
          handleBurgerClick={handleBurgerClick}
        />
        <ul className="flex gap-4">
          <li>Мобільна головна</li>
          <li>Мобільні каталог</li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
