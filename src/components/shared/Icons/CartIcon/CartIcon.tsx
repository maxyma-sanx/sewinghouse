"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { selectCartItems } from "@/redux/cart/selector";
import { addItem } from "@/redux/cart/slice";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useAppDispatch, useAppSelector, useMediaQuery } from "@/hooks";

interface CartIconProps {
  children?: React.ReactNode;
  nav?: boolean;
}

const CartIcon: React.FC<CartIconProps> = ({ children, nav }) => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

  return (
    <div className="relative flex">
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
        className={`flex items-center gap-4 ${matchesMobileXs ? "text-base" : "text-sm"}} group`}
      >
        <AiOutlineShoppingCart
          className="fill-gray-500 transition group-hover:fill-black dark:fill-white dark:group-hover:fill-gray-400"
          size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
        />
        <span
          className={`
            absolute 
            ${nav ? "left-4" : "-right-1"}
            ${matchesMobileXs ? "-top-1" : "-top-[2px]"}
            flex 
            ${matchesMobileXs ? "h-4 w-4" : "h-3 w-3"}
            items-center 
            justify-center 
            rounded-full 
            transition
            ${cartItems.length > 0 ? "bg-red-500" : "bg-black"}
            ${cartItems.length > 0 ? "dark:bg-red-500" : "dark:bg-white"}
            ${cartItems.length > 0 ? "dark:text-white" : "dark:text-black"}
            ${matchesMobileXs ? "text-xs" : "text-[10px]"}
            text-white 
          `}
        >
          {cartItems.length}
        </span>
        {children}
      </button>
    </div>
  );
};

export default CartIcon;
