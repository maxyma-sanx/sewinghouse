"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";

import { Burger, CartIcon, FavoriteIcon, PhoneIcon } from "../shared";

import { MEDIA_QUERIES } from "@/constants";
import { ICONS } from "@/constants/sizes";

import { useMediaQuery } from "@/hooks";

interface MobileNavigationProps {
  handleBurgerClick: () => void;
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ handleBurgerClick, isOpen }) => {
  const [subMenu, setSubMenu] = useState(false);
  const matches = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSmall}px)`);

  return (
    <>
      <div
        onClick={handleBurgerClick}
        className={`
          absolute 
          bottom-0 
          left-0 
          right-0 
          top-0 
          ${!isOpen ? "-translate-x-full" : "translate-x-0"}
          bg-black
          opacity-50
          transition
          dark:bg-white
          ${!isOpen ? "delay-500" : "delay-0"}
          duration-0
        `}
      ></div>
      <div
        className={`
          absolute 
          left-0
          top-0 
          h-full 
          w-2/3 
          ${isOpen && "shadow-2xl shadow-black"}
          transition
          duration-500
          ${!isOpen ? "-translate-x-full" : "translate-x-0"}
          flex
          flex-col
          justify-between
          bg-white
          dark:bg-zinc-900
        `}
      >
        <div>
          <div className="border-b-2 px-4 pb-3 pt-5 dark:border-b-gray-500">
            <Burger
              isOpen={isOpen}
              handleBurgerClick={handleBurgerClick}
            />
          </div>
          <ul className="flex flex-col">
            <li>
              <div className="border-b-[1px] p-4 dark:border-b-gray-500">
                <button className="flex items-center gap-4 transition hover:opacity-70">
                  <AiOutlineHome size={`${matches ? ICONS.default : ICONS.small}`} />
                  <p className={`${matches ? "text-base" : "text-sm"}`}>Головна</p>
                </button>
              </div>
            </li>
            <li>
              <div className="border-b-[1px] p-4 dark:border-b-gray-500">
                <div className="flex justify-between">
                  <button className="flex items-center gap-4 transition hover:opacity-70">
                    <BiCategory size={`${matches ? ICONS.default : ICONS.small}`} />
                    <p className={`${matches ? "text-base" : "text-sm"}`}>Категорії</p>
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
                      <p className={`${matches ? "text-base" : "text-sm"}`}>Категорія 1</p>
                    </li>
                    <li className="flex items-center gap-1">
                      <MdKeyboardArrowRight />
                      <p className={`${matches ? "text-base" : "text-sm"}`}>Категорія 2</p>
                    </li>
                    <li className="flex items-center gap-1">
                      <MdKeyboardArrowRight />
                      <p className={`${matches ? "text-base" : "text-sm"}`}>Категорія 3</p>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="border-b-[1px] p-4 dark:border-b-gray-500">
                <FavoriteIcon nav>
                  <p className={`${matches ? "text-base" : "text-sm"}`}>Відкладені</p>
                </FavoriteIcon>
              </div>
            </li>
            <li>
              <div className="border-b-[1px] p-4 dark:border-b-gray-500">
                <CartIcon nav>
                  <p className={`${matches ? "text-base" : "text-sm"}`}>Кошик</p>
                </CartIcon>
              </div>
            </li>
            <li>
              <div className="border-b-[1px] p-4 dark:border-b-gray-500">
                <PhoneIcon nav>
                  <p className={`${matches ? "text-base" : "text-sm"}`}>+380-50-57-494-69</p>
                </PhoneIcon>
              </div>
            </li>
          </ul>
        </div>
        <ul className="flex justify-center gap-4 border-t-2 p-4 dark:border-t-gray-500">
          <li>
            <a
              href="https://t.me/yulia_koralkova"
              className="transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md"
                src="/telegram.svg"
                alt="Telegram Logo"
                width={50}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yulia_koralkova/"
              className="transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md"
                src="/instagram.svg"
                alt="Instagram Logo"
                width={50}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="viber://chat?number=380676952127"
              className="transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md transition hover:opacity-80"
                src="/viber.svg"
                alt="Viber Logo"
                width={50}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@jkoralkova/"
              className="transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md"
                src="/tiktok.svg"
                alt="Tiktok Logo"
                width={50}
                height={24}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
