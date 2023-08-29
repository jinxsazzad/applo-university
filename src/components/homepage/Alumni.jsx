"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { SectionTitle } from "../shared/Titles";

const Alumni = () => {
  const alumni = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="max-container">
        <SectionTitle
          title="Alumni"
          subTitle="Our Alumni are our pride as they are engaged in building the world through national and International contributions"
          style="center"
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {alumni.map((i,index) => (
            <SwiperSlide key={index} className="mb-10">
                <div className="card card-compact bg-base-200 shadow-sm">
                  <figure>
                    <Image
                      src="https://daffodilvarsity.edu.bd/images/alumni/729efde6568e7aa6ad532bd6029f79f4.webp"
                      alt="Alex Carry"
                      layout="responsive"
                      height={100}
                      width={100}
                      className=""
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Alex Carry</h2>
                    <p className="uppercase -mt-3">Director, DCCI</p>
                  </div>
                </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </>
  );
};

export default Alumni;
