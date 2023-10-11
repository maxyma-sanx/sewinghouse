"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Link
      href="/"
      className="transition"
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
