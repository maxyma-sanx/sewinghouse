"use client";

import { useMemo, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = () => {
  const [count, setCount] = useState(0);

  const handleCartClick = useMemo(() => {
    return () => setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="relative">
      <button onClick={handleCartClick}>
        <AiOutlineShoppingCart size={28} />
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
            ${count > 0 ? "bg-red-500" : "bg-black"}
            text-xs
            text-white  
          `}
        >
          {count}
        </span>
      </button>
    </div>
  );
};

export default CartIcon;
