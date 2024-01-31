import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
function Middle() {
  return (
    <div className="container m-auto  mt-10  md:mt-20 w-screen h-screen">
      {/* New Products */}
      <div className=" p-4 md:p-10 ">
        <ProductContainer/>
      </div>
    </div>
  );
}

export default Middle;
