"use client";

import { useMemo, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";

const PhoneIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePhoneClick = useMemo(() => {
    return () => setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <button onClick={handlePhoneClick}>
        <AiOutlinePhone
          className="scale-x-[-1]"
          size={28}
        />
        <span
          className={`
            absolute 
            -right-1 
            -top-1 
            flex 
            h-4 
            w-4 
            items-center 
            justify-center 
            rounded-full 
            transition
            ${isOpen ? "bg-red-500" : "bg-black"}
            ${isOpen ? "dark:bg-red-500" : "dark:bg-white"}
            ${isOpen ? "dark:text-white" : "dark:text-black"}
            text-xs
            text-white   
          `}
        >
          v
        </span>
      </button>
    </div>
  );
};

export default PhoneIcon;
