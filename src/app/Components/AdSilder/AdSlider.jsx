"use client";
import Image from "next/image";
import React from "react";
import AdImage from "../../../../public/2022-07-23.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
export default function AdSlider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true}
      modules={[Pagination]}
      
    >
      <div className="s p-32 mt-6">
        <div className="bg-black w-full h-100 p-20 mx-auto ">
          <SwiperSlide><Image src={AdImage} className='md:w-40 h-1/1  '/></SwiperSlide>
          <SwiperSlide><Image src={AdImage} className='md:w-1/1 h-1/1'/></SwiperSlide>
          <SwiperSlide><Image src={AdImage} className='md:w-1/1 h-1/1'/></SwiperSlide>
          <SwiperSlide><Image src={AdImage} className='md:w-1/1 h-1/1'/></SwiperSlide>
          <SwiperSlide><Image src={AdImage} className='md:w-1/1 h-1/1'/></SwiperSlide>
          
        </div>
      </div>
    </Swiper>
  );
}
