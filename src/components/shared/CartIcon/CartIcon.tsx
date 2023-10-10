"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { selectCartItems } from "@/redux/cart/selector";
import { addItem } from "@/redux/cart/slice";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

const CartIcon = () => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <button
        onClick={() => {
          const newProduct = {
            id: cartItems.length,
            name: "Dress",
            price: 100,
            image: "https://picsum.photos/200/300",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          };

          dispatch(addItem(newProduct));
        }}
      >
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
            ${cartItems.length > 0 ? "bg-red-500" : "bg-black"}
            ${cartItems.length > 0 ? "dark:bg-red-500" : "dark:bg-white"}
            ${cartItems.length > 0 ? "dark:text-white" : "dark:text-black"}
            text-xs
            text-white 
          `}
        >
          {cartItems.length}
        </span>
      </button>
    </div>
  );
};

export default CartIcon;
