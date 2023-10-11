"use client";

import { AiOutlineHeart } from "react-icons/ai";

import { selectFavoriteItems } from "@/redux/favorite/selector";
import { toggleItem } from "@/redux/favorite/slice";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useAppDispatch, useAppSelector, useMediaQuery } from "@/hooks";

interface FavoriteIconProps {
  children?: React.ReactNode;
  nav?: boolean;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ children, nav }) => {
  const favorite = useAppSelector(selectFavoriteItems);
  const dispatch = useAppDispatch();
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

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
        className="group flex items-center gap-4"
      >
        <AiOutlineHeart
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
            ${favorite.length > 0 ? "bg-red-500" : "bg-black"}
            ${favorite.length > 0 ? "dark:bg-red-500" : "dark:bg-white"}
            ${favorite.length > 0 ? "dark:text-white" : "dark:text-black"}
            ${matchesMobileXs ? "text-xs" : "text-[10px]"}
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
