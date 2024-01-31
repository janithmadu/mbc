import React from "react";

function AboutSection() {
  return (
    <div className="container m-auto flex h-auto bg-black text-red-400 p-10">
      <div className="flex flex-col-reverse md:flex-row items-center px-1 mx-auto md:mt-10 space-y-0 md:space-y-0">
        <h1 className="">
        Why You Should Choose Us

        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto md:mt-10 space-y-0 md:space-y-0">
        <h1 className="text-center max-w-md text-4xl font-bold md:text-5xl uppercase md:text-left  xl:text-7xl">
          Best Place for Your All Needs of Batteries
        </h1>
      </div>
    </div>
  );
}

export default AboutSection;
