import Image from "next/image";
import Link from "next/link";
import React from "react";
import batman from "../../../../public/20945560.jpg";
import arrow from "../../../../public/arrow.svg";
import Battey from "../../../../public/battye.jpg";
function HeroPage() {
  return (
    <div className="container  flex flex-col-reverse md:flex-row items-center px-6 mx-auto md:mt-10 space-y-0 md:space-y-0  ">
      <div className="flex flex-col mb-32 h-24 space-y-12 md:w-1/2">
        <h1 className="text-center max-w-md text-4xl font-bold md:text-5xl uppercase md:text-left  xl:text-7xl">
          Best Place for Your All Needs of Batteries
        </h1>

        <Link
          href="#"
          className=" flex flex-col gap-x-3 max-w-sm text-center items-center text-textGray md:text-left md:flex-row xl:text-2xl xl:"
        >
          Need any help? We got you
          <Image src={arrow} />
        </Link>
      </div>
      <div className="md:w-1/2 w-72 xl:w-100">
        <Image src={batman} />
      </div>
    </div>
  );
}

export default HeroPage;
