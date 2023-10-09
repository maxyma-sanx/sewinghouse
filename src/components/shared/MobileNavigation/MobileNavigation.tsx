"use client";

import { Burger } from "..";

interface MobileNavigationProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ handleBurgerClick, isOpen }) => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50"></div>
      <div className="min-w-2/3 absolute left-0 top-0 h-full bg-white p-4">
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
