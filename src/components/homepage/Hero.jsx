"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { ActionBtn } from "../shared/Buttons";

const Hero = () => {
  const heroContent = [
    {
      id: 1,
      imgUrl: "http://kodeforest.net/html/uoe/extra-images/slider1.jpg",
      topHeading: "The Best Learning Institution",
      mainHeading: "Welcome To Our University",
      subtext: "We Believe There Is Nothing More Important Than Education",
      btnText: "Read More",
    },
    {
      id: 2,
      imgUrl: "http://kodeforest.net/html/uoe/extra-images/slider2.jpg",
      topHeading: "Opening A New World Of Education",
      mainHeading: "Largest Education Institute",
      subtext: "We Are The Largest Education Online and Offline",
      btnText: "Read More",
    },
    {
      id: 3,
      imgUrl: "http://kodeforest.net/html/uoe/extra-images/slider3.jpg",
      topHeading: "New Online Courses",
      mainHeading: "We Bring New Online Courses",
      subtext: "Largest Online Courses Available Here",
      btnText: "Read More",
    },
  ];
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
        {heroContent.map(
          ({ id, imgUrl, topHeading, mainHeading, subtext, btnText }) => (
            <SwiperSlide key={id}>
              <div className="relative">
                <Image
                  src={imgUrl}
                  alt="Hero-Section-Image"
                  layout="responsive"
                  width={1920}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-black bg-opacity-50 text-white">
                  <div className="max-container text-center">
                    <span className="text-xl mb-2">{topHeading}</span>
                    <h2 className=" uppercase text-3xl font-bold mb-2">
                      {mainHeading}
                    </h2>
                    <p className="text-lg mb-4">{subtext}</p>
                    <ActionBtn link="#" text={btnText} rounded="full" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
