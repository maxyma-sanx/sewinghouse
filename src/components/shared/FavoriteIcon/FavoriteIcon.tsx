"use client";

import { AiOutlineHeart } from "react-icons/ai";

import { toggleItem } from "@/redux/favorite/favoriteSlice";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

const FavoriteIcon = () => {
  const { items: favorites } = useAppSelector((state) => state.favorite);
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
            ${favorites.length > 0 ? "bg-red-500" : "bg-black"}
            text-xs
            text-white   
          `}
        >
          {favorites.length}
        </span>
      </button>
    </div>
  );
};

export default FavoriteIcon;
