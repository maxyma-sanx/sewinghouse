"use client";

import { useEffect, useMemo, useState } from "react";

import { Burger, Logo, MobileNavigation } from "..";

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
      <nav className="flex items-center gap-4">
        <Burger
          isOpen={isMobile}
          handleBurgerClick={handleBurgerClick}
        />
        <Logo />
      </nav>
      <MobileNavigation
        isOpen={isMobile}
        handleBurgerClick={handleBurgerClick}
      />
    </header>
  );
};

export default Header;
