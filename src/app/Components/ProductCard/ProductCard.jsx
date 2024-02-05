import Image from "next/image";
import React from "react";
import Add from "../../../../public/add-circle.png";
import BattryImage from "../../../../public/Rectangle.png";
import Link from "next/link";
import { urlFor } from "../../../../sanity/lib/client";
function ProductCard({ carddata }) {
  return (
    <div className="w-CardWidth h-auto shadow-xl shadow-gray-400 rounded-lg p-3 pb-6 xl:pb-14 xl:w-CardWidthXL xl:h-auto">
      <div className="flex justify-end">
        <Image src={Add} className=" w-7 md:w-7 xl:w-12" alt="add" />
      </div>
      <Image src={urlFor(carddata.Image).url() } width={250} height={250}   alt="battry"/>
      <h1 className="text-1xl text-left md:text-1xl xl:text-2xl mt-10 ">
        {carddata.productname}
      </h1>
      <div className="flex items-center gap-4 md:gap-4 xl:gap-14 ">
        <h3 className="md:text-sm text-sm leading-10 md:leading-10 xl:leading-10 xl:text-xl text-green-400 font-black">
          Rs.{carddata.ProductPrice}
        </h3>
        <Link
          href="#"
          className=" w-16 h-10 xl:w-24 md:w-16 md:h-8 xl:h-12 rounded-xl border-2 border-green-600 text-center text-sm  xl:text-lg md:flex md:justify-center md:items-center   px-3 py-2 text-green-400 cursor-pointer"
        >
          More{" "}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
