"use client";

import { AiOutlineHeart } from "react-icons/ai";

import { selectFavoriteItems } from "@/redux/favorite/selector";
import { toggleItem } from "@/redux/favorite/slice";

import { MEDIA_QUERIES } from "@/constants";
import { ICONS } from "@/constants/sizes";

import { useMediaQuery } from "@/hooks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

interface FavoriteIconProps {
  children?: React.ReactNode;
  nav?: boolean;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ children, nav }) => {
  const favorite = useAppSelector(selectFavoriteItems);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  return (
    <div className="relative flex">
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
        className="flex items-center gap-4 transition hover:opacity-80"
      >
        <AiOutlineHeart size={`${matches ? ICONS.default : ICONS.small}`} />
        <span
          className={`
            absolute 
            ${nav ? "left-4" : "-right-1"}
            ${matches ? "-top-1" : "-top-[2px]"}
            flex 
            ${matches ? "h-4 w-4" : "h-3 w-3"}
            items-center 
            justify-center 
            rounded-full 
            transition
            ${favorite.length > 0 ? "bg-red-500" : "bg-black"}
            ${favorite.length > 0 ? "dark:bg-red-500" : "dark:bg-white"}
            ${favorite.length > 0 ? "dark:text-white" : "dark:text-black"}
            ${matches ? "text-xs" : "text-[10px]"}
            text-white   
          `}
        >
          {favorite.length}
        </span>
        {children}
      </button>
    </div>
  );
};

export default FavoriteIcon;
