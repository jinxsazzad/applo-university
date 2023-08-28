import React from "react";
import { ActionBtn } from "../shared/Buttons";

const ParallaxSec = () => {
  return (
    <>
      <div
        className="relative h-[80vh] flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('	https://daffodilvarsity.edu.bd/template/images/bg_3.webp')",
        }}
      >
        {/* Overlay with gradient color */}
        <div className="absolute inset-0 bg-slate-900 bg-opacity-25"></div>

        <div className="relative max-container">
          <div className="h-[40vh]">
            <div className="h-full flex justify-center items-center gap-10">
              <iframe
                className="w-2/4 h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Video"
                allowFullScreen
              ></iframe>
              <div className="w-2/4 text-white">
                <h2 className="text-4xl font-bold mb-4">Daffodil University</h2>
                <p className="text-lg ">
                  Being established in 2002, Daffodil International University
                  has become a prominent private university in Bangladesh. Our
                  150 Acre campus is full of life and positive energy, fostering
                  education and innovation for more than 20000 students. Here,
                  students are encouraged to ask questions and think, debate and
                  collaborate with professors to take ownership of their
                  learning.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center text-white mt-10">
            <div className=" flex justify-center items-center gap-4 mb-5">
              <div className="px-40 border-2 border-blue-700 py-6">
                <h2 className="text-3xl font-semibold">100</h2>
                <p>Counter</p>
              </div>
              <div className="px-40 border-2 border-blue-700 py-6">
                <h2 className="text-3xl font-semibold">100</h2>
                <p>Counter</p>
              </div>
              <div className="px-40 border-2 border-blue-700 py-6">
                <h2 className="text-3xl font-semibold">100</h2>
                <p>Counter</p>
              </div>
            </div>
            <ActionBtn link="#" text="Visit Our Campus Virtually" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxSec;
