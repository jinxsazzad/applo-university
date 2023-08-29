import React from "react";
import { ActionBtn } from "../shared/Buttons";

const ParallaxSec = () => {
  return (
    <>
      <div
        className="relative p-4 md:h-[70vh] flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('	https://daffodilvarsity.edu.bd/template/images/bg_3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-slate-700 bg-opacity-50"></div>

        <div className="relative max-container">
          <div className=" md:h-[40vh]">
            <div className="h-full flex flex-col md:flex-row justify-center items-center gap-10">
              <iframe
                className="w-full md:w-2/4 h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Video"
                allowFullScreen
              ></iframe>
              <div className=" md:w-2/4 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Daffodil University</h2>
                <p className=" md:text-lg mb-7">
                  Being established in 2002, Daffodil International University
                  has become a prominent private university in Bangladesh. Our
                  150 Acre campus is full of life and positive energy, fostering
                  education and innovation for more than 20000 students. Here,
                  students are encouraged to ask questions and think, debate and
                  collaborate with professors to take ownership of their
                  learning.
                </p>
                <ActionBtn link="#" text="Visit Our Campus Virtually" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxSec;
