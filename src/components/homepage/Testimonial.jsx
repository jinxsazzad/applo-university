"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { SectionTitle } from "../shared/Titles";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const testimonials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Testimonial = () => {
  return (
    <>
      <div className="max-container">
        <SectionTitle title="Alumni" subTitle="Our Alumni are our pride as they are engaged in building the world through national and International contributions" style="center" />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
          autoplay={{ delay: 4000 }} // Set autoplay delay in milliseconds
          className="mySwiper"
        >
          {testimonials.map((message) => (
            <SwiperSlide key={0}>
              <div className=" md:mx-12 lg:mx-48 mb-16">
                <div className="card w-auto rounded-md shadow-xl text-black h-full bg-[#F5F7F9]">
                  <figure className="mt-4">
                    <div className="avatar rounded-full p-2 ">
                      <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/qdB3f30/pngegg-2.png.png" />
                      </div>
                    </div>
                  </figure>
                  <div className="card-body flex justify-center items-center">
                    <h2 className="card-title">
                      Ava Thompson
                      <span className="badge badge-secondary">5 days ago</span>
                    </h2>
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="px-5">
                      <FaQuoteLeft></FaQuoteLeft>
                      As a parent, I entrust my greatest blessing to the staff
                      at Kinderex every day. The teachers and director look at
                      each child as an individual, with their own strengths and
                      needs. Marta Stewart Client 2 days ago My son started at
                      Kinderex at the beginning of the year.
                      <span className=" flex justify-end">
                        <FaQuoteRight></FaQuoteRight>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
