import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../../../public/arrow.svg";
import { getProductDetails } from "@/app/utils/getProductDetails";
import { cookies } from "next/headers";

async function ProductContainer() {
  cookies()
  const data = await getProductDetails();
  return (
    <div className="container   h-auto">
      <h1 className="text-textGray1  text-3xl   md:text-productFont font-BestProduct ">
        Best Products{" "}
      </h1>
      <p className="text-sm leading-10">
        Best Deals User Ratings In Last Month
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-10 ">
        {data.map((ProductData) => {
        
          
          return <ProductCard carddata={ProductData} key={ProductData._id} />;
        })}
      </div>

      <div className="flex justify-end w-100  mt-5">
        <div className="flex items-center gap-3">
          <Link className="xl:text-2xl md:text-1xl" href="#">
            Explore Our Store
          </Link>
          <Image src={arrow} alt="arrow"/>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
