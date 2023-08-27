"use client";
import React, { useState } from "react";
import { Fa42Group, FaFaceAngry, FaUser } from "react-icons/fa6";

const facultyData = [
  {
    id: 1,
    name: "Science and Information Technology",
    description:
      "A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/3e7948e37f3bdd83a90f0340d29d01c2.webp",
    date: 11 - 10 - 2023,
  },
  {
    id: 2,
    name: "Engineering and Innovation",
    description:
      "Join us at ENGINEERING AND INNOVATION to unlock your potential in the world of technology and innovation. Your journey to success starts here.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/dee5d4bc7ff859c4169318b8e9e1cd91.webp",
  },
  {
    id: 3,
    name: "Business and Entrepreneurship",
    description:
      "BUSINESS AND ENTREPRENEURSHIP program offers the knowledge and skills you need to thrive in today's dynamic business environment.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/cac3d723b17660c49155599106b10fc9.webp",
  },
  {
    id: 4,
    name: "Arts and Culture",
    description:
      "Immerse yourself in the world of ARTS AND CULTURE. Our program will help you express your creativity and make a lasting impact on society.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/a7ac450870ee09fec3b970ae8f9966c9.webp",
  },
  {
    id: 5,
    name: "Health and Wellness",
    description:
      "Join HEALTH AND WELLNESS to make a difference in people's lives. Our program focuses on promoting health and well-being in the community.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/bb7635b32cdaef3ca879e4dc8a517480.webp",
  },
  {
    id: 6,
    name: "Environmental Studies",
    description:
      "ENVIRONMENTAL STUDIES is your gateway to understanding and preserving our planet. Be part of the solution to global environmental challenges.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/1021144f9eb0dd9e0f858405e9c82949.webp",
  },
];
const tabs = [
  { id: 1, title: "Tab 1", content: "Content for Tab 1" },
  { id: 2, title: "Tab 2", content: "Content for Tab 2" },
  { id: 3, title: "Tab 3", content: "Content for Tab 3" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-5 justify-between items-center md:p-5">
        <div className="border-x-4 border-indigo-500 px-4 text-center">
          <h2>hello</h2>
          <h3 className="text-4xl font-semibold">Admission</h3>
          <p className="text-lg">
            We have students coming from different backgrounds, cultures, and
            nationalities as well. More than 500 international students are
            enrolled in various programs.
          </p>
        </div>
        <div className="border-x-4 border-indigo-500 px-4 text-center">
          <h2>hello</h2>
          <h3 className="text-4xl font-semibold">Admission</h3>
          <p className="text-lg">
            We have students coming from different backgrounds, cultures, and
            nationalities as well. More than 500 international students are
            enrolled in various programs.
          </p>
        </div>
        <div className="border-x-4 border-indigo-500 px-4 text-center">
          <h2>hello</h2>
          <h3 className="text-4xl font-semibold">Admission</h3>
          <p className="text-lg">
            We have students coming from different backgrounds, cultures, and
            nationalities as well. More than 500 international students are
            enrolled in various programs.
          </p>
        </div>
        <div className="border-x-4 border-indigo-500 px-4 text-center">
          <h2>hello</h2>
          <h3 className="text-4xl font-semibold">Admission</h3>
          <p className="text-lg">
            We have students coming from different backgrounds, cultures, and
            nationalities as well. More than 500 international students are
            enrolled in various programs.
          </p>
        </div>
      </div>
      {/* What we offer */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-4">
        <div className="w-3/5">
          <div>
            <h2>What We offer</h2>
            <p>
              At Daffodil International University, students get the opportunity
              to think, learn and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-5">
            <div className="flex justify-between items-start gap-5">
              <div className="bg-slate-400 rounded-full p-5">
                <FaUser className="text-4xl" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">Accommodation</h1>
                <p>
                  We are providing a secure and convenient living facility for
                  our students. DIU dormitories are a home away from home...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-5">
              <div className="bg-slate-400 rounded-full p-5">
                <FaUser className="text-4xl" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">Accommodation</h1>
                <p>
                  We are providing a secure and convenient living facility for
                  our students. DIU dormitories are a home away from home...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-5">
              <div className="bg-slate-400 rounded-full p-5">
                <FaUser className="text-4xl" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">Accommodation</h1>
                <p>
                  We are providing a secure and convenient living facility for
                  our students. DIU dormitories are a home away from home...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-5">
              <div className="bg-slate-400 rounded-full p-5">
                <FaUser className="text-4xl" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">Accommodation</h1>
                <p>
                  We are providing a secure and convenient living facility for
                  our students. DIU dormitories are a home away from home...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-5">
              <div className="bg-slate-400 rounded-full p-5">
                <FaUser className="text-4xl" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">Accommodation</h1>
                <p>
                  We are providing a secure and convenient living facility for
                  our students. DIU dormitories are a home away from home...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start gap-5">
              <div className="bg-slate-400 rounded-full p-5">
                <FaUser className="text-4xl" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">Accommodation</h1>
                <p>
                  We are providing a secure and convenient living facility for
                  our students. DIU dormitories are a home away from home...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center w-full md:w-2/5"
          style={{
            backgroundImage: `url('http://kodeforest.net/html/uoe/extra-images/bg-1.jpg')`,
            height: "100vh", // Set the height as needed
          }}
        >
          {/* Your content goes here */}
        </div>
      </div>
      {/* Secation 3 */}
      <div
        className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('http://kodeforest.net/html/uoe/extra-images/bg-1.jpg')",
        }}
      >
        {/* Overlay with gradient color */}
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50"></div>

        <div className="relative z-10 text-white text-center">
          <div className="mt-8 flex items-center justify-center w-3/4 mx-auto">
            <div className="flex justify-center items-center gap-4">
              {/* First part */}
              <div className="w-full h-fit">
                {/* Video goes here */}
                <iframe
                  className=""
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="">
                <h2 className="text-4xl font-bold mb-4">Parallax Section</h2>
                <p className="text-lg">
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
          <div>
            <div className=" flex justify-center items-center  gap-16">
              <div className="px-40">
                <h2 className="text-3xl font-semibold">100</h2>
                <p>Counter</p>
              </div>
              <div className="px-40">
                <h2 className="text-3xl font-semibold">100</h2>
                <p>Counter</p>
              </div>
              <div className="px-40">
                <h2 className="text-3xl font-semibold">100</h2>
                <p>Counter</p>
              </div>
            </div>
            <button className="btn btn-primary">Hello</button>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div>
        <h1 className="text-center font-bold text-4xl">Our Faculties</h1>
        <div className="flex flex-wrap gap-10 mx-auto w-[90%]">
          {facultyData.map((faculty) => (
            <>
              <div className="card w-96 bg-base-100 shadow-md hover:shadow-xl relative">
                <div className="h-20 bg-gray-400 z-50 absolute mt-28 end-0">
                  {faculty?.date}
                </div>
                <figure className="relative">
                  <img src={faculty.imgurl} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{faculty.name}</h2>
                  <p>{faculty.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* Section 5 */}
      <div>
        <h1 className="text-center font-bold text-4xl">Our Faculties</h1>
        <div className="flex flex-wrap gap-10 mx-auto w-[90%]">
          {facultyData.map((faculty) => (
            <>
              <div className="card w-96 bg-base-100 shadow-md hover:shadow-xl relative">
                <div className="h-20 bg-gray-400 z-50 absolute mt-28 end-0">
                  {faculty?.date}
                </div>
                <figure className="relative">
                  <img src={faculty.imgurl} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{faculty.name}</h2>
                  <p>{faculty.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <div className="py-10 bg-gray-100">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${
                      activeTab.id === tab.id ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">{activeTab.title}</h3>
              {activeTab.id === 1 && (
                <div className="flex flex-wrap gap-10">
                  {facultyData.map((faculty) => (
                    <div key={faculty.id}>
                      <div className="card w-96 bg-base-100 shadow-md hover:shadow-xl relative">
                        <div className="h-20 bg-gray-400 z-50 absolute mt-28 end-0">
                          {faculty?.date}
                        </div>
                        <figure className="relative">
                          <img src={faculty.imgurl} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{faculty.name}</h2>
                          <p>{faculty.description}</p>
                          <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab.id === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {facultyData.map((faculty) => (
                    <div
                      key={faculty.id}
                      className="bg-white rounded-lg shadow-md p-4"
                    >
                      {/* Faculty card content */}
                    </div>
                  ))}
                </div>
              )}
              {activeTab.id === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {facultyData.map((faculty) => (
                    <div
                      key={faculty.id}
                      className="bg-white rounded-lg shadow-md p-4"
                    >
                      {/* Faculty card content */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-10">
        <div>
          <div className="flex">
            <div>
              <h1>
                <span className="text-9xl text-[#D2D2D2]">03</span> DEC
              </h1>
              <p>lsdafjldskfldaksfklasdfklsdjflk</p>
              <p>ksdfalkjl;</p>
              <button>Read More</button>
            </div>
            <img
              src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
              alt=""
            />
          </div>
          <div className="flex">
            <div>
              <h1>
                <span className="text-9xl text-[#D2D2D2]">03</span> DEC
              </h1>
              <p>lsdafjldskfldaksfklasdfklsdjflk</p>
              <p>ksdfalkjl;</p>
              <button>Read More</button>
            </div>
            <img
              src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <h1>
                <span className="text-9xl text-[#D2D2D2]">03</span> DEC
              </h1>
              <p>lsdafjldskfldaksfklasdfklsdjflk</p>
              <p>ksdfalkjl;</p>
              <button>Read More</button>
            </div>
            <img
              src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
              alt=""
            />
          </div>
          <div className="flex">
            <div>
              <h1>
                <span className="text-9xl text-[#D2D2D2]">03</span> DEC
              </h1>
              <p>lsdafjldskfldaksfklasdfklsdjflk</p>
              <p>ksdfalkjl;</p>
              <button>Read More</button>
            </div>
            <img
              src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
