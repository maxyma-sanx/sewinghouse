"use client";

import { useEffect, useMemo, useState } from "react";

import { Burger, CartIcon, FavoriteIcon, Logo, MobileNavigation, PhoneIcon, ThemeIcon } from "..";

import { MOBILE } from "@/constants";

import { useMediaQuery } from "@/hooks";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const matches = useMediaQuery(`(min-width: ${MOBILE}px)`);

  const handleBurgerClick = useMemo(() => {
    return () => setIsMobile((prev) => !prev);
  }, []);

  useEffect(() => {
    if (matches) {
      setIsMobile(false);
    }
  }, [matches]);

  return (
    <header className="px-4 py-2">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Burger
            isOpen={isMobile}
            handleBurgerClick={handleBurgerClick}
          />
          <div>
            <Logo />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeIcon />
          <PhoneIcon />
          <FavoriteIcon />
          <CartIcon />
        </div>
      </nav>
      <MobileNavigation
        isOpen={isMobile}
        handleBurgerClick={handleBurgerClick}
      />
    </header>
  );
};

export default Header;
