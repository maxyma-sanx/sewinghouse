"use client";

import { AiOutlineHeart } from "react-icons/ai";

import { selectFavoriteItems } from "@/redux/favorite/selector";
import { toggleItem } from "@/redux/favorite/slice";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

const FavoriteIcon = () => {
  const favorite = useAppSelector(selectFavoriteItems);
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <button
        onClick={() => {
          const newProduct = {
            id: 1,
            name: "Dress",
            price: 100,
            image: "https://picsum.photos/200/300",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          };

          dispatch(toggleItem(newProduct));
        }}
      >
        <AiOutlineHeart size={28} />
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
            ${favorite.length > 0 ? "bg-red-500" : "bg-black"}
            ${favorite.length > 0 ? "dark:bg-red-500" : "dark:bg-white"}
            ${favorite.length > 0 ? "dark:text-white" : "dark:text-black"}
            text-xs
            text-white   
          `}
        >
          {favorite.length}
        </span>
      </button>
    </div>
  );
};

export default FavoriteIcon;
