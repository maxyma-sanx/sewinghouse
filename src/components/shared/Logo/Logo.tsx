"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={156}
      height={52}
    />
  );
};

export default Logo;
