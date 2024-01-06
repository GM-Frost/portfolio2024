import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src="/logo.svg"
        width={54}
        height={54}
        alt="Nayan Bastola"
        priority
      />
      <span className="font-medium uppercase text-primary text-2xl -ml-2">
        ayan
      </span>
    </Link>
  );
};

export default Logo;
