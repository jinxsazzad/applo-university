"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="z-40">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src="http://kodeforest.net/html/uoe/extra-images/slider1.jpg"
              alt=""
              layout="responsive"
              width={1920}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-black bg-opacity-50 text-white">
              <div className="w-1/2 mx-auto text-center">
              <span className="text-xl mb-2">
                The Best Learning Institution
              </span>
              <h2 className="text-3xl font-bold mb-2">
                Welcome to Our University
              </h2>
              <p className="text-lg mb-4">
                We Believe there is nothing more important than Education.
              </p>
              <a href="#" className="btn btn-outline text-white hover:bg-info">
                Read More
              </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src="http://kodeforest.net/html/uoe/extra-images/slider2.jpg"
              alt=""
              layout="responsive"
              width={1920}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-black bg-opacity-50 text-white">
              <div className="w-1/2 mx-auto text-center">
              <span className="text-xl mb-2">
                The Best Learning Institution
              </span>
              <h2 className="text-3xl font-bold mb-2">
                Welcome to Our University
              </h2>
              <p className="text-lg mb-4">
                We Believe there is nothing more important than Education.
              </p>
              <a href="#" className="btn btn-outline text-white hover:bg-info">
                Read More
              </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src="http://kodeforest.net/html/uoe/extra-images/slider3.jpg"
              alt=""
              layout="responsive"
              width={1920}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-black bg-opacity-50 text-white">
              <div className="w-1/2 mx-auto text-center">
              <span className="text-xl mb-2">
                The Best Learning Institution
              </span>
              <h2 className="text-3xl font-bold mb-2">
                Welcome to Our University
              </h2>
              <p className="text-lg mb-4">
                We Believe there is nothing more important than Education.
              </p>
              <a href="#" className="btn btn-outline text-white hover:bg-info">
                Read More
              </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
