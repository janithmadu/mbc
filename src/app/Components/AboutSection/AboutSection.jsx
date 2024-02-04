import React from "react";
import about from "../../../../public/about.png";
import Image from "next/image";

function AboutSection() {
  return (
    <div className="container mr-auto ml-auto mt-50 lg:mt-0 md:mt-0 h-auto xl:mb-10  p-10 mt:bg-balck xl:bg-red-500 lg:bg-green-600">
      <div className="pb-5 ">
        <h1 className=" text-4xl font-bold ">Why You Should Choose Us</h1>
      </div>
      <div className="flex leading-8 flex-col-reverse md:flex-row">
        <div>
          Choose <span className=" font-semibold">MBC </span>
          for a seamless battery shopping experience. <br />
          Our commitment to reliability ensures that our <br />
          high-quality batteries power your devices consistently. <br />
          With a wide selection tailored to diverse needs, expert <br />
          guidance from our knowledgeable team, and affordable <br />
          pricing without compromising on quality, <br />
          we guarantee your satisfaction. <br />
          <br />
          <span className=" font-semibold">
            Trust MBC for all your battery needs – where reliability and
            affordability come together effortlessly.
          </span>
        </div>

        <div className="md:w-1/2 w-72 xl:w-100">
          <Image src={about} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
