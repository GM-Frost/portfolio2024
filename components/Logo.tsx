import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={54}
        height={54}
        alt="Nayan Bastola"
        priority
      />
    </Link>
  );
};

export default Logo;
