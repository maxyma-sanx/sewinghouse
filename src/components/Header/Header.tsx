"use client";

import { useEffect, useMemo, useState } from "react";

import { BurgerIcon, CartIcon, FavoriteIcon, Logo, MobileNavigation, PhoneIcon, ThemeIcon } from "..";
import { HeaderCategoriesList } from "./HeaderCategoriesList";

import { MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const matchesMobileSm = useMediaQuery(`(min-width: ${MEDIA_QUERIES.mobileSm}px)`);
  const matchesTabletXs = useMediaQuery(`(min-width: ${MEDIA_QUERIES.tabletXs}px)`);
  const matchesTabletSm = useMediaQuery(`(min-width: ${MEDIA_QUERIES.tabletSm}px)`);

  const handleBurgerClick = useMemo(() => {
    return () => setIsMobile((prev) => !prev);
  }, []);

  useEffect(() => {
    if (matchesTabletXs) {
      setIsMobile(false);
    }
  }, [matchesTabletXs]);

  return (
    <header
      className={`
        border-b-[1px]
        px-4 
        ${matchesTabletSm ? "pb-2 pt-6" : "py-2"} 
      `}
    >
      <div
        className={`
          flex
          ${matchesTabletSm ? "items-start" : "items-center"} 
          justify-between
        `}
      >
        <BurgerIcon
          isOpen={isMobile}
          handleBurgerClick={handleBurgerClick}
        />
        {!matchesTabletSm && (
          <Logo
            width={156}
            height={52}
          />
        )}
        {matchesTabletSm && <PhoneIcon>+380 67 69 52 127</PhoneIcon>}
        {matchesMobileSm && !matchesTabletSm && <PhoneIcon>+380 67 69 52 127</PhoneIcon>}
        {matchesTabletSm && (
          <Logo
            width={356}
            height={102}
          />
        )}
        <div className="flex items-center gap-4">
          <ThemeIcon />
          {!matchesMobileSm && <PhoneIcon />}
          <FavoriteIcon />
          <CartIcon />
        </div>
      </div>
      {matchesTabletSm && <HeaderCategoriesList />}
      <MobileNavigation
        isOpen={isMobile}
        handleBurgerClick={handleBurgerClick}
      />
    </header>
  );
};

export default Header;
