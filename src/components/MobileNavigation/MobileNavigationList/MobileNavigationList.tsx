import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";

import { ICONS, MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks";

import { CartIcon, FavoriteIcon, PhoneIcon } from "@/components";

const MobileNavigationList = () => {
  const [subMenu, setSubMenu] = useState(false);
  const matchesMobileXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileXs}px)`);

  return (
    <ul className="flex flex-col">
      <li>
        <div className="border-b-[1px] p-4 dark:border-b-gray-500">
          <Link
            href="/"
            className="group flex items-center gap-4"
          >
            <AiOutlineHome
              className="fill-gray-500 transition group-hover:fill-black dark:fill-white dark:group-hover:fill-gray-400"
              size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
            />
            <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Головна</p>
          </Link>
        </div>
      </li>
      <li>
        <div className="border-b-[1px] p-4 dark:border-b-gray-500">
          <div className="flex justify-between">
            <button
              className="group flex items-center gap-4"
              onClick={() => {
                setSubMenu((prev) => !prev);
              }}
            >
              <BiCategory
                className="fill-gray-500 transition group-hover:fill-black dark:fill-white dark:group-hover:fill-gray-400"
                size={`${matchesMobileXs ? ICONS.default : ICONS.small}`}
              />
              <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Категорії</p>
            </button>
            <button
              onClick={() => {
                setSubMenu((prev) => !prev);
              }}
              className="transition hover:opacity-80"
            >
              {!subMenu ? <MdKeyboardArrowDown size={28} /> : <MdKeyboardArrowUp size={28} />}
            </button>
          </div>
          {subMenu && (
            <ul className="px-5 pt-2">
              <li className="flex items-center gap-1">
                <MdKeyboardArrowRight />
                <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Категорія 1</p>
              </li>
              <li className="flex items-center gap-1">
                <MdKeyboardArrowRight />
                <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Категорія 2</p>
              </li>
              <li className="flex items-center gap-1">
                <MdKeyboardArrowRight />
                <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Категорія 3</p>
              </li>
            </ul>
          )}
        </div>
      </li>
      <li>
        <div className="border-b-[1px] p-4 dark:border-b-gray-500">
          <FavoriteIcon nav>
            <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Відкладені</p>
          </FavoriteIcon>
        </div>
      </li>
      <li>
        <div className="border-b-[1px] p-4 dark:border-b-gray-500">
          <CartIcon nav>
            <p className={`${matchesMobileXs ? "text-base" : "text-sm"}`}>Кошик</p>
          </CartIcon>
        </div>
      </li>
      <li>
        <div className="border-b-[1px] p-4 dark:border-b-gray-500">
          <PhoneIcon>
            <a
              href="tel:+380505749469"
              className={`${matchesMobileXs ? "text-base" : "text-sm"}`}
            >
              +380-50-57-494-69
            </a>
          </PhoneIcon>
        </div>
      </li>
    </ul>
  );
};

export default MobileNavigationList;
