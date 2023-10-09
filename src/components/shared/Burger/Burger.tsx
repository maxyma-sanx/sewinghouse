"use client";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

interface BurgerProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const Burger: React.FC<BurgerProps> = ({ handleBurgerClick, isOpen }) => {
  return (
    <button
      className="sm:hidden"
      onClick={handleBurgerClick}
    >
      {isOpen ? <AiOutlineClose size={32} /> : <HiOutlineMenuAlt2 size={32} />}
    </button>
  );
};

export default Burger;
