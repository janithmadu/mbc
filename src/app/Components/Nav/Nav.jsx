import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="relative container mx-auto ">
      <div className="flex items-center  p-6 justify-between ">
        <div className="pt-2">MBC</div>
        <div className="hidden md:flex space-x-6">
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
        <Link
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-MBCGreen rounded-full"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Nav;
