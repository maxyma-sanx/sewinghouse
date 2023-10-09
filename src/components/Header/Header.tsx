"use client";

import { useMemo, useState } from "react";

import { Burger, Logo, MobileNavigation } from "..";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleBurgerClick = useMemo(() => {
    return () => setIsMobile((prev) => !prev);
  }, []);

  return (
    <header className="px-4 py-2">
      <nav className="flex items-center gap-4">
        <Burger
          isOpen={isMobile}
          handleBurgerClick={handleBurgerClick}
        />
        <Logo />
      </nav>
      {isMobile && (
        <MobileNavigation
          isOpen={isMobile}
          handleBurgerClick={handleBurgerClick}
        />
      )}
    </header>
  );
};

export default Header;
