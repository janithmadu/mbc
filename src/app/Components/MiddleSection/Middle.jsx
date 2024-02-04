import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import { getProductDetails } from "@/utils/getProductDetails";
async function Middle() {
  const data = await getProductDetails();
  console.log(data.productname);
  return (
    <div className="container m-auto  mt-7  md:mt-60 lg:mt-20 xl:mt-40 w-screen h-auto xl:h-auto md:h-full">
      {/* New Products */}
      <div className=" p-4 md:p-10 ">
        <ProductContainer />
      </div>
    </div>
  );
}

export default Middle;
